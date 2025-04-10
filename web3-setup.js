// web3-setup.js

// Import Web3
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

// Define the contract address and ABI
const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE";
const contractABI = [ /* ABI from the contract */ ];

// Create and export the contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

export { web3, contract };
