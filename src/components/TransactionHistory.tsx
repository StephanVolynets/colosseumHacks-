import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Transaction, Platform } from "@/types/donation";
import { CheckCircle, Clock, AlertCircle, Download } from "lucide-react";

const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "tx1",
    creatorId: "1",
    creatorName: "StreamerPro",
    platform: "twitch",
    amount: 100,
    stablecoin: "usdc",
    status: "completed",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    txHash: "0x1234...5678",
    fee: 2,
    conversionRate: 0.98,
  },
  {
    id: "tx2",
    creatorId: "2",
    creatorName: "TechTuber",
    platform: "youtube",
    amount: 50,
    stablecoin: "usdt",
    status: "completed",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    txHash: "0x5678...1234",
    fee: 1,
    conversionRate: 0.98,
  },
  {
    id: "tx3",
    creatorId: "3",
    creatorName: "GamingKing",
    platform: "twitch",
    amount: 75,
    stablecoin: "dai",
    status: "pending",
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    fee: 1.5,
    conversionRate: 0.98,
  },
];

export const TransactionHistory = () => {
  const [filterPlatform, setFilterPlatform] = useState<Platform | "all">("all");
  const [filterStatus, setFilterStatus] = useState<"all" | "completed" | "pending" | "failed">("all");

  const filteredTransactions = MOCK_TRANSACTIONS.filter((tx) => {
    const platformMatch = filterPlatform === "all" || tx.platform === filterPlatform;
    const statusMatch = filterStatus === "all" || tx.status === filterStatus;
    return platformMatch && statusMatch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-400 animate-spin" />;
      case "failed":
        return <AlertCircle className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "pending":
        return "text-yellow-400";
      case "failed":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Filter by Platform</label>
          <Select value={filterPlatform} onValueChange={(v) => setFilterPlatform(v as Platform | "all")}>
            <SelectTrigger className="bg-slate-800/50 border-purple-500/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-purple-500/20">
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="twitch">Twitch</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="kick">Kick</SelectItem>
              <SelectItem value="rumble">Rumble</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Filter by Status</label>
          <Select value={filterStatus} onValueChange={(v) => setFilterStatus(v as any)}>
            <SelectTrigger className="bg-slate-800/50 border-purple-500/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-purple-500/20">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {filteredTransactions.length === 0 ? (
          <Card className="bg-slate-800/50 border-purple-500/20 p-8 text-center">
            <p className="text-gray-400">No transactions found</p>
          </Card>
        ) : (
          filteredTransactions.map((tx) => (
            <Card
              key={tx.id}
              className="bg-slate-800/50 border-purple-500/20 p-4 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex-shrink-0">{getStatusIcon(tx.status)}</div>
                  <div className="flex-1">
                    <p className="font-semibold">{tx.creatorName}</p>
                    <p className="text-sm text-gray-400">
                      {tx.platform} • {new Date(tx.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">${tx.amount.toFixed(2)}</p>
                  <p className={`text-sm font-medium ${getStatusColor(tx.status)} capitalize`}>
                    {tx.status}
                  </p>
                </div>

                {tx.txHash && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-4"
                    title={tx.txHash}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Expandable Details */}
              <div className="mt-4 pt-4 border-t border-purple-500/10 grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Stablecoin</p>
                  <p className="font-semibold uppercase">{tx.stablecoin}</p>
                </div>
                <div>
                  <p className="text-gray-500">Fee</p>
                  <p className="font-semibold">${tx.fee.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Conversion Rate</p>
                  <p className="font-semibold">{(tx.conversionRate * 100).toFixed(1)}%</p>
                </div>
                <div>
                  <p className="text-gray-500">Creator Received</p>
                  <p className="font-semibold text-green-400">
                    ${(tx.amount * tx.conversionRate - tx.fee).toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};