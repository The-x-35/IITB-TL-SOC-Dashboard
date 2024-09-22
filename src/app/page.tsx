"use client";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashShown = localStorage.getItem("splashShown");
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashEnd = () => {
    localStorage.setItem("splashShown", "true");
    setShowSplash(false);
  };

  return (
    <>
      {showSplash ? (
        <SplashScreen onSplashEnd={handleSplashEnd} />
      ) : (
        <>
          <Navbar />
          <div className="pt-28 flex justify-center items-start bg-white overflow-auto h-screen">
            <MainPage />
          </div>
        </>
      )}
    </>
  );
}
