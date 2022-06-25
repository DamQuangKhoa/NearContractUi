import React, { useEffect, useState } from 'react';
import { IntervalSpinner } from '~components/spiner/IntervalSpinner';
import { wallet } from '~utils/near';
import { nftContract } from '~utils/nft-contract';
import { NFTDetail } from '~utils/token';

export default () => {
  const [accountTokens, setAccountTokens] = useState<NFTDetail[]>([]);

  const getAccountTokens = async () => {
    //@ts-ignore
    let tokens: NFTDetail[] = await nftContract.nft_tokens_for_owner({
      account_id: wallet.getAccountId(),
    });
    setAccountTokens(tokens);
  };

  const parseIpfs = (url: string) => {
    if (!url.match('ipfs://.*')) return url;
    return url.replace('ipfs://', 'https://infura-ipfs.io/ipfs/');
  };

  const getTokenLink = (id: string) => {
    return (
      'https://wallet.testnet.near.org/nft-detail/dev-1655456888456-75320849542816/' +
      id
    );
  };

  const refreshData = () => {
    Promise.all([getAccountTokens()]).catch((e) => {
      console.log('Error', e);
    });
  };

  useEffect(() => {
    refreshData();
  }, [wallet.getAccountId(), wallet.isSignedIn()]);

  return (
    <div className="staking w-full">
      <section className="w-full md:w-560px lg:w-560px xl:w-560px m-auto relative xs:px-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className={'text-white text-3xl'}>NFT</h1>
          <IntervalSpinner onProgressSuccess={refreshData} />
        </div>
        <div className="w-full grid mt-3 grid-cols-3 gap-2">
          {accountTokens
            .map((token) => ({ id: token.token_id, meta: token.metadata }))
            .map(({ id, meta }) => (
              <div
                key={String(id)}
                className="rounded-lg bg-darkGradientBg shadow-dark p-2.5 hover:bg-darkGradientHoverBg"
              >
                <div className="text-primaryText text-xs mb-1 xs:h-8 md:h-8 lg:text-center">
                  {meta.title}
                </div>
                <a href={getTokenLink(id)} target="_blank">
                  <div className="lg:flex lg:justify-center lg:items-center">
                    <label className="text-base font-medium text-xREFColor">
                      {meta.description}
                    </label>
                    <img src={parseIpfs(meta.media)} alt="" />
                  </div>
                </a>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
