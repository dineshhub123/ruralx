import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ruralx.app',
  appName: 'ruralx',
  webDir: 'dist/ruralx',
  server:{
    url:"http://localhost",
  }
};

export default config;
