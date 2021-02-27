require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remind pulse inflict permit flock setup'; 
let testAccounts = [
"0x239409a05064b31503090fae255b96d1b9ae50e5c547ce9ea71a25a682d560ff",
"0x164d6b0d6d534b561249a24ba9377a320f61c83faddc0704d3888e2a8a3d0e0f",
"0xedcb083d5baa53b41e98a7cfd04d9f42f594008b842d61a85f2732034b21c2ed",
"0x81dce85856caa129b2024f01f0340e23674e20393c1f94b3c1f267df40360cb3",
"0xf5eb3bd7e162a5eb819268fcc72e4c52afe5abc5014ad8f9e854cad9b117872d",
"0x19379666c0da3c56e130310daaeda8a66256745fa8fec3219cb09692b614c773",
"0xf79e1d81d2799a6efb0769eaf3e228455702de769eb3e5acc39c3fc129adcf4d",
"0xafe20fd43f3e6e245c06ce2dcfb61434eab240bbc55470f8f144bb555a6db14c",
"0xa9160b6c6bd0622c6f2d1aba5f02f9538fff12b46b7dfaadaaab5a577b4cd6d2",
"0x8b0d3608aa78ee4cc9e3dfe5393204767933fcab436ca1b2a805c9469bc50940"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
