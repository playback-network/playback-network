import { isAddress } from 'web3-validator';

export const validateWalet = (walletAddress: string): boolean => {
  return isAddress(walletAddress);
}