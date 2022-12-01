/**+-To deploy to a remote network such as mainnet or any testnet, you need to add a network entry to your hardhat.config.js file. We’ll use 
Ropsten for this example, but you can add any network similarly:_*/
require("@nomiclabs/hardhat-waffle");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
//---const ALCHEMY_API_KEY = "KEY";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
//---const ROPSTEN_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY";

module.exports = {
  solidity: "0.7.3",
  /*networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }**/
};

/**+-We're using Alchemy( https://www.alchemyapi.io/ ), but pointing url to any Ethereum node or gateway would work. Go grab your ALCHEMY_API_KEY 
and come back. To deploy on Ropsten you need to send ropsten-ETH into the address that's going to be making the deployment. 
You can get some ETH for testnets from a faucet, a service that distributes testing-ETH for free. Here's the one for Ropsten( https://faucet.metamask.io/ ),
you'll have to change Metamask's network to Ropsten before transacting.

+-Finally, run:
npx hardhat run scripts/deploy.js --network ropsten 

-If everything went well, you should see the deployed contract address.*/
