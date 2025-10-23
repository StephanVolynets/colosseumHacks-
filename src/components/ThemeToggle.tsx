import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-yellow-500" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-purple-600 data-[state=unchecked]:bg-yellow-400"
      />
      <Moon className="h-4 w-4 text-purple-400" />
    </div>
  );
};