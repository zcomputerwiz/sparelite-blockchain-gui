import React from 'react';
import { Trans } from '@lingui/macro';
import { Tooltip } from '@renamemelite/core';
import { useGetCatListQuery } from '@renamemelite/api-react';
import { VerifiedUser as VerifiedUserIcon, VerifiedUserProps } from '@material-ui/icons';
import styled from 'styled-components';
import Wallet from '../../types/Wallet';
import WalletType from '../../constants/WalletType';

const StyledSmallBadge = styled(VerifiedUserIcon)`
  font-size: 1rem;
`;

type Props = VerifiedUserProps & {
  wallet: Wallet;
};

export default function WalletBadge(props: Props) {
  const { wallet, tooltip, ...rest } = props;
  const { data: catList = [], isLoading } = useGetCatListQuery();

  if (!isLoading && wallet.type === WalletType.CAT) {
    const token = catList.find((token) => token.assetId === wallet.meta?.tail);
    if (token) {
      return (
        <Tooltip title={<Trans>This access token is verified</Trans>}>
          <StyledSmallBadge {...rest} />
        </Tooltip>
      );
    }
  }

  return null;
}

