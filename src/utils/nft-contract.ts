import { Contract } from 'near-api-js';
import { wallet, config } from '~utils/near';

const nftContract = new Contract(wallet.account(), config.VBI_NFT_CONTRACT, {
  viewMethods: ['nft_tokens_for_owner'],
  changeMethods: [],
});

export { nftContract };
