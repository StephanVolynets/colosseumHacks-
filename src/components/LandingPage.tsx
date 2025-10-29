import { useCallback } from "react";
import { HeroSection } from "@/components/HeroSection";
import ExtensionPopupUI from "@/components/ExtensionPopupUI";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
  const handleGetStarted = useCallback(() => {
    const el = document.getElementById("plugin-preview");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* Hero */}
      <HeroSection onGetStarted={handleGetStarted} />

      {/* Chrome Plugin UI Preview */}
      <section id="plugin-preview" className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Chrome Extension Preview</h2>
          <p className="text-gray-300 mb-8">See the donation popup users interact with in-browser.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="glass-dark-strong border-purple-500/30">
              <CardContent className="p-4">
                <ExtensionPopupUI className="rounded-xl" />
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="bg-slate-800/60 border border-purple-500/20 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">What you can do</h3>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                  <li>Pick a stablecoin and platform (Twitch, YouTube, Patreon)</li>
                  <li>Enter an amount and donate with one click</li>
                  <li>Link platforms for auto-donations</li>
                  <li>View recent history and statuses</li>
                </ul>
              </div>
              <div className="bg-slate-800/60 border border-purple-500/20 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">Safe by design</h3>
                <p className="text-gray-300 text-sm">Wallet stays in control, fees shown upfront, and transactions require explicit confirmation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
