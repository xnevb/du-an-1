"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Chỉ hiển thị loading ngắn cho các trang con
    if (pathname !== "/") {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Loading cho lần đầu tải trang
  useEffect(() => {
    const handleLoad = () => {
      // Thời gian loading khác nhau cho trang chủ và trang con
      const loadingTime = pathname === "/" ? 3000 : 1500;

      setTimeout(() => {
        setIsLoading(false);
      }, loadingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [pathname]);

  return { isLoading, setIsLoading };
};
