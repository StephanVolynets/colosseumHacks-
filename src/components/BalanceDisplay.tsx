import { Card } from "@/components/ui/card";
import { StablecoinBalance } from "@/types/donation";
import { Wallet } from "lucide-react";

interface BalanceDisplayProps {
  balances: StablecoinBalance[];
}

export const BalanceDisplay = ({ balances = [] }: BalanceDisplayProps) => {
  const totalBalance = balances.reduce((sum, b) => sum + b.balance, 0);

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {/* Total Balance Card */}
      <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 p-6 col-span-full md:col-span-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">Total Balance</span>
          <Wallet className="w-4 h-4 text-purple-400" />
        </div>
        <p className="text-3xl font-bold">${totalBalance.toLocaleString()}</p>
        <p className="text-xs text-gray-500 mt-2">USD Equivalent</p>
      </Card>

      {/* Individual Stablecoin Balances */}
      {balances.map((balance) => (
        <Card
          key={balance.type}
          className="bg-slate-800/50 border-purple-500/20 p-6 hover:border-purple-500/50 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-purple-300">{balance.symbol}</span>
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-xs font-bold text-purple-400">
                {balance.symbol.slice(0, 1)}
              </span>
            </div>
          </div>
          <p className="text-2xl font-bold">{balance.balance.toLocaleString()}</p>
          <p className="text-xs text-gray-500 mt-2">
            ≈ ${(balance.balance * 1).toLocaleString()}
          </p>
        </Card>
      ))}
    </div>
  );
};