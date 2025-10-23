import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader } from "lucide-react";

interface WalletConnectionProps {
  providers: string[];
  onConnect: (provider: string) => void;
  isConnecting: boolean;
}

export const WalletConnection = ({
  providers = ["MetaMask", "WalletConnect", "Coinbase Wallet"],
  onConnect,
  isConnecting = false,
}: WalletConnectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-md w-full">
        <Card className="bg-slate-800/50 border-purple-500/30 p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Connect Wallet</h1>
            <p className="text-gray-400">
              Connect your wallet to get started with donations
            </p>
          </div>

          <div className="space-y-3">
            {providers.map((provider) => (
              <Button
                key={provider}
                onClick={() => onConnect(provider)}
                disabled={isConnecting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 py-6 font-semibold transition-all"
              >
                {isConnecting ? (
                  <>
                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <span className="mr-2">🔗</span>
                    Connect with {provider}
                  </>
                )}
              </Button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
            <p className="text-xs text-gray-400 text-center">
              Your wallet stays in control. We never hold your funds or private keys.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};