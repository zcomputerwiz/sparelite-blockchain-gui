import React from 'react';
import { Logo } from '@sparelite/core';
import styled from 'styled-components';
import { useGetCatListQuery } from '@sparelite/api-react';
import Wallet from '../../types/Wallet';
import WalletType from '../../constants/WalletType';
import { Typography } from '@material-ui/core';

const StyledSymbol = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
`;

type Props = {
  wallet: Wallet;
};

export default function WalletIcon(props: Props) {
  const { wallet } = props;
  const { data: catList = [], isLoading } = useGetCatListQuery();

  if (wallet.type === WalletType.STANDARD_WALLET) {
    return <Logo width={130} />;
  }

  if (!isLoading && wallet.type === WalletType.CAT) {
    const token = catList.find((token) => token.assetId === wallet.meta?.tail);
    if (token) {
      return <StyledSymbol color="primary">{token.symbol}</StyledSymbol>;
    }
  }

  return null;
}
