import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Settings, Wallet, Coins } from "lucide-react";

interface OptionsPageProps {
  className?: string;
  defaultStable?: "USDC" | "USDT" | "DAI";
  autoDonate?: boolean;
  monthlyCap?: number;
}

export default function OptionsPage({
  className = "",
  defaultStable = "USDC",
  autoDonate = false,
  monthlyCap = 50,
}: OptionsPageProps) {
  const [coin, setCoin] = useState(defaultStable);
  const [auto, setAuto] = useState(autoDonate);
  const [cap, setCap] = useState([monthlyCap]);

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 p-4 ${className}`}>
      <div className="mx-auto w-full max-w-[720px] space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Settings className="w-4 h-4" /> Extension Options
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="w-4 h-4" /> General
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-xs">Default Stablecoin</Label>
                <Select value={coin} onValueChange={setCoin}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose stablecoin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USDC">USDC</SelectItem>
                    <SelectItem value="USDT">USDT</SelectItem>
                    <SelectItem value="DAI">DAI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between rounded-md border p-3">
                <div>
                  <p className="text-sm font-medium">Auto-Convert Donations</p>
                  <p className="text-xs text-muted-foreground">Automatically convert stablecoins when donating</p>
                </div>
                <Switch checked={auto} onCheckedChange={setAuto} />
              </div>
            </div>

            <div>
              <Label className="text-xs">Monthly Cap (USD)</Label>
              <div className="pt-3">
                <Slider value={cap} onValueChange={setCap} max={500} step={5} className="w-full" />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Current cap: ${cap[0]}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Coins className="w-4 h-4" /> Platform Connections
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button variant="secondary" className="justify-start gap-2">Link Twitch <Badge className="ml-auto" variant="outline">Not linked</Badge></Button>
              <Button variant="secondary" className="justify-start gap-2">Link YouTube <Badge className="ml-auto" variant="outline">Not linked</Badge></Button>
              <Button variant="secondary" className="justify-start gap-2">Link Patreon <Badge className="ml-auto" variant="outline">Not linked</Badge></Button>
            </div>
            <p className="text-xs text-muted-foreground">Manage platform OAuth connections for creator payouts.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Wallet className="w-4 h-4" /> Wallet Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="md:col-span-2">
                <Label className="text-xs">Allowed Networks (comma separated)</Label>
                <Input defaultValue="Ethereum, Base, Polygon" />
              </div>
              <div>
                <Label className="text-xs">Min Confirmation (blocks)</Label>
                <Input type="number" defaultValue={2} />
              </div>
            </div>

            <Separator />
            <div className="flex items-center justify-end gap-2">
              <Button variant="outline">Reset</Button>
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
