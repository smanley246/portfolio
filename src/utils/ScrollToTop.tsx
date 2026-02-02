/*
  * File: src/utils/ScrollToTop.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: Utility component to scroll to the top of the page on route change.
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // change to "smooth" if you want animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
