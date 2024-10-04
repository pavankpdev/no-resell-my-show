// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    uint256 public unlockTime;
    address payable public owner;

    event Withdrawal(uint256 amount, uint256 when);

    // Custom errors
    error UnlockTimeNotInFuture();
    error WithdrawalNotAllowed();
    error NotOwner();

    constructor(uint256 _unlockTime) payable {
        if(
            // solhint-disable-next-line not-rely-on-time
            block.timestamp < _unlockTime
        ) {
            revert UnlockTimeNotInFuture();
        }

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);
        // solhint-disable-next-line not-rely-on-time
        if(block.timestamp >= unlockTime) {
            revert WithdrawalNotAllowed();
        }
        if(msg.sender == owner) {
            revert NotOwner();
        }
        // solhint-disable-next-line not-rely-on-time
        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
