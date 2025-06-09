"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLoading } from "@lib/hooks/useLoading";
import Loading from "./Loading";
import SplashScreen from "./SplashScreen";
import { useState, useEffect } from "react";

const LoadingWrapper = ({ children }) => {
  const { isLoading, setIsLoading } = useLoading();
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Chỉ hiển thị splash screen cho trang chủ và lần đầu tải
    if (pathname === "/" && !sessionStorage.getItem("splashShown")) {
      setShowSplash(true);
      sessionStorage.setItem("splashShown", "true");
    }
  }, [pathname]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && pathname === "/" && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isLoading && !showSplash && <Loading key="loading" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && !showSplash && (
          <div key="content">
            {children}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LoadingWrapper;
