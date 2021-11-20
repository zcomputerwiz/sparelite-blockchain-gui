import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Trans, t } from '@lingui/macro';
import { Grid } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { Back, Flex, Loading, useShowError } from '@flaxlight/core';
import { useGetWalletsQuery, useAddCATTokenMutation, useGetCatListQuery } from '@flaxlight/api-react';
import WalletCreateCard from '../create/WalletCreateCard';
import isCATWalletPresent from '../../../util/isCATWalletPresent';
import type CATToken from '../../../types/CATToken';
import useWalletState from '../../../hooks/useWalletState';
import SyncingStatus from '../../../constants/SyncingStatus';

export default function WalletCATCreateSimple() {
  const history = useHistory();
  const { url } = useRouteMatch();
  const showError = useShowError();
  const { data: wallets, isWalletsLoading } = useGetWalletsQuery();
  const [addCATToken, { isLoading: isAddCATTokenLoading }] = useAddCATTokenMutation();
  const { data: catList, isCatListLoading } = useGetCatListQuery();
  const { state } = useWalletState();

  const isLoading = isWalletsLoading || isCatListLoading;
  
  function handleCreateExisting() {
    history.push(`/dashboard/wallets/create/cat/existing`);
  }

  async function handleCreateNewToken(token: CATToken) {
    try {
      const { name, assetId: tail } = token;

      if (isAddCATTokenLoading) {
        return;
      }
  
      if (state !== SyncingStatus.SYNCED) {
        throw new Error(t`Please wait for wallet synchronization`);
      }
      
      if (!name) {
        throw new Error(t`Token has empty name`);
      }
    
      if (!tail) {
        throw new Error(t`Token has empty tail`);
      }

      const walletId = await addCATToken({
        tail,
        name,
        fee: '0',
      }).unwrap();

      history.push(`/dashboard/wallets/${walletId}`);
    } catch(error: any) {
      showError(error);
    }
  }

  if (isLoading) {
    return (
      <Loading center />
    );
  }

  return (
    <Flex flexDirection="column" gap={3}>
      <Flex flexGrow={1}>
        <Back variant="h5" to="/dashboard/wallets">
          <Trans>Add Token</Trans>
        </Back>
      </Flex>
      {isLoading ? (
        <Loading center />
      ) : (
        <Grid spacing={3} alignItems="stretch" container>
          {catList?.map((token) => {
            const isPresent = isCATWalletPresent(wallets, token);

            async function handleSelect() {
              if (!isPresent) {
                await handleCreateNewToken(token);
              }
            }

            return (
              <Grid key={token.assetId} xs={12} sm={6} md={4} item>
                <WalletCreateCard
                  key={token.symbol}
                  onSelect={handleSelect}
                  title={token.name}
                  symbol={token.symbol}
                  disabled={isPresent}
                  loadingDescription={<Trans>Adding {token.symbol} token</Trans>}
                />
              </Grid>
            );
          })}
          <Grid xs={12} sm={6} md={4} item>
            <WalletCreateCard
              onSelect={() => handleCreateExisting()}
              title={<Trans>Custom</Trans>}
              icon={<AddIcon fontSize="large" color="primary" />}
            />
          </Grid>
        </Grid>
      )}
    </Flex>
  );
}