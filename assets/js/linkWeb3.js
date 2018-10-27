
			if(typeof web3!='undefined'){
			web3 = new Web3(web3.currentProvider);
			} else {
			
			web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));
			}
			
			web3.eth.defaultAccount = web3.eth.accounts[0];
			var bcertContract = web3.eth.contract(
			[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_date",
				"type": "uint256"
			},
			{
				"name": "_btype",
				"type": "string"
			}
		],
		"name": "createCert",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "b_type",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "dateOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "x_date",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
			); //ends ABI
			
			var Bcert = bcertContract.at('0xa70b669EAAD9a3869cfc8B29C694be3dC0F5dD39');
			console.log(Bcert);
			