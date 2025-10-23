import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Platform, StablecoinType } from "@/types/donation";
import { Plus, Trash2, Save } from "lucide-react";

export const SettingsPanel = () => {
  const [defaultPlatform, setDefaultPlatform] = useState<Platform>("twitch");
  const [preferredStablecoins, setPreferredStablecoins] = useState<StablecoinType[]>(["usdc", "usdt"]);
  const [autoDonationEnabled, setAutoDonationEnabled] = useState(false);
  const [recurringDonations, setRecurringDonations] = useState([
    { id: "1", creatorName: "StreamerPro", amount: 10, frequency: "weekly" as const },
  ]);
  const [newRecurring, setNewRecurring] = useState({ creatorName: "", amount: "", frequency: "weekly" as const });
  const [saved, setSaved] = useState(false);

  const handleAddRecurring = () => {
    if (newRecurring.creatorName && newRecurring.amount) {
      setRecurringDonations([
        ...recurringDonations,
        {
          id: Date.now().toString(),
          creatorName: newRecurring.creatorName,
          amount: parseFloat(newRecurring.amount),
          frequency: newRecurring.frequency,
        },
      ]);
      setNewRecurring({ creatorName: "", amount: "", frequency: "weekly" });
    }
  };

  const handleRemoveRecurring = (id: string) => {
    setRecurringDonations(recurringDonations.filter((r) => r.id !== id));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleStablecoin = (coin: StablecoinType) => {
    setPreferredStablecoins((prev) =>
      prev.includes(coin) ? prev.filter((c) => c !== coin) : [...prev, coin]
    );
  };

  return (
    <div className="space-y-6">
      {/* Default Platform */}
      <Card className="bg-slate-800/50 border-purple-500/20 p-6">
        <h3 className="text-lg font-semibold mb-4">Default Platform</h3>
        <Select value={defaultPlatform} onValueChange={(v) => setDefaultPlatform(v as Platform)}>
          <SelectTrigger className="bg-slate-700/50 border-purple-500/20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-purple-500/20">
            <SelectItem value="twitch">Twitch</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
            <SelectItem value="kick">Kick</SelectItem>
            <SelectItem value="rumble">Rumble</SelectItem>
          </SelectContent>
        </Select>
      </Card>

      {/* Preferred Stablecoins */}
      <Card className="bg-slate-800/50 border-purple-500/20 p-6">
        <h3 className="text-lg font-semibold mb-4">Preferred Stablecoins</h3>
        <div className="space-y-3">
          {(["usdc", "usdt", "dai"] as StablecoinType[]).map((coin) => (
            <div key={coin} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
              <span className="font-semibold uppercase">{coin}</span>
              <Switch
                checked={preferredStablecoins.includes(coin)}
                onCheckedChange={() => toggleStablecoin(coin)}
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Auto-Donation */}
      <Card className="bg-slate-800/50 border-purple-500/20 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Auto-Donation</h3>
          <Switch
            checked={autoDonationEnabled}
            onCheckedChange={setAutoDonationEnabled}
          />
        </div>
        <p className="text-sm text-gray-400">
          Enable automatic donations based on your configured thresholds and recurring donations.
        </p>
      </Card>

      {/* Recurring Donations */}
      <Card className="bg-slate-800/50 border-purple-500/20 p-6">
        <h3 className="text-lg font-semibold mb-4">Recurring Donations</h3>

        {/* List */}
        <div className="space-y-3 mb-6">
          {recurringDonations.map((donation) => (
            <div
              key={donation.id}
              className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg"
            >
              <div>
                <p className="font-semibold">{donation.creatorName}</p>
                <p className="text-sm text-gray-400">
                  ${donation.amount} {donation.frequency}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleRemoveRecurring(donation.id)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Add New */}
        <div className="space-y-3 p-4 bg-slate-700/30 rounded-lg border border-purple-500/20">
          <h4 className="font-semibold text-sm">Add New Recurring Donation</h4>
          <Input
            placeholder="Creator name"
            value={newRecurring.creatorName}
            onChange={(e) => setNewRecurring({ ...newRecurring, creatorName: e.target.value })}
            className="bg-slate-700/50 border-purple-500/20"
          />
          <Input
            type="number"
            placeholder="Amount"
            value={newRecurring.amount}
            onChange={(e) => setNewRecurring({ ...newRecurring, amount: e.target.value })}
            className="bg-slate-700/50 border-purple-500/20"
          />
          <Select
            value={newRecurring.frequency}
            onValueChange={(v) => setNewRecurring({ ...newRecurring, frequency: v as any })}
          >
            <SelectTrigger className="bg-slate-700/50 border-purple-500/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-purple-500/20">
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={handleAddRecurring}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Donation
          </Button>
        </div>
      </Card>

      {/* Save Button */}
      <Button
        onClick={handleSave}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-6"
      >
        <Save className="w-4 h-4 mr-2" />
        {saved ? "Settings Saved!" : "Save Settings"}
      </Button>
    </div>
  );
};