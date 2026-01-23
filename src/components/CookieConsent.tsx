import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CookiePreferences {
  analytics: boolean;
  preferences: boolean;
  advertising: boolean;
}

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookiePrefs, setCookiePrefs] = useState<CookiePreferences>({
    analytics: false,
    preferences: false,
    advertising: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const saveConsent = (preferences: CookiePreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    localStorage.setItem("cookieConsentTimestamp", new Date().toISOString());
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      analytics: true,
      preferences: true,
      advertising: true,
    };
    setCookiePrefs(allAccepted);
    saveConsent(allAccepted);
  };

  const handleRefuseAll = () => {
    const allRefused = {
      analytics: false,
      preferences: false,
      advertising: false,
    };
    setCookiePrefs(allRefused);
    saveConsent(allRefused);
  };

  const handleAcceptSelected = () => {
    saveConsent(cookiePrefs);
  };

  const handleCheckboxChange = (key: keyof CookiePreferences) => {
    setCookiePrefs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Cookie settings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our website uses cookies which are necessary for running the website and for providing the services you request. We would also like to set the following optional cookies on your device. You can change these settings any time later by clicking "Change cookie settings" at the bottom of any page. For more information, please read our{" "}
            <a href="#" className="text-foreground underline font-medium hover:text-primary">
              Cookie Information.
            </a>
          </p>

          <div className="space-y-6">
            {/* Analytics */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="analytics"
                checked={cookiePrefs.analytics}
                onCheckedChange={() => handleCheckboxChange("analytics")}
                className="mt-1 h-5 w-5 rounded border-2 border-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <div className="space-y-1">
                <label
                  htmlFor="analytics"
                  className="text-sm font-semibold text-foreground cursor-pointer"
                >
                  Analytics
                </label>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We collect statistics to understand how many visitors we have, how our visitors interact with the site and how we can improve it. The collected data does not directly identify anyone.
                </p>
              </div>
            </div>

            {/* Preferences */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="preferences"
                checked={cookiePrefs.preferences}
                onCheckedChange={() => handleCheckboxChange("preferences")}
                className="mt-1 h-5 w-5 rounded border-2 border-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <div className="space-y-1">
                <label
                  htmlFor="preferences"
                  className="text-sm font-semibold text-foreground cursor-pointer"
                >
                  Preferences
                </label>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We store choices you have made so that they are remembered across visits in order to provide you a more personalized experience.
                </p>
              </div>
            </div>

            {/* Advertising and tracking */}
            <div className="flex items-start gap-3">
              <Checkbox
                id="advertising"
                checked={cookiePrefs.advertising}
                onCheckedChange={() => handleCheckboxChange("advertising")}
                className="mt-1 h-5 w-5 rounded border-2 border-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <div className="space-y-1">
                <label
                  htmlFor="advertising"
                  className="text-sm font-semibold text-foreground cursor-pointer"
                >
                  Advertising and tracking
                </label>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your browsing behavior is tracked across websites by advertising and social network service providers. You may see tailored advertising and content on other websites based on your browsing profile.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              variant="outline"
              onClick={handleAcceptSelected}
              className="rounded-full px-6 border-2 border-foreground text-foreground hover:bg-muted"
            >
              Accept selected
            </Button>
            <Button
              variant="outline"
              onClick={handleRefuseAll}
              className="rounded-full px-6 border-2 border-foreground text-foreground hover:bg-muted"
            >
              Refuse all
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="rounded-full px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
            >
              Accept all
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsent;
