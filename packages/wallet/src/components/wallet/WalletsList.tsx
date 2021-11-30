import React from 'react';
import { Trans } from '@lingui/macro';
import {
  Grid, Typography,
} from '@material-ui/core';
import { useGetWalletsQuery } from '@sparelite/api-react';
import { Flex, Loading } from '@sparelite/core';
import { useHistory } from 'react-router';
import { Eco as HomeWorkIcon, Add as AddIcon } from '@material-ui/icons';
import Wallet from '../../types/Wallet';
import WalletCreateCard from './create/WalletCreateCard';
import WalletName from '../../constants/WalletName';
import useTrans from '../../hooks/useTrans';

export default function WalletsList() {
  const history = useHistory();
  const trans = useTrans();
  const { data: wallets, isLoading } = useGetWalletsQuery();

  function handleSelectWallet(wallet: Wallet) {
    history.push(`/dashboard/wallets/${wallet.id}`);
  }

  function handleAddToken() {
    history.push(`/dashboard/wallets/create/simple`);
  }

  return (
    <Flex flexDirection="column" gap={3}>
      <Flex flexGrow={1}>
        <Typography variant="h5">
          <Trans>Select Wallet</Trans>
        </Typography>
      </Flex>
      <Grid spacing={3} alignItems="stretch" container>
        {isLoading ? (
          <Loading center />
        ) : (
          <>
            {wallets.map((wallet) => (
              <Grid key={wallet.id} xs={12} sm={6} md={4} item>
                <WalletCreateCard
                  onSelect={() => handleSelectWallet(wallet)}
                  title={trans(WalletName[wallet.type])}
                  icon={<HomeWorkIcon fontSize="large" color="primary" />}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Flex>
  );
}
