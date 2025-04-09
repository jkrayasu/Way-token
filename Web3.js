<script>
    // Initialize Web3
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    // Contract address and ABI
    const contractAddress = "0x1A1244B800f30826677576FF7Ef0398444086EbC";
    const contractABI = [ /* ABI from the contract */ ];

    // Create contract instance
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Function to flip the coin
    async function flipCoin() {
        const accounts = await web3.eth.requestAccounts();
        const wager = document.getElementById('wager').value;
        const resultDiv = document.getElementById('result');

        try {
            const receipt = await contract.methods.flipCoin(web3.utils.toWei(wager, 'ether')).send({ from: accounts[0] });
            const event = receipt.events.CoinFlipResult.returnValues;
            const message = event.win ? `You won! Your wager is doubled to ${event.returnedAmount}` : "You lost! Your wager is burned.";
            resultDiv.innerText = message;
        } catch (error) {
            resultDiv.innerText = "Transaction failed!";
            console.error(error);
        }
    }
</script>
