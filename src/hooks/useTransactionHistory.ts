import { useState, useCallback } from "react";
import { Transaction, Platform, StablecoinType } from "@/types/donation";

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "tx1",
    creatorId: "creator1",
    creatorName: "Pokimane",
    platform: "twitch",
    amount: 50,
    stablecoin: "usdc",
    status: "completed",
    timestamp: new Date(Date.now() - 86400000),
    txHash: "0x123abc...",
    fee: 2.5,
    conversionRate: 1.0,
  },
  {
    id: "tx2",
    creatorId: "creator2",
    creatorName: "Valkyrae",
    platform: "youtube",
    amount: 100,
    stablecoin: "usdt",
    status: "completed",
    timestamp: new Date(Date.now() - 172800000),
    txHash: "0x456def...",
    fee: 5.0,
    conversionRate: 1.0,
  },
  {
    id: "tx3",
    creatorId: "creator3",
    creatorName: "Sykkuno",
    platform: "twitch",
    amount: 25,
    stablecoin: "dai",
    status: "pending",
    timestamp: new Date(Date.now() - 3600000),
    fee: 1.25,
    conversionRate: 1.0,
  },
];

export const useTransactionHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(MOCK_TRANSACTIONS);

  const addTransaction = useCallback((transaction: Omit<Transaction, "id" | "timestamp">) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: `tx${Date.now()}`,
      timestamp: new Date(),
    };
    setTransactions((prev) => [newTransaction, ...prev]);
    return newTransaction;
  }, []);

  const filterTransactions = useCallback(
    (platform?: Platform, status?: string, dateRange?: { from: Date; to: Date }) => {
      return transactions.filter((tx) => {
        if (platform && tx.platform !== platform) return false;
        if (status && tx.status !== status) return false;
        if (dateRange) {
          const txDate = new Date(tx.timestamp);
          if (txDate < dateRange.from || txDate > dateRange.to) return false;
        }
        return true;
      });
    },
    [transactions]
  );

  return {
    transactions,
    addTransaction,
    filterTransactions,
  };
};
