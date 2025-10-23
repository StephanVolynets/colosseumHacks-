import { useState } from "react";
import { useWallet } from "@/hooks/useWallet";
import { WalletConnection } from "./WalletConnection";
import { BalanceDisplay } from "./BalanceDisplay";
import { DonationFlow } from "./DonationFlow";
import { TransactionHistory } from "./TransactionHistory";
import { SettingsPanel } from "./SettingsPanel";
import { ChromeExtensionGuide } from "./ChromeExtensionGuide";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, History, Settings, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const MainDashboard = () => {
  const { wallet, balances, connectWallet, disconnectWallet, providers, isConnecting } = useWallet();
  const [activeTab, setActiveTab] = useState("donate");
  const [showExtensionGuide, setShowExtensionGuide] = useState(false);

  if (!wallet) {
    return (
      <WalletConnection
        providers={providers}
        onConnect={connectWallet}
        isConnecting={isConnecting}
      />
    );
  }

  if (showExtensionGuide) {
    return <ChromeExtensionGuide onBack={() => setShowExtensionGuide(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-slate-50 light:via-purple-50 light:to-slate-50 text-white dark:text-white light:text-slate-900">
      {/* Header */}
      <div className="border-b border-purple-500/20 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold gradient-text">Donation Bridge</h1>
            <p className="text-sm text-gray-400 mt-1">
              {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => setShowExtensionGuide(true)}
              variant="outline"
              size="sm"
              className="border-purple-500/30 hover:bg-purple-500/10"
            >
              <Brain className="w-4 h-4 mr-2" />
              Neural Extension
            </Button>
            <Button
              onClick={disconnectWallet}
              variant="outline"
              size="sm"
              className="border-purple-500/30 hover:bg-purple-500/10"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Disconnect
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Balance Display */}
        <BalanceDisplay balances={balances} />

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-800/50 border border-purple-500/20">
            <TabsTrigger value="donate" className="data-[state=active]:bg-purple-600">
              <Zap className="w-4 h-4 mr-2" />
              Donate
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-purple-600">
              <History className="w-4 h-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-purple-600">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donate" className="mt-8">
            <DonationFlow balances={balances} />
          </TabsContent>

          <TabsContent value="history" className="mt-8">
            <TransactionHistory />
          </TabsContent>

          <TabsContent value="settings" className="mt-8">
            <SettingsPanel />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};