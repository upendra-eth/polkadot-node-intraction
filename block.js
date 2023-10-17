const { ApiPromise, WsProvider } = require("@polkadot/api");
const { isHex } = require("@polkadot/util");
const DOT_DECIMAL_PLACES = 10000000000;

(async () => {
  // const provider = new WsProvider('wss://kusama-rpc.polkadot.io/')
  const provider = new WsProvider("wss://rpc.polkadot.io/");
  const api = await ApiPromise.create({ provider });

  // -----------How do I retrieve the header/extrinsic hash from blocks?

  let blockNumber = 1;

  // returns Hash
  const blockHash = await api.rpc.chain.getBlockHash(blockNumber);
  // returns SignedBlock
  const signedBlock = await api.rpc.chain.getBlock(blockHash);

  // the hash for the block, always via header (Hash -> toHex()) - will be
  // the same as blockHash above (also available on any header retrieved,

  // subscription or once-off)

  //  console.log(signedBlock.block.header.hash.toHex());

  // the hash for each extrinsic in the block
  signedBlock.block.extrinsics.forEach((ex, index) => {
    // console.log(index, ex.hash.toHex());
  });

  // ---------------------------------How do I extract the block author?

  // subscribe to all new headers (with extended info)
  api.derive.chain.subscribeNewHeads((header) => {
    // console.log(`#${header.number}: ${header.author}`);
  });

  // ---------------------------- How do I view extrinsic information?

  // no blockHash is specified, so we retrieve the latest
//   const signedBlock = await api.rpc.chain.getBlock();

  // the information for each of the contained extrinsics
  signedBlock.block.extrinsics.forEach((ex, index) => {
    // the extrinsics are decoded by the API, human-like view
    // console.log(index, ex.toHuman());

    const {
      isSigned,
      meta,
      method: { args, method, section },
    } = ex;

    // explicit display of name, args & documentation
    // console.log(
    //   `${section}.${method}(${args.map((a) => a.toString()).join(", ")})`
    // );
    // console.log(meta.documentation.map((d) => d.toString()).join("\n"));

    // signer/nonce info
    if (isSigned) {
    //   console.log(
    //     `signer=${ex.signer.toString()}, nonce=${ex.nonce.toString()}`
    //   );
    }
  });

  
//------------------How do I map extrinsics to their events?

// no blockHash is specified, so we retrieve the latest
// const signedBlock = await api.rpc.chain.getBlock();
const apiAt = await api.at(signedBlock.block.header.hash);
const allRecords = await apiAt.query.system.events();

// map between the extrinsics and events
signedBlock.block.extrinsics.forEach(({ method: { method, section } }, index) => {
  // filter the specific events based on the phase and then the
  // index of our extrinsic in the block
  const events = allRecords
    .filter(({ phase }) =>
      phase.isApplyExtrinsic &&
      phase.asApplyExtrinsic.eq(index)
    )
    .map(({ event }) => `${event.section}.${event.method}`);

  console.log(`${section}.${method}:: ${events.join(', ') || 'no events'}`);
});




})();
