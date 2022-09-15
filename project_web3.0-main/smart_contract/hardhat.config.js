require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SnRUFiXWpCYgP_H746oiZVpMcmdh9pJI',
      accounts: ['0x87ec16877ed61AcA92eB5ee39159707302463B5d'],
    },
  },
};