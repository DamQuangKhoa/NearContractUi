interface TokenMetadata {
    spec: string;
    name: string;
    symbol: string;
    icon: string;
    reference: string;
    referenceHash: string;
    decimals: number;
    contractId: string;
}

const tokenList: TokenMetadata[] = [
    {
        spec: 'ft-1.0.0',
        name: 'Line Token',
        symbol: 'LINE',
        icon: 'data:image/png;base64,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',
        reference: null,
        referenceHash: null,
        decimals: 24,
        contractId: 'line-token.testnet',
    },
    // {
    //     spec: 'ft-1.0.0',
    //     name: 'Wrap NEAR',
    //     symbol: 'wNEAR',
    //     icon: 'https://i.postimg.cc/DZfHgngm/w-NEAR-no-border.png',
    //     reference: null,
    //     referenceHash: null,
    //     decimals: 24,
    //     contractId: "wrap.testnet"
    // },
    {
        spec: 'ft-1.0.0',
        name: 'VBI USN',
        symbol: 'vUSN',
        icon: "data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Ccircle cx='16' cy='16' r='16' fill='%232775C9'/%3E%3Cpath d='M15.75 27.5C9.26 27.5 4 22.24 4 15.75S9.26 4 15.75 4 27.5 9.26 27.5 15.75A11.75 11.75 0 0115.75 27.5zm-.7-16.11a2.58 2.58 0 00-2.45 2.47c0 1.21.74 2 2.31 2.33l1.1.26c1.07.25 1.51.61 1.51 1.22s-.77 1.21-1.77 1.21a1.9 1.9 0 01-1.8-.91.68.68 0 00-.61-.39h-.59a.35.35 0 00-.28.41 2.73 2.73 0 002.61 2.08v.84a.705.705 0 001.41 0v-.85a2.62 2.62 0 002.59-2.58c0-1.27-.73-2-2.46-2.37l-1-.22c-1-.25-1.47-.58-1.47-1.14 0-.56.6-1.18 1.6-1.18a1.64 1.64 0 011.59.81.8.8 0 00.72.46h.47a.42.42 0 00.31-.5 2.65 2.65 0 00-2.38-2v-.69a.705.705 0 00-1.41 0v.74zm-8.11 4.36a8.79 8.79 0 006 8.33h.14a.45.45 0 00.45-.45v-.21a.94.94 0 00-.58-.87 7.36 7.36 0 010-13.65.93.93 0 00.58-.86v-.23a.42.42 0 00-.56-.4 8.79 8.79 0 00-6.03 8.34zm17.62 0a8.79 8.79 0 00-6-8.32h-.15a.47.47 0 00-.47.47v.15a1 1 0 00.61.9 7.36 7.36 0 010 13.64 1 1 0 00-.6.89v.17a.47.47 0 00.62.44 8.79 8.79 0 005.99-8.34z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E",
        reference: null,
        referenceHash: null,
        decimals: 24,
        contractId: 'vusn.vbidev.testnet',
    },
];

export interface NFTDetail {
    token_id: string;
    owner_id: string;
    metadata: NFTMetadata;
    approved_account_ids: { [id: string]: any };
}

export interface NFTMetadata {
    title: string;
    description: string;
    media: string;
    media_hash: null;
    copies: number;
    issued_at: null;
    expires_at: null;
    starts_at: null;
    updated_at: null;
    extra: null;
    reference: null;
    reference_hash: null;
}

const getTokenMetadata = (symbol: string): TokenMetadata => {
    return tokenList.find((item: TokenMetadata) => item.symbol == symbol);
};

export { tokenList, getTokenMetadata, TokenMetadata };
