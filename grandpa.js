// Using the Polkadot Mainnet Endpoint
const { ApiPromise, WsProvider } = require('@polkadot/api');
(async () => {
  // Construct a provider with the endpoint URL
  const provider = new WsProvider('wss://rpc.polkadot.io/');
  // Create an API instance for Polkadot
  const api = await ApiPromise.create({ provider });
//   ...........................
console.log(`line ------ 9`);

//-------------Returns the state of the current best round state as well as the ongoing background rounds

const unsu = await api.rpc.grandpa.roundState((result) => {
    // console.log(`The last block has a timestamp of ${result}`);
});

//...............Subscribes to grandpa justifications

const unsub = await api.rpc.grandpa.subscribeJustifications((result) => {
  let x = result.toHuman();
  console.log(`The last block has a timestamp of ${x}`);
});

console.log(`line ------ 17`);

})();