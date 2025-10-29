import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Platform } from "@/types/donation";
import { Twitch, Youtube, Zap, AlertCircle, CheckCircle } from "lucide-react";

interface PlatformIntegrationProps {
  onComplete?: () => void;
}

interface PlatformConfig {
  id: Platform;
  name: string;
  icon: React.ElementType;
  color: string;
  connected: boolean;
  username?: string;
  autoSync: boolean;
}

export const PlatformIntegration = ({
  onComplete,
}: PlatformIntegrationProps) => {
  const [platforms, setPlatforms] = useState<PlatformConfig[]>([
    {
      id: "twitch",
      name: "Twitch",
      icon: Twitch,
      color: "#9146FF",
      connected: false,
      autoSync: true,
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      color: "#FF0000",
      connected: false,
      autoSync: true,
    },
    {
      id: "kick",
      name: "Kick",
      icon: Zap,
      color: "#53FC18",
      connected: false,
      autoSync: false,
    },
    {
      id: "rumble",
      name: "Rumble",
      icon: Zap,
      color: "#85c742",
      connected: false,
      autoSync: false,
    },
  ]);

  const [connecting, setConnecting] = useState<Platform | null>(null);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleConnect = (platform: Platform) => {
    setConnecting(platform);
    setError("");

    // Simulate connection process
    setTimeout(() => {
      if (!username) {
        setError("Please enter a valid username");
        setConnecting(null);
        return;
      }

      setPlatforms(
        platforms.map((p) =>
          p.id === platform ? { ...p, connected: true, username } : p,
        ),
      );

      setConnecting(null);
      setUsername("");
    }, 1500);
  };

  const handleDisconnect = (platform: Platform) => {
    setPlatforms(
      platforms.map((p) =>
        p.id === platform ? { ...p, connected: false, username: undefined } : p,
      ),
    );
  };

  const toggleAutoSync = (platform: Platform) => {
    setPlatforms(
      platforms.map((p) =>
        p.id === platform ? { ...p, autoSync: !p.autoSync } : p,
      ),
    );
  };

  const allConnected = platforms.every((p) => p.connected);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-2">
          Platform Integration
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Connect your content creator accounts to enable automatic donations
          through our Chrome extension
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((platform) => (
          <Card
            key={platform.id}
            className={`bg-slate-800/50 border-${platform.connected ? `[${platform.color}]/50` : "purple-500/20"} p-6 transition-all`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${platform.color}30` }}
                >
                  <platform.icon
                    className="w-5 h-5"
                    style={{ color: platform.color }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{platform.name}</h3>
                  {platform.connected && (
                    <p className="text-xs text-gray-400">
                      @{platform.username}
                    </p>
                  )}
                </div>
              </div>

              {platform.connected ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-green-500">Connected</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-yellow-500">Not Connected</span>
                </div>
              )}
            </div>

            {platform.connected ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor={`auto-sync-${platform.id}`}
                    className="text-sm text-gray-400"
                  >
                    Auto-sync donations
                  </Label>
                  <Switch
                    id={`auto-sync-${platform.id}`}
                    checked={platform.autoSync}
                    onCheckedChange={() => toggleAutoSync(platform.id)}
                  />
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10"
                  onClick={() => handleDisconnect(platform.id)}
                >
                  Disconnect Account
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label
                    className="text-sm text-gray-400 mb-2 block"
                    htmlFor={`username-${platform.id}`}
                  >
                    {platform.name} Username
                  </Label>
                  <Input
                    id={`username-${platform.id}`}
                    placeholder={`Enter your ${platform.name} username`}
                    value={connecting === platform.id ? username : ""}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-slate-700/50 border-purple-500/20"
                    disabled={connecting !== null && connecting !== platform.id}
                  />
                  {error && connecting === platform.id && (
                    <p className="text-xs text-red-400 mt-1">{error}</p>
                  )}
                </div>

                <Button
                  className="w-full"
                  style={{
                    background: platform.color,
                    color: platform.id === "kick" ? "#000" : "#fff",
                  }}
                  disabled={connecting !== null}
                  onClick={() => handleConnect(platform.id)}
                >
                  {connecting === platform.id ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Connecting...
                    </span>
                  ) : (
                    `Connect ${platform.name}`
                  )}
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>
      {allConnected && (
        <div className="mt-8 text-center">
          <Button
            onClick={onComplete}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8"
          >
            Continue to Dashboard
          </Button>
        </div>
      )}
      <div className="mt-8 p-4 bg-slate-800/50 border border-purple-500/20 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="bg-purple-500/20 p-2 rounded-full">
            <AlertCircle className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">
              How Platform Integration Works
            </h4>
            <p className="text-xs text-gray-400">
              Our Chrome extension detects when you're on a creator's page and
              enables one-click donations. By connecting your accounts, you can
              also set up automatic donations and track your support across
              platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};