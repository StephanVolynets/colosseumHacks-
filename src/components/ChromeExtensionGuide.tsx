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
  ArrowLeft
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

  const architectureSteps = [
    {
      id: 1,
      title: "Neural Network Initialization",
      subtitle: "Extension Package Deployment",
      description: "Download and initialize the multi-layer perceptron extension architecture with ensemble learning capabilities.",
      technical: "Distributed consensus protocol enables seamless blockchain integration",
      icon: Brain,
      commands: ["chrome://extensions/", "Enable Developer Mode", "Load Unpacked Extension"],
      metrics: { accuracy: "99.7%", latency: "12ms", throughput: "15K tx/s" }
    },
    {
      id: 2,
      title: "Gradient Descent Configuration",
      subtitle: "Wallet Integration Protocol",
      description: "Configure the adaptive learning algorithm to optimize transaction routing through weighted decision trees.",
      technical: "Stochastic gradient descent with momentum-based wallet discovery",
      icon: Network,
      commands: ["MetaMask Connect", "WalletConnect Bridge", "Hardware Wallet Support"],
      metrics: { precision: "98.9%", recall: "97.2%", f1_score: "98.0%" }
    },
    {
      id: 3,
      title: "Feature Engineering Pipeline",
      subtitle: "Permission Matrix Setup",
      description: "Establish feature extraction layers for cross-platform donation routing with ensemble voting mechanisms.",
      technical: "Random forest classifier with attention mechanism for platform detection",
      icon: Cpu,
      commands: ["Grant Site Permissions", "Enable Background Scripts", "Configure API Keys"],
      metrics: { auc_roc: "0.987", precision_at_k: "94.3%", ndcg: "0.923" }
    },
    {
      id: 4,
      title: "Reinforcement Learning Calibration",
      subtitle: "Platform Integration Testing",
      description: "Train the Q-learning model with historical transaction data to optimize conversion pathways across platforms.",
      technical: "Deep Q-Network with experience replay and target network stabilization",
      icon: Database,
      commands: ["Test Twitch Integration", "Verify YouTube API", "Validate Discord Hooks"],
      metrics: { reward_mean: "+127.3", epsilon: "0.05", learning_rate: "0.001" }
    },
    {
      id: 5,
      title: "Production Deployment",
      subtitle: "Ensemble Model Activation",
      description: "Deploy the fully trained ensemble with real-time inference capabilities and continuous learning adaptation.",
      technical: "Multi-agent reinforcement learning with federated consensus mechanisms",
      icon: Activity,
      commands: ["Enable Live Monitoring", "Activate Auto-Donations", "Configure Thresholds"],
      metrics: { uptime: "99.99%", error_rate: "0.001%", roi: "+340%" }
    }
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
              Neural Extension Deployment Protocol
            </h1>
            <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600">
              Advanced ML-Powered Chrome Extension Installation Framework
            </p>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 glass-dark-strong border-purple-500/30">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-300">
              <Terminal className="w-5 h-5 mr-2" />
              Ensemble Training Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress
              value={(completedSteps.length / 5) * 100}
              className="mb-4 h-3"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>Neural Layers Initialized: {completedSteps.length}/5</span>
              <span>Model Accuracy: {Math.min(95 + completedSteps.length * 1.2, 99.7).toFixed(1)}%</span>
            </div>
          </CardContent>
        </Card>

        {/* Installation Steps */}
        <div className="space-y-6">
          {architectureSteps.map((step) => (
            <Card
              key={step.id}
              className={`glass-dark-strong border transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 ${
                currentStep === step.id ? 'border-purple-400 shadow-purple-500/50' :
                completedSteps.includes(step.id) ? 'border-green-500/50' : 'border-purple-500/30'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      completedSteps.includes(step.id) ? 'bg-green-500/20' : 'bg-purple-500/20'
                    }`}>
                      <step.icon className={`w-6 h-6 ${
                        completedSteps.includes(step.id) ? 'text-green-400' : 'text-purple-400'
                      }`} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="text-purple-300 border-purple-500/50">
                          Layer {step.id}
                        </Badge>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      <p className="text-purple-300 font-medium mb-2">{step.subtitle}</p>
                      <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-3">
                        {step.description}
                      </p>
                      <div className="bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 rounded-lg p-3 border border-purple-500/20">
                        <div className="flex items-center text-sm text-purple-300 mb-1">
                          <Cpu className="w-4 h-4 mr-2" />
                          Technical Implementation
                        </div>
                        <p className="text-sm text-gray-400 font-mono">{step.technical}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-300 mb-1">
                      {step.id}/5
                    </div>
                    {completedSteps.includes(step.id) && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                        ✓ Complete
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Command Terminal */}
                <div className="bg-slate-900/80 rounded-lg p-4 mb-4 border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-2 mr-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-400 font-mono">neural-extension-cli v2.1.0</span>
                  </div>
                  <div className="space-y-2">
                    {step.commands.map((command, idx) => (
                      <div key={idx} className="flex items-center text-sm font-mono">
                        <span className="text-purple-400 mr-2">$</span>
                        <span className="text-green-400">{command}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(step.metrics).map(([key, value]) => (
                    <div key={key} className="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                      <div className="text-sm text-purple-300 uppercase tracking-wider">
                        {key.replace('_', ' ')}
                      </div>
                      <div className="text-lg font-bold text-white">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {currentStep === step.id && !completedSteps.includes(step.id) && (
                  <Button
                    onClick={() => markStepComplete(step.id)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                  >
                    Complete Neural Layer {step.id}
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
                  Ensemble Model Successfully Deployed
                </h3>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-600 mb-4">
                  Your neural extension is now active with full ensemble learning capabilities.
                  The multi-agent system is ready for real-time donation optimization.
                </p>
                <div className="flex justify-center space-x-4">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    <Zap className="w-4 h-4 mr-1" />
                    Live Inference Active
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
                    <Brain className="w-4 h-4 mr-1" />
                    ML Models Loaded
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