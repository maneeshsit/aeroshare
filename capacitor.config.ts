
import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'app.lovable.d89c36dc42f44b7f89e418ce5ba8f77f',
  appName: 'aeroshare',
  webDir: 'dist',
  server: {
    url: 'https://d89c36dc-42f4-4b7f-89e4-18ce5ba8f77f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      showSpinner: false
    }
  }
};

export default config;
