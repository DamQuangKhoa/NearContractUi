const FAUCET_CONTRACT_NAME = 'line-faucet.testnet';
const FT_CONTRACT_NAME = 'line-token.testnet';
const STAKING_CONTRACT_NAME = 'dev-1654171545868-56340066651726';
const NFT_CONTRACT_NAME = 'dev-1655456888456-75320849542816';

interface Config {
    networkId: string;
    nodeUrl: string;
    walletUrl: string;
    helperUrl: string;
    explorerUrl: string;
    VBI_STAKING_CONTRACT: string;
    VBI_NFT_CONTRACT: string;
    VBI_FT_CONTRACT: string;
    VBI_FAUCET_FT_CONTRACT: string;
    VBI_SIMPLE_POOL_CONTRACT: string;
    WRAP_NEAR_CONTRACT: string;
}

function getConfig(env: string): Config {
    switch (env) {
        case 'production':
        case 'mainnet':
            return {
                networkId: 'mainnet',
                nodeUrl: 'https://rpc.mainnet.near.org',
                walletUrl: 'https://wallet.near.org',
                helperUrl: 'https://helper.mainnet.near.org',
                explorerUrl: 'https://explorer.mainnet.near.org',
                VBI_STAKING_CONTRACT: STAKING_CONTRACT_NAME,
                VBI_NFT_CONTRACT: NFT_CONTRACT_NAME,
                VBI_FT_CONTRACT: FT_CONTRACT_NAME,
                VBI_FAUCET_FT_CONTRACT: FAUCET_CONTRACT_NAME,
                VBI_SIMPLE_POOL_CONTRACT: 'simple-pool.vbidev.near',
                WRAP_NEAR_CONTRACT: 'wrap.near',
            };
        case 'development':
            return {
                networkId: 'testnet',
                nodeUrl: 'https://rpc.testnet.near.org',
                walletUrl: 'https://wallet.testnet.near.org',
                helperUrl: 'https://helper.testnet.near.org',
                explorerUrl: 'https://explorer.testnet.near.org',
                VBI_STAKING_CONTRACT: STAKING_CONTRACT_NAME,
                VBI_NFT_CONTRACT: NFT_CONTRACT_NAME,
                VBI_FT_CONTRACT: FT_CONTRACT_NAME,
                VBI_FAUCET_FT_CONTRACT: FAUCET_CONTRACT_NAME,
                VBI_SIMPLE_POOL_CONTRACT: 'simple-pool.vbidev.testnet',
                WRAP_NEAR_CONTRACT: 'wrap.testnet',
            };
        case 'testnet':
            return {
                networkId: 'testnet',
                nodeUrl: 'https://rpc.testnet.near.org',
                walletUrl: 'https://wallet.testnet.near.org',
                helperUrl: 'https://helper.testnet.near.org',
                explorerUrl: 'https://explorer.testnet.near.org',
                VBI_STAKING_CONTRACT: STAKING_CONTRACT_NAME,
                VBI_NFT_CONTRACT: NFT_CONTRACT_NAME,
                VBI_FT_CONTRACT: FT_CONTRACT_NAME,
                VBI_FAUCET_FT_CONTRACT: FAUCET_CONTRACT_NAME,
                VBI_SIMPLE_POOL_CONTRACT: 'simple-pool.vbidev.testnet',
                WRAP_NEAR_CONTRACT: 'wrap.testnet',
            };
        default:
            throw Error(
                `Unconfigured environment '${env}'. Can be configured in src/config.js.`
            );
    }
}

export default getConfig;
