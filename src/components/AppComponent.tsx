import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { MainDashboard } from "./MainDashboard";
import { ChromeExtensionGuide } from "./ChromeExtensionGuide";
import { ThemeProvider } from "@/hooks/useTheme";

interface AppComponentProps {
  className?: string;
}

export const AppComponent = ({ className = "" }: AppComponentProps) => {
  const [currentView, setCurrentView] = useState<"hero" | "dashboard" | "guide">("hero");

  const handleGetStarted = () => {
    setCurrentView("dashboard");
  };

  const handleShowGuide = () => {
    setCurrentView("guide");
  };

  const handleBackToHero = () => {
    setCurrentView("hero");
  };

  const handleBackToDashboard = () => {
    setCurrentView("dashboard");
  };

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
        {currentView === "hero" && (
          <HeroSection onGetStarted={handleGetStarted} />
        )}
        
        {currentView === "dashboard" && (
          <MainDashboard />
        )}
        
        {currentView === "guide" && (
          <ChromeExtensionGuide onBack={handleBackToDashboard} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default AppComponent;