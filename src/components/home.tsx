import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { MainDashboard } from "./MainDashboard";

interface HomeProps {
  className?: string;
}

export default function Home({ className }: HomeProps) {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return (
      <div className={className}>
        <MainDashboard />
      </div>
    );
  }

  return (
    <div className={className}>
      <HeroSection onGetStarted={() => setShowDashboard(true)} />
    </div>
  );
}