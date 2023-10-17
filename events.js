// api.rpc.net.peerCount
const { ApiPromise, WsProvider } = require("@polkadot/api");

(async () => {
  try {
    // Construct a provider with the Polkadot Mainnet endpoint URL
    const provider = new WsProvider("wss://rpc.polkadot.io/");
    // Create an API instance for Polkadot
    const api = await ApiPromise.create({ provider });

    console.log(`Connected to the Polkadot Mainnet`);

    // --------------- summary: summary: Events deposited for the current block.

    const x = api.query.system.events();
    // console.log(`summary: Events deposited for the current block.:`, (await x).toHuman());
    console.log(`summary: Events deposited for the current block.:`, (await x).toJSON());


    // const _ = api.events.paraInclusion.CandidateBacked.is((x) => {
    //   console.log(`information on A candidate was backed:`, x.toHuman());
    // });

    
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
})();
