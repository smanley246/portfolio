import { useEffect } from "react";
import { scrollToId } from "../utils/scrollToId";

export function useHashScroll() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => scrollToId(id), 100);
    }
  }, []);
}