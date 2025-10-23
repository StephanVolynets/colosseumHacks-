import { Button } from "@/components/ui/button";
import {
  Wallet,
  Zap,
  TrendingUp,
  Shield,
  Chrome,
  Download,
} from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br via-purple-900 to-slate-900 dark:from-[#3b2592] dark:via-purple-900 dark:to-slate-900 light:from-purple-50 light:via-purple-100 light:to-slate-50 text-white dark:text-white light:text-slate-900 overflow-hidden from-[#3b2592]">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.6}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Chrome Extension Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
            <Chrome className="w-5 h-5 text-purple-300" />
            <span className="text-sm text-purple-200">Chrome Extension</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="gap-2 bg-purple-500/10 border-purple-500/30 rounded-full px-4 py-2 mb-6 md:mb-8 flex items-center justify-center mx-auto gap-x-1.5 border-4 hover:border-double h-[63px] w-full max-w-[276px] shadow-lg shadow-purple-500/50 hover:shadow-purple-400/70 transition-all duration-300">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 leading-[32px] font-semibold text-center w-full max-w-[216.993px] h-[33px] flex text-[13.75px]">
              Seamless Stablecoin Donations
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 gradient-text">
            Support Your Favorite Creators
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8">
            Our Chrome extension seamlessly converts stablecoins into
            platform-specific donations. Support creators on Twitch, YouTube,
            and more with zero friction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onGetStarted}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 hover:bg-purple-500/10 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all w-full sm:w-auto bg-fuchsia-700"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Extension
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20 focus:-tracking-widest -tracking-wide">
          {[
            {
              icon: Wallet,
              title: "Wallet Integration",
              description:
                "Connect your wallet and view all stablecoin balances in one place",
            },
            {
              icon: Zap,
              title: "One-Click Donations",
              description:
                "Convert and donate with a single click. No complex steps required.",
            },
            {
              icon: TrendingUp,
              title: "Real-time Rates",
              description:
                "See live conversion rates and fees before confirming transactions",
            },
            {
              icon: Shield,
              title: "Secure & Safe",
              description:
                "Your wallet stays in control. We never hold your funds.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="glass-dark-strong p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all group"
            >
              <feature.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-pink-400 transition-colors" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Chrome Extension Preview */}
        <div className="mt-16 md:mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
            How It Works
          </h2>
          <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Chrome className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Install Extension
                </h3>
                <p className="text-gray-400 text-sm">
                  Add our Chrome extension to your browser in seconds
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Wallet className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Connect Wallet</h3>
                <p className="text-gray-400 text-sm">
                  Link your crypto wallet to enable stablecoin donations
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Donate Instantly</h3>
                <p className="text-gray-400 text-sm">
                  Support creators across platforms with one click
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};