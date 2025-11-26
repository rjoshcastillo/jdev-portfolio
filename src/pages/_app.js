import SplashScreen from "@/components/splash-screen";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  // const [showSlashScreen, setShowSlashScreen] = useState(true);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowSlashScreen(false);
  //   }, 3000);

  //   return () => clearTimeout(timeout);
  // }, []);

  // if (showSlashScreen) {
  //   return <SplashScreen />;
  // }
  return <Component {...pageProps} />;
}
