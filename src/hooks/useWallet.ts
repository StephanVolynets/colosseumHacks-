import { useState, useCallback } from "react";
import { Wallet, StablecoinBalance } from "@/types/donation";

const MOCK_BALANCES: StablecoinBalance[] = [
  { type: "usdc", balance: 5000, symbol: "USDC" },
  { type: "usdt", balance: 3500, symbol: "USDT" },
  { type: "dai", balance: 2000, symbol: "DAI" },
];

const WALLET_PROVIDERS = ["MetaMask", "WalletConnect", "Coinbase Wallet"];

export const useWallet = () => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [balances, setBalances] = useState<StablecoinBalance[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = useCallback(async (provider: string) => {
    setIsConnecting(true);
    setError(null);
    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const mockAddress = `0x${Math.random().toString(16).slice(2, 42)}`;
      setWallet({
        address: mockAddress,
        provider,
        connected: true,
      });
      setBalances(MOCK_BALANCES);
    } catch (err) {
      setError("Failed to connect wallet. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(() => {
    setWallet(null);
    setBalances([]);
    setError(null);
  }, []);

  const getTotalBalance = useCallback(() => {
    return balances.reduce((sum, b) => sum + b.balance, 0);
  }, [balances]);

  return {
    wallet,
    balances,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
    getTotalBalance,
    providers: WALLET_PROVIDERS,
  };
};
