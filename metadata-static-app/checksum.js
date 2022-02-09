//https://www.codegrepper.com/code-examples/javascript/convert+number+to+hexadecimal+in+javascript
const { toChecksumAddress } = require('ethereum-checksum-address')


const [, , address] = process.argv
function main () {


    console.log({address: toChecksumAddress(`${address}`)}) // '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1'


}

main()
