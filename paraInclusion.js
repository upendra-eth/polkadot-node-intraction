// api.rpc.net.peerCount
const { ApiPromise, WsProvider } = require("@polkadot/api");

(async () => {
  try {
    // Construct a provider with the Polkadot Mainnet endpoint URL
    const provider = new WsProvider("wss://rpc.polkadot.io/");
    // Create an API instance for Polkadot
    const api = await ApiPromise.create({ provider });

    console.log(`Connected to the Polkadot Mainnet`);

    // --------------- summary: A candidate was backed. [candidate, head_data]

    const x = api.events.paraInclusion;
    console.log(`information on A candidate was backed:`, x);

    // const _ = api.events.paraInclusion.CandidateBacked.is((x) => {
    //   console.log(`information on A candidate was backed:`, x.toHuman());
    // });

    
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
})();
