import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Settings,
  Shield,
  Zap,
  ChevronRight,
  Terminal,
  Brain,
  Network,
  Cpu,
  Database,
  Activity,
  ArrowLeft,
  Check,
} from "lucide-react";

interface ChromeExtensionGuideProps {
  onBack: () => void;
}

export const ChromeExtensionGuide = ({ onBack }: ChromeExtensionGuideProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const markStepComplete = (stepNumber: number) => {
    if (!completedSteps.includes(stepNumber)) {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
    if (stepNumber < 5) {
      setCurrentStep(stepNumber + 1);
    }
  };

  const installationSteps = [
    {
      id: 1,
      title: "Download Extension",
      subtitle: "Get Started with the Chrome Extension",
      description:
        "Download and install our extension from the Chrome Web Store or load it in developer mode.",
      tip: "The extension enables secure stablecoin payments across platforms",
      icon: Download,
      commands: [
        "Open Chrome Web Store",
        "Search for 'Stablecoin Payments'",
        "Click 'Add to Chrome'",
      ],
      metrics: { time: "2 min", difficulty: "Easy", support: "Available" },
    },
    {
      id: 2,
      title: "Connect Your Wallet",
      subtitle: "Link Your Crypto Wallet",
      description:
        "Connect your preferred wallet (MetaMask, WalletConnect, or hardware wallet) to enable payments.",
      tip: "Your private keys always remain secure and are never shared",
      icon: Network,
      commands: [
        "Click extension icon",
        "Select 'Connect Wallet'",
        "Choose your wallet provider",
      ],
      metrics: { wallets: "10+ supported", security: "End-to-end", fees: "Transparent" },
    },
    {
      id: 3,
      title: "Set Permissions",
      subtitle: "Configure Access Settings",
      description:
        "Grant the necessary permissions for the extension to interact with content creator platforms.",
      tip: "Only minimal permissions are requested for security",
      icon: Shield,
      commands: [
        "Review permissions",
        "Enable site access",
        "Configure notification settings",
      ],
      metrics: { privacy: "Enhanced", data: "Not collected", control: "Full user control" },
    },
    {
      id: 4,
      title: "Platform Integration",
      subtitle: "Connect Creator Platforms",
      description:
        "Link your favorite content platforms (YouTube, Twitch, Discord) to enable seamless donations.",
      tip: "Integration allows one-click donations while watching content",
      icon: Database,
      commands: [
        "Go to Settings > Platforms",
        "Select platforms to enable",
        "Authorize connections",
      ],
      metrics: {
        platforms: "YouTube, Twitch, Discord",
        setup: "One-time",
        creators: "Unlimited",
      },
    },
    {
      id: 5,
      title: "Ready to Use",
      subtitle: "Start Supporting Creators",
      description:
        "Your extension is now fully configured and ready to use for supporting content creators with stablecoin donations.",
      tip: "Set up auto-donations or use the quick-donate feature while watching content",
      icon: Activity,
      commands: [
        "Visit creator content",
        "Click extension icon",
        "Select amount and send",
      ],
      metrics: { transaction: "Instant", conversion: "Automatic", fees: "Minimal" },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-purple-50 light:via-purple-100 light:to-slate-50 text-white dark:text-white light:text-slate-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      {/* Neural network visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mr-4 text-purple-300 hover:text-white hover:bg-purple-500/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">
              Chrome Extension Setup Guide
            </h1>
            <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600">
              Easy 5-step process to start supporting creators with stablecoins
            </p>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 glass-dark-strong border-purple-500/30">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-300">
              <Terminal className="w-5 h-5 mr-2" />
              Installation Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress
              value={(completedSteps.length / 5) * 100}
              className="mb-4 h-3"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>Steps Completed: {completedSteps.length}/5</span>
              <span>
                {completedSteps.length === 5 
                  ? "Setup Complete!" 
                  : `${Math.round((completedSteps.length / 5) * 100)}% Complete`}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Installation Steps */}
        <div className="space-y-6">
          {installationSteps.map((step) => (
            <Card
              key={step.id}
              className={`glass-dark-strong border transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 ${
                currentStep === step.id
                  ? "border-purple-400 shadow-purple-500/50"
                  : completedSteps.includes(step.id)
                    ? "border-green-500/50"
                    : "border-purple-500/30"
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        completedSteps.includes(step.id)
                          ? "bg-green-500/20"
                          : "bg-purple-500/20"
                      }`}
                    >
                      <step.icon
                        className={`w-6 h-6 ${
                          completedSteps.includes(step.id)
                            ? "text-green-400"
                            : "text-purple-400"
                        }`}
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge
                          variant="outline"
                          className="text-purple-300 border-purple-500/50"
                        >
                          Step {step.id}
                        </Badge>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      <p className="text-purple-300 font-medium mb-2">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-lg p-3 border border-purple-500/20">
                        <div className="flex items-center text-sm text-purple-300 mb-1">
                          <Zap className="w-4 h-4 mr-2" />
                          Helpful Tip
                        </div>
                        <p className="text-sm text-gray-400">
                          {step.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-300 mb-1">
                      {step.id}/5
                    </div>
                    {completedSteps.includes(step.id) && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                        <Check className="w-3 h-3 mr-1" /> Complete
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* How-to Instructions */}
                <div className="bg-slate-900/80 rounded-lg p-4 mb-4 border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-400">
                      How to complete this step
                    </span>
                  </div>
                  <div className="space-y-2">
                    {step.commands.map((command, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm"
                      >
                        <span className="text-purple-400 mr-2">{idx + 1}.</span>
                        <span className="text-green-400">{command}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Information */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(step.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20"
                    >
                      <div className="text-sm text-purple-300 uppercase tracking-wider">
                        {key.replace("_", " ")}
                      </div>
                      <div className="text-lg font-bold text-white">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {currentStep === step.id &&
                  !completedSteps.includes(step.id) && (
                    <Button
                      onClick={() => markStepComplete(step.id)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                    >
                      Mark Step {step.id} Complete
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Completion Status */}
        {completedSteps.length === 5 && (
          <Card className="mt-8 glass-dark-strong border-green-500/50 bg-green-500/10">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  Setup Complete!
                </h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-4">
                  Your extension is now ready to use. You can now support your favorite content creators 
                  with stablecoin donations across multiple platforms.
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    <Zap className="w-4 h-4 mr-1" />
                    Ready to Use
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                    <Brain className="w-4 h-4 mr-1" />
                    Smart Payments Enabled
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};