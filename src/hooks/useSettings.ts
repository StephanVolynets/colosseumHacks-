import { useState, useCallback } from "react";
import { Settings, RecurringDonation, DonationThreshold, Platform, StablecoinType } from "@/types/donation";

const DEFAULT_SETTINGS: Settings = {
  defaultPlatform: "twitch",
  preferredStablecoins: ["usdc", "usdt"],
  autodonationEnabled: false,
  recurringDonations: [],
  donationThresholds: [],
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  const updateDefaultPlatform = useCallback((platform: Platform) => {
    setSettings((prev) => ({ ...prev, defaultPlatform: platform }));
  }, []);

  const updatePreferredStablecoins = useCallback((stablecoins: StablecoinType[]) => {
    setSettings((prev) => ({ ...prev, preferredStablecoins: stablecoins }));
  }, []);

  const toggleAutoDonation = useCallback((enabled: boolean) => {
    setSettings((prev) => ({ ...prev, autodonationEnabled: enabled }));
  }, []);

  const addRecurringDonation = useCallback((donation: Omit<RecurringDonation, "id">) => {
    const newDonation: RecurringDonation = {
      ...donation,
      id: `recurring${Date.now()}`,
    };
    setSettings((prev) => ({
      ...prev,
      recurringDonations: [...prev.recurringDonations, newDonation],
    }));
    return newDonation;
  }, []);

  const removeRecurringDonation = useCallback((id: string) => {
    setSettings((prev) => ({
      ...prev,
      recurringDonations: prev.recurringDonations.filter((d) => d.id !== id),
    }));
  }, []);

  const addDonationThreshold = useCallback((threshold: Omit<DonationThreshold, "id">) => {
    const newThreshold: DonationThreshold = {
      ...threshold,
      id: `threshold${Date.now()}`,
    };
    setSettings((prev) => ({
      ...prev,
      donationThresholds: [...prev.donationThresholds, newThreshold],
    }));
    return newThreshold;
  }, []);

  const removeDonationThreshold = useCallback((id: string) => {
    setSettings((prev) => ({
      ...prev,
      donationThresholds: prev.donationThresholds.filter((t) => t.id !== id),
    }));
  }, []);

  return {
    settings,
    updateDefaultPlatform,
    updatePreferredStablecoins,
    toggleAutoDonation,
    addRecurringDonation,
    removeRecurringDonation,
    addDonationThreshold,
    removeDonationThreshold,
  };
};
