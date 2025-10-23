import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StablecoinBalance, Platform } from "@/types/donation";
import { Search, ArrowRight, CheckCircle } from "lucide-react";

interface DonationFlowProps {
  balances: StablecoinBalance[];
}

const PLATFORMS: { value: Platform; label: string; icon: string }[] = [
  { value: "twitch", label: "Twitch", icon: "🎮" },
  { value: "youtube", label: "YouTube", icon: "📺" },
  { value: "kick", label: "Kick", icon: "⚡" },
  { value: "rumble", label: "Rumble", icon: "🎬" },
];

const MOCK_CREATORS = [
  { id: "1", name: "StreamerPro", platform: "twitch" as Platform, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=streamer1", verified: true },
  { id: "2", name: "TechTuber", platform: "youtube" as Platform, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech", verified: true },
  { id: "3", name: "GamingKing", platform: "twitch" as Platform, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gaming", verified: false },
  { id: "4", name: "ContentQueen", platform: "youtube" as Platform, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=content", verified: true },
];

export const DonationFlow = ({ balances = [] }: DonationFlowProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | "">("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCreator, setSelectedCreator] = useState<typeof MOCK_CREATORS[0] | null>(null);
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedStablecoin, setSelectedStablecoin] = useState<string>(balances[0]?.type || "");
  const [showPreview, setShowPreview] = useState(false);
  const [transactionComplete, setTransactionComplete] = useState(false);

  const filteredCreators = MOCK_CREATORS.filter((creator) => {
    const matchesPlatform = !selectedPlatform || creator.platform === selectedPlatform;
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  const conversionRate = 0.98;
  const fee = donationAmount ? parseFloat(donationAmount) * 0.02 : 0;
  const finalAmount = donationAmount ? parseFloat(donationAmount) * conversionRate - fee : 0;

  const handleDonate = () => {
    setTransactionComplete(true);
    setTimeout(() => {
      setTransactionComplete(false);
      setSelectedCreator(null);
      setDonationAmount("");
      setShowPreview(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Step 1: Select Platform */}
      <Card className="bg-slate-800/50 border-purple-500/20 p-6">
        <h3 className="text-lg font-semibold mb-4">1. Select Platform</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PLATFORMS.map((platform) => (
            <button
              key={platform.value}
              onClick={() => {
                setSelectedPlatform(platform.value);
                setSelectedCreator(null);
              }}
              className={`p-4 rounded-lg border-2 transition-all text-center ${
                selectedPlatform === platform.value
                  ? "border-purple-500 bg-purple-500/20"
                  : "border-purple-500/20 bg-slate-700/50 hover:border-purple-500/50"
              }`}
            >
              <span className="text-2xl mb-2 block">{platform.icon}</span>
              <span className="text-sm font-medium">{platform.label}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* Step 2: Search Creator */}
      {selectedPlatform && (
        <Card className="bg-slate-800/50 border-purple-500/20 p-6">
          <h3 className="text-lg font-semibold mb-4">2. Search Creator</h3>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
            <Input
              placeholder="Search creator name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-700/50 border-purple-500/20 focus:border-purple-500/50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
            {filteredCreators.map((creator) => (
              <button
                key={creator.id}
                onClick={() => setSelectedCreator(creator)}
                className={`p-4 rounded-lg border-2 transition-all text-left flex items-center gap-3 ${
                  selectedCreator?.id === creator.id
                    ? "border-purple-500 bg-purple-500/20"
                    : "border-purple-500/20 bg-slate-700/50 hover:border-purple-500/50"
                }`}
              >
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="font-medium flex items-center gap-2">
                    {creator.name}
                    {creator.verified && <span className="text-blue-400">✓</span>}
                  </p>
                  <p className="text-xs text-gray-500">{creator.platform}</p>
                </div>
              </button>
            ))}
          </div>
        </Card>
      )}

      {/* Step 3: Enter Amount */}
      {selectedCreator && (
        <Card className="bg-slate-800/50 border-purple-500/20 p-6">
          <h3 className="text-lg font-semibold mb-4">3. Enter Donation Amount</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="text-gray-300 mb-2 block">Amount</Label>
              <Input
                type="number"
                placeholder="0.00"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="bg-slate-700/50 border-purple-500/20 focus:border-purple-500/50"
              />
            </div>
            <div>
              <Label className="text-gray-300 mb-2 block">Stablecoin</Label>
              <Select value={selectedStablecoin} onValueChange={setSelectedStablecoin}>
                <SelectTrigger className="bg-slate-700/50 border-purple-500/20 focus:border-purple-500/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-purple-500/20">
                  {balances.map((balance) => (
                    <SelectItem key={balance.type} value={balance.type}>
                      {balance.symbol} (${balance.balance})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Dialog open={showPreview} onOpenChange={setShowPreview}>
            <DialogTrigger asChild>
              <Button
                disabled={!donationAmount || parseFloat(donationAmount) <= 0}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Review & Confirm
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-purple-500/20">
              <DialogHeader>
                <DialogTitle>Transaction Preview</DialogTitle>
                <DialogDescription>Review your donation details</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="bg-slate-700/50 p-4 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Creator</span>
                    <span className="font-semibold">{selectedCreator.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Platform</span>
                    <span className="font-semibold capitalize">{selectedCreator.platform}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Amount</span>
                    <span className="font-semibold">${parseFloat(donationAmount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Conversion Rate</span>
                    <span className="font-semibold">{(conversionRate * 100).toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between text-red-400">
                    <span className="text-gray-400">Fee (2%)</span>
                    <span className="font-semibold">-${fee.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-purple-500/20 pt-3 flex justify-between">
                    <span className="text-gray-300 font-semibold">Creator Receives</span>
                    <span className="text-lg font-bold text-green-400">${finalAmount.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleDonate}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Confirm Donation
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </Card>
      )}

      {/* Success Message */}
      {transactionComplete && (
        <Card className="bg-green-500/20 border-green-500/50 p-6 text-center">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-green-300">Donation Successful!</h3>
          <p className="text-sm text-green-200 mt-2">
            Your donation has been processed and sent to {selectedCreator?.name}
          </p>
        </Card>
      )}
    </div>
  );
};