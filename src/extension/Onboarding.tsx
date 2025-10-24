import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Chrome, Link2, Wallet } from "lucide-react";

interface OnboardingProps {
  className?: string;
  startStep?: 1 | 2 | 3;
}

export default function Onboarding({ className = "", startStep = 1 }: OnboardingProps) {
  const [step, setStep] = useState(startStep);

  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 p-4 ${className}`}>
      <div className="mx-auto max-w-[720px]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Get Started</CardTitle>
              <Badge variant="secondary" className="text-[10px]">Setup</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-center justify-between text-xs">
              <StepDot label="Connect Wallet" active={step === 1} done={step > 1} />
              <StepDot label="Link Platforms" active={step === 2} done={step > 2} />
              <StepDot label="Defaults" active={step === 3} done={false} />
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Wallet className="w-4 h-4" /> Connect your wallet
                </div>
                <Button className="gap-2 w-full sm:w-auto"><Wallet className="w-4 h-4" /> Connect Wallet</Button>
                <p className="text-xs text-muted-foreground">Authorize the extension to view your public address for donation conversions.</p>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm"><Link2 className="w-4 h-4" /> Link creator platforms</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <Button variant="secondary">Link Twitch</Button>
                  <Button variant="secondary">Link YouTube</Button>
                  <Button variant="secondary">Link Patreon</Button>
                </div>
                <p className="text-xs text-muted-foreground">You can add more platforms later in Options.</p>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm"><Chrome className="w-4 h-4" /> Set defaults</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <Label className="text-xs">Default Donation (USD)</Label>
                    <Input defaultValue={5} />
                  </div>
                  <div>
                    <Label className="text-xs">Stablecoin</Label>
                    <Input defaultValue="USDC" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" /> You're all set to donate seamlessly.
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <Button variant="outline" disabled={step === 1} onClick={() => setStep(s => (s > 1 ? (s - 1) as 1 | 2 | 3 : s))}>Back</Button>
            {step < 3 ? (
              <Button onClick={() => setStep(s => (s < 3 ? (s + 1) as 1 | 2 | 3 : s))}>Next</Button>
            ) : (
              <Button>Finish</Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function StepDot({ label, active, done }: { label: string; active: boolean; done: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`h-2.5 w-2.5 rounded-full ${done ? "bg-green-500" : active ? "bg-primary" : "bg-muted"}`} />
      <span className={`text-xs ${active ? "font-medium" : "text-muted-foreground"}`}>{label}</span>
    </div>
  );
}
