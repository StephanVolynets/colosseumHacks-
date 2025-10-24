import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { MainDashboard } from "./MainDashboard";
import ExtensionPopupUI from "./ExtensionPopupUI";

interface HomeProps {
  className?: string;
}

export default function Home({ className }: HomeProps) {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className={className}>
      {!showDashboard ? (
        <HeroSection onGetStarted={() => setShowDashboard(true)} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
          <MainDashboard />
          <ExtensionPopupUI />
        </div>
      )}
    </div>
  );
}