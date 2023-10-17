const DOT_DECIMAL_PLACES = 10000000000;

// Using the Polkadot Mainnet Endpoint
const { ApiPromise, WsProvider } = require('@polkadot/api');
(async () => {
  // Construct a provider with the endpoint URL
  const provider = new WsProvider('wss://rpc.polkadot.io/');
  // Create an API instance for Polkadot
  const api = await ApiPromise.create({ provider });
  // ...
  // console.log(api)
     // Note the .toNumber() here!
     const existentialDeposit = await api.consts.balances.existentialDeposit.toNumber();
     console.log(`Existential deposit for chain is ${existentialDeposit / DOT_DECIMAL_PLACES} DOT.`);

      // Make a call to the chain and get its name.
    const chain = await api.rpc.system.chain();
    // Print out the chain to which we connected.
    console.log(`You are connected to ${chain} !`);

    // ---------------------------subscribe to header ---------------------------------------
        let lastHeader = await api.rpc.chain.getHeader();
        // Subscribe to the new headers
        const unsubHeads = await api.rpc.chain.subscribeNewHeads((lastHeader) => {
      console.log(`${chain}: block #${lastHeader.number} =  hash ${lastHeader.hash}`);
        });


     console.log("ram ram")
    //  process.exit()
  

})();

 console.log("end line ")






//  const DOT_DECIMAL_PLACES = 1000000000000;

// const{ ApiPromise, WsProvider } = require('@polkadot/api');

// (async () => {

//     const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
//     const api = await ApiPromise.create({ provider })

//     // Note the .toNumber() here!
//     const existentialDeposit = await api.consts.balances.existentialDeposit.toNumber();

//     console.log(`Existential deposit for chain is ${existentialDeposit / DOT_DECIMAL_PLACES} KSM.`);

//     process.exit()
// })()