const { ApiPromise, WsProvider } = require("@polkadot/api");

(async () => {
  try {
    // Construct a provider with the Polkadot Mainnet endpoint URL
    const provider = new WsProvider("wss://rpc.polkadot.io/");
    // Create an API instance for Polkadot
    const api = await ApiPromise.create({ provider });

    console.log(`Connected to the Polkadot Mainnet`);

    // Retrieve the list of RPC methods that are exposed by the node

    const rpcMethods = await api.rpc.rpc.methods();

    //   const rpcMethods = await api.rpc.rpc.methods((header) => {
    //     console.log(`The last block has a timestamp of ${header}`);
    // });

    console.log(`List of RPC methods exposed by the node:`);
    rpcMethods.forEach((method) => {
      console.log(method.toString());
    });
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
})();
