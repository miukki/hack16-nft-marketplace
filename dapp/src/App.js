import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import {useMoralis, useMoralisCloudFunction, useMoralisWeb3Api, useMoralisWeb3ApiCall} from 'react-moralis'
import {APP_ID, SERVER_URL} from './config'
import {create} from 'ipfs-http-client';

const Gallery = (nfts) => {

  return <>test</>
 }

const Logo = () => {
  return  <>
        <div className="container">
          <code>
            <h2 className="title">
            <code>
              <span className="title-word-word-1">Ha</span>
              <span className="title-word title-word-2">cka</span>
              <span className="title-word title-word-3">tho</span>
              <span className="title-word title-word-4">n</span>
              </code>      
            </h2>
          </code>      
        </div>
        <img style={{width: '100px'}} src={logo} className="App-logo" alt="logo" />
        <code style={{background: `rgba(0,0,255,0.4)`}}>
          We’ve created a digital gallery of artwork created by our people’s children powered by Blockchain.​
        </code>
        <br/>
      </>
}
function App() {
  // const history = useHistory();
  const {setUserData, Moralis, login, signup, isAuthenticated, user, logout, isAuthenticating} = useMoralis()
  const {token} = useMoralisWeb3Api()
  const { isInitialized } = useMoralis();

  console.log({token, isInitialized})

  const [dataURL, setDataURL] = useState(null)
  
  const [state, setState] = useState({})

  
  console.log({isAuthenticated, address: user?.get('ethAddress')}, {...state})

  
  React.useEffect(() => {

    
    const get = async () => {
      if (isInitialized) {
        const options = { address: "0x0968dac33e4a0e690bf1f0fefe47728acdd56985", chain: "rinkeby" };

        const NFTs = await token.getAllTokenIds(options);
        console.log(`? 0x0968dac33e4a0e690bf1f0fefe47728acdd56985`,{NFTs})

        setState({nfts: NFTs?.result || []})

      }
    }
    
    get()


// eslint-disable-next-line
  }, [isInitialized])


  
  const onClick = async () => {
    const currentUser = Moralis.User.current()
    if (!currentUser) {
      //await  Moralis.Web3.authenticate()

      Moralis.authenticate().then(function (user) {
          console.log(user.get('ethAddress'))
          window.location.href = '/'
      })
  }
}


  // if (isAuthenticating) {
  //    return (
  //       <>loader...</>
  //   );
  // }


  

  const uploadToIpfs = async (file) => {
      const client = create('https://ipfs.infura.io:5001/api/v0')
      try {
        setState({isLoading: true})
        console.log("IPFS: START uploading")
        const uploadedFile = await client.add(file)
        console.log("IPFS: FINISH uploading")
        const ipfsToImage = `https://ipfs.infura.io/ipfs/${uploadedFile.path}`
        setState({...state, ipfsToImage, isLoading: false, external_url: `https://ttzsznn3ubho.usemoralis.com`})

      } catch(error) {
        console.log('Error uploading file to IPFS: ', error)
      }
  }


  const blobToBase64 = (blob) => {
  const reader = new FileReader()
  reader.readAsDataURL(blob)
  return new Promise((rs, rj) => {
    reader.onloadend = () => {
      rs(reader.result)
    }
    reader.onerror = rj
  })
}

  const onFileChange = async (e) => {
    const [file] = e.target.files

    const dataURL = await blobToBase64(file)

    const fileName = file?.name || `default.pdf`
    console.log({fileName, dataURL})

    setDataURL(dataURL)
    uploadToIpfs(file)
  }

  const onCallContract = () => {
    if (state?.ipfsToImage) {
        console.log({ipfsToImage: state?.ipfsToImage})

    }

  }


  if (isAuthenticated) {

  return (
    <div className="App">
      <header className="App-header">

        <Logo/>
        <div>
          <code><span >Great! You connected to the wallet!</span></code>
        </div>

        <div>
          <img style={{width: `400px`}} src={`https://ipfs.infura.io/ipfs/QmRQAerTwAcYtd6rncyWj8R8ysCHTW6qWwcdttDN6g8pxw`} />
        </div>

        <div>
          <code><span style={{background: `rgba(0,0,0,25%)`}}>{user?.get('ethAddress')} </span></code>
        </div>



          <div style={{width: `50%`, margin: `2em 0`}} >

          <div>
            <input style={{opacity: 0}} id="contained-button-file" multiple type="file" onChange={(e) => onFileChange(e)} />
          </div>

          <label htmlFor="contained-button-file"><div style={{cursor: 'pointer'}}>
            <code>1. <span style={{background: `rgba(255, 165, 0,25%)`}}>Upload Art Image to IPFS</span>  </code>
          </div></label>
          {dataURL? <img src={dataURL} style={{maxWidth: `200px`, margin: `1em`}} /> : null}

          <div>
            {state?.isLoading  ? <code>Uploading file to IPFS ...</code> :  null}
          </div>

          {state?.ipfsToImage ? 
           <div style={{background: `rgba(255, 165, 0,25%)`, padding:`1em`}} >


             <>
            Great! uploaded to IPFS: <a href={state?.ipfsToImage}>{`${state?.ipfsToImage ? state?.ipfsToImage.substr(-30, 30) : ``}`}</a> 
            <div style={{padding:`0 0 1em 0`}}>
              Provide some context:
              <div>
                <input
                  placeholder="name"
                  onChange={(e) => {
                    setState({...state, name: e?.target?.value})
                  }}
                />
            </div>
              <div><input
              placeholder="description"
              onChange={(e) => {
                setState({...state, description: e?.target?.value})
              }}
            /></div>

            </div>
            </> 

           
           </div> : null}

          </div>





        <div style={{width: `50%`, margin: `2em 0`}} >
          <div style={{cursor: 'pointer'}} onClick={() => {

            return state?.ipfsToImage ? onCallContract() : alert(`Follow the steps`)
            

          }}>
            <code>2. <span style={{background: `rgba(0,255,0,25%)`}}>Deploy to Blockchain</span>  </code>
          </div>
        </div>


        <div style={{width: `50%`, margin: `2em 0`}}>
          <div style={{cursor: 'pointer'}} onClick={() => logout()}>
            <code><span style={{background: `rgba(128,0,0,25%)`}}>Disconnect</span></code>
          </div>
        </div>

          <Gallery nfts={state.result}/>

      </header>
    </div>
    );

  }

  const mnemonic = 'knock shiver excite entire talk donate quick train correct hawk connect pigeon'


  return (
   <div className="App">
      <header className="App-header">

      

        <Logo/>
        <div style={{width: `50%`, margin: `2em 0`}} >
          <code> 1. Create wallet and  use this  mnemonic phrase: <br/><span style={{background: `rgba(255,239,0,25%)`}}>{mnemonic}</span> and network <span style={{background: `rgba(255,239,0,25%)`}}>Rinkeby</span></code>
        </div>
       
       <div style={{width: `50%`, margin: `2em 0`}} >
        2. <span style={{cursor: 'pointer'}} onClick={onClick}>
            <code style={{background: `rgba(128,0,0,25%)`}}>Connect to Metamask </code>
          </span>
       </div>

        <div style={{width: `50%`, margin: `2em 0`}} >

          <label htmlFor="contained-button-file"><div style={{cursor: 'pointer'}} onClick={() => alert(`Follow the steps`)}>
            <code>3. <span style={{background: `rgba(255, 165, 0,25%)`}}>Upload Art Image to IPFS</span>  </code>
          </div></label>
          </div>

        <div style={{width: `50%`, margin: `2em 0`}} >
          <div style={{cursor: 'pointer'}} onClick={() => alert(`Follow the steps`)}>
            <code>4. <span style={{background: `rgba(0,255,0,25%)`}}>Deploy to Blockchain</span>  </code>
          </div>

        </div>

      </header>
    </div>
  )


}

export default App;
