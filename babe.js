// Using the Polkadot Mainnet Endpoint
const { ApiPromise, WsProvider } = require('@polkadot/api');
(async () => {
  // Construct a provider with the endpoint URL
  const provider = new WsProvider('wss://rpc.polkadot.io/');
  // Create an API instance for Polkadot
  const api = await ApiPromise.create({ provider });
//   ...........................
console.log(`line ------ 9`);

// const unsub = await api.rpc.beefy.subscribeJustifications((header) => {
//     console.log(`The last block has a timestamp of ${header}`);
// });

const unsub = await api.rpc.babe.epochAuthorship((header) => {
    console.log(`The last block has a timestamp of ${header}`);
});


unsub();

console.log(`line ------ 17`);

})();