// api.rpc.net.peerCount
const { ApiPromise, WsProvider } = require("@polkadot/api");

(async () => {
  try {
    // Construct a provider with the Polkadot Mainnet endpoint URL
    const provider = new WsProvider("wss://rpc.polkadot.io/");
    // Create an API instance for Polkadot
    const api = await ApiPromise.create({ provider });

    console.log(`Connected to the Polkadot Mainnet`);

    // --------------- summary: ields information on all availability cores as relevant to the child block.

    // const _ = await api.call.parachainHost.availabilityCores((x) => {
    //   console.log(`information on all availability cores as relevant to the child block.:`, x.toHuman());
    // });

    // ------------------ summary: Get a vector of events concerning candidates that occurred within a block.

    // const x = await api.call.parachainHost.candidateEvents((x) => {
    //   console.log(
    //     `vector of events concerning candidates that occurred within a block:`,
    //     x.toHuman()
    //   );

    //-------------- summary: Get the receipt of a candidate pending availability.

    const x1 = await api.call.parachainHost.candidatePendingAvailability(1);

    console.log(
      `summary: Get the receipt of a candidate pending availability :`,
      x1.toHuman()
    );
    
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
})();
