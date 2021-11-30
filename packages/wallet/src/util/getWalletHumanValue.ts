import type Wallet from '../types/Wallet';
import WalletType from '../constants/WalletType';
import { graviton_to_colouredcoin_string, graviton_to_sparelite_string } from './sparelite';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? graviton_to_colouredcoin_string(value)
    : graviton_to_sparelite_string(value);
}
