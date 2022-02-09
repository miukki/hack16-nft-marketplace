
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

// import ERC 1155 from open zeppelin

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract NFTContract is ERC1155, Ownable {
   
    uint256 public constant ARTWORK = 0;
    uint256 public constant PHOTO = 1;

    //string memory uri_ pass to  ERC1155 look here  https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol
    constructor() ERC1155("https://ttzsznn3ubho.usemoralis.com/{id}.json") {
        
    
        _mint(msg.sender, 0, 1, "");
        _mint(msg.sender, 1, 1, "");
        _mint(msg.sender, 2, 1, "");
        _mint(msg.sender, 3, 1, "");
        _mint(msg.sender, 4, 1, "");
        _mint(msg.sender, 5, 1, "");
        _mint(msg.sender, 6, 1, "");
        _mint(msg.sender, 7, 1, "");
        _mint(msg.sender, 8, 1, "");
        _mint(msg.sender, 9, 1, "");
        _mint(msg.sender, 10, 1, "");
        _mint(msg.sender, 11, 1, "");
        _mint(msg.sender, 12, 1, "");
        _mint(msg.sender, 13, 1, "");
        _mint(msg.sender, 14, 1, "");
        _mint(msg.sender, 15, 1, "");
        _mint(msg.sender, 16, 1, "");
        _mint(msg.sender, 17, 1, "");
        
        
    }
    
    function mint(address account, uint256 id, uint256 amount) public onlyOwner { //onlyOwner si modifier, executed can be only by the owner

         /**
     * @dev Creates `amount` tokens of token type `id`, and assigns them to `to`.
     *
     * Emits a {TransferSingle} event.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - If `to` refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
     * acceptance magic value.

    function _mint(
        address to,
        uint256 id,
        uint256 amount,
    )

     */
     
        _mint(account, id, amount, "");
    }
    
    function burn(address account, uint256 id, uint256 amount) public {
        require(msg.sender == account);
        _burn(account, id, amount);
        /**
     * @dev Destroys `amount` tokens of token type `id` from `from`
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `from` must have at least `amount` tokens of token type `id`.

    function _burn(
        address from,
        uint256 id,
        uint256 amount
    )

     */
    
    }
    
    

}
