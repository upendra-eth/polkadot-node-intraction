// api.rpc.net.peerCount
const { ApiPromise, WsProvider } = require("@polkadot/api");

(async () => {
  try {
    // Construct a provider with the Polkadot Mainnet endpoint URL
    const provider = new WsProvider("wss://rpc.polkadot.io/");
    // Create an API instance for Polkadot
    const api = await ApiPromise.create({ provider });

    console.log(`Connected to the Polkadot Mainnet`);

    // --------------- summary: Returns number of peers connected to node.

    const peerCount = await api.rpc.net.peerCount((x) => {
      console.log(`number of peers connected to node:`, x);
    });
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
})();
