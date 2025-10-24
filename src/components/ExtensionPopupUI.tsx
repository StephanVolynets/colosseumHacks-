import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Chrome, Wallet, Zap, History, Link as LinkIcon } from "lucide-react";

interface ExtensionPopupUIProps {
  className?: string;
}

export default function ExtensionPopupUI({ className = "" }: ExtensionPopupUIProps) {
  const [stablecoin, setStablecoin] = useState("USDC");
  const [platform, setPlatform] = useState("twitch");
  const [amount, setAmount] = useState("5");

  const mockTx = [
    { id: "tx_1", platform: "Twitch", amount: "5.00", coin: "USDC", status: "Confirmed" },
    { id: "tx_2", platform: "YouTube", amount: "10.00", coin: "USDT", status: "Pending" },
    { id: "tx_3", platform: "Patreon", amount: "3.00", coin: "DAI", status: "Confirmed" },
  ];

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 p-4 ${className}`}>
      <div className="mx-auto w-full max-w-[380px]">
        <Card className="border-gray-200 dark:border-gray-800">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Chrome className="w-5 h-5 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <CardTitle className="text-base">Stablecoin Donations</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-[10px]">Chrome</Badge>
                    <Badge variant="outline" className="text-[10px]">v0.1.0</Badge>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Wallet className="w-4 h-4" />
                Connect
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="donate" className="w-full">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="donate">Donate</TabsTrigger>
                <TabsTrigger value="links">Links</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="donate" className="mt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs">Stablecoin</Label>
                      <Select value={stablecoin} onValueChange={setStablecoin}>
                        <SelectTrigger className="h-9">
                          <SelectValue placeholder="Select coin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USDC">USDC</SelectItem>
                          <SelectItem value="USDT">USDT</SelectItem>
                          <SelectItem value="DAI">DAI</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs">Platform</Label>
                      <Select value={platform} onValueChange={setPlatform}>
                        <SelectTrigger className="h-9">
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="twitch">Twitch</SelectItem>
                          <SelectItem value="youtube">YouTube</SelectItem>
                          <SelectItem value="patreon">Patreon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs">Amount</Label>
                    <div className="flex gap-2">
                      <Input value={amount} onChange={(e) => setAmount(e.target.value)} className="h-9" />
                      <Button className="gap-1">
                        <Zap className="w-4 h-4" />
                        Donate
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Conversion preview included at confirm step. Fees shown before sending.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="links" className="mt-4">
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full justify-start gap-2">
                    <LinkIcon className="w-4 h-4" /> Link Twitch
                  </Button>
                  <Button variant="secondary" className="w-full justify-start gap-2">
                    <LinkIcon className="w-4 h-4" /> Link YouTube
                  </Button>
                  <Button variant="secondary" className="w-full justify-start gap-2">
                    <LinkIcon className="w-4 h-4" /> Link Other
                  </Button>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Manage platform connections for auto-donations.</p>
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-4">
                <div className="space-y-3">
                  {mockTx.map((t) => (
                    <div key={t.id} className="flex items-center justify-between rounded-md border border-gray-200 dark:border-gray-800 p-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.platform}`} />
                          <AvatarFallback>{t.platform.slice(0,2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{t.platform}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{t.coin} • {t.status}</p>
                        </div>
                      </div>
                      <div className="text-sm font-semibold">${t.amount}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
