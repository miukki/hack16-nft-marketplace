// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Logger contract used by  to anonymously log state transitions of orders and trades
contract MetaData {


    // Data structure of the logged transaction detail
    struct TImage {
        bytes32 id;
        string imagehash;
        string title;
        string description;
        uint256 vote;
        uint256 time;
    }
    


    // one for each type (this to avoid key-collisions between the types)
    mapping(bytes32 => TImage) public tImgList;


    // var to hold the owner address
    address owner;
    address private voter;
    TImage[] internal imagesArray;


    // Function to retrieve all log details of a logged transaction identified by _identifier
    function getImageMetaData(bytes32 _identifier) public view returns (string memory) {

            TImage memory log = tImgList[_identifier];
            return log.imagehash;

    }
    
   

    // constructor sets owner of transaction
    constructor() {
        
        owner = msg.sender;
    }

    
    function getImages()public view returns( TImage [] memory){
        return imagesArray;
    }


  // Move the last element to the deleted spot.
  // Remove the last element.
    function burn(uint index) internal {
        require(index < imagesArray.length);
        imagesArray[index] = imagesArray[imagesArray.length-1];
        imagesArray.pop();
    }

    function removeImage(bytes32 id) public  {

     // caller must be the owner of this contract
     require(msg.sender == owner, "You are not allowed to remove image, only owner of smart contract can remove images.");

      for (uint p = 0; p < imagesArray.length; p++) {
            if (imagesArray[p].id == id) {
                burn(p);
            }
        }

    }
    
    mapping(address => Voter) public voters;

    struct Voter {
        uint vote; 
    }



    function setVote(bytes32 id) public returns (uint256 vote_) {

      Voter memory v = voters[msg.sender];
      v.vote += 1;
      voters[msg.sender] = v;
      require(v.vote <= 3 , "You have only 3 votes total!");
 

      TImage memory log = tImgList[id];
      log.vote += 1;
      tImgList[id] = log;
      vote_ = log.vote;
      
     
      for (uint p = 0; p < imagesArray.length; p++) {
            if (imagesArray[p].id == id) {
                imagesArray[p] = log;
            }
      }
      
          

    }


    // Log transaction hash and details; ID, blocktime, State and Type
    function setImageMetaData(
        bytes32 id,
        string memory imagehash,//QmbGPXcDZT8opm2KTFYoyas1X7iRXu2tyJHiY18rfeuLEB?filename=arthas.jpeg
        string memory title,
        string memory description,
        uint256 vote
    ) public {

        // Get block-time and save as BigInt
        uint256 time = block.timestamp;

        // store metadata umage to blockchain
        TImage memory log = TImage(id, imagehash, title, description, vote, time);
        tImgList[id] = log;
        
         bool isExist = false;
         
         for (uint p = 0; p < imagesArray.length; p++) {
            if (imagesArray[p].id == id) {
                imagesArray[p] = log;
                isExist = true;
            }
         }
         
         if (!isExist) {
           imagesArray.push(log);
         }
      

    }
}
