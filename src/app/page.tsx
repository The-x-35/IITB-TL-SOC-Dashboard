"use client";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash ? (
        <SplashScreen onSplashEnd={() => setShowSplash(false)} />
      ) : (
        <>
        <Navbar />
        <div className="flex justify-center items-center h-screen bg-white">
          <h1 className="text-3xl">Main Page Content Here</h1>
        </div>
        </>
      )}
    </>
  );
}
