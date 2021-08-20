require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn public install glimpse fold slim'; 
let testAccounts = [
"0x5ca79ee79d633c964651838181bcea5e771d2b7d524a940d310d44e821811acf",
"0x5bf924637590b07bd8a91a167cd60383054c4ef68142264622d588c300e2df8e",
"0x770cdbaca75b0e518359ab5d70dcbb415d00255dbcccccc2669a02f8f9dd1fad",
"0x0fe4fc24d0de444646fce86cff7692f48b1b8ddba8d9e6a1695cf83b527ce899",
"0x87a22ffbbfdecd733d0ea706a625bcaae5c5a7896eba6894d2536057acf82ba9",
"0xa7c26a1373536dc3b2168c24889255ae71a801563bf025a5e313abef4192ae63",
"0x8fa416d3066e2494c64efc21d394a43422b92a350aa1254edb53e1ab2811bfc1",
"0x52ea0ec404bb8a5454730585f4a398b2d4587b0c8cebd7366b5a35142a440b29",
"0x467a57aa412cf76e430bfd9cf722ac40de463724c5544056f8bd21b20a544ffa",
"0x3c476cd05bf981a2890a5bbf6bbe02d18f292bbb94b06d36b39de1dce720a395"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

