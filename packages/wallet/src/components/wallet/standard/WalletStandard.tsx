import React from 'react';
import { Trans } from '@lingui/macro';
import { Flex } from '@sparelite/core';
import WalletHistory from '../WalletHistory';
import WalletStandardCards from './WalletStandardCards';
import WalletReceiveAddress from '../WalletReceiveAddress';
import WalletSend from '../WalletSend';
import WalletHeader from '../WalletHeader';
import WalletConnections from '../WalletConnections';
import isDebug from '../../../util/isDebug';

type StandardWalletProps = {
  walletId: number;
};

export default function StandardWallet(props: StandardWalletProps) {
  const { walletId } = props;

  return (
    <Flex flexDirection="column" gap={1}>
      <WalletHeader
        walletId={walletId}
        title={<Trans>Spare Wallet</Trans>}
      />

      <Flex flexDirection="column" gap={3}>
        <WalletStandardCards walletId={walletId} />
        <WalletReceiveAddress walletId={walletId} />
        <WalletSend walletId={walletId} />
        <WalletHistory walletId={walletId} />
        {isDebug && (
          <WalletConnections walletId={walletId} />
        )}
      </Flex>
    </Flex>
  );
}
