const { ApiPromise, WsProvider } = require("@polkadot/api");

(async () => {
  try {
    // Construct a provider with the Polkadot Mainnet endpoint URL
    const provider = new WsProvider("wss://rpc.polkadot.io/");
    // Create an API instance for Polkadot
    const api = await ApiPromise.create({ provider });

    console.log(`Connected to the Polkadot Mainnet`);

    // Subscribe to new headers
    let result = api.rpc.chain.subscribeAllHeads((header) => {
      // console.log("New header:", header);
      console.log("Best all :", header?.number?.toHuman() ," parentHash :",  header?.parentHash.toHuman());

    });

    // ----------------------summary: Retrieves the best finalized header via subscription
    let result1 = api.rpc.chain.subscribeFinalizedHeads((header) => {
        console.log("Best fin :", header?.number?.toHuman() ," parentHash :",  header?.parentHash.toHuman());
    });

    // ----------------------summary: Retrieves the best header via subscription
    let result2 = api.rpc.chain.subscribeNewHeads((header) => {

    //   console.log("New header:", header?.toHuman());
      console.log("Best New :", header?.number?.toHuman() ," parentHash :",  header?.parentHash.toHuman());
    //   console.log("Best New header parentHash :", header?.parentHash.toHuman());

    });
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
})();
