import { useEffect } from "react";
import { Home } from "lucide-react";
import { scrollToId } from "../utils/scrollToId";

export function useDevSmokeTests() {
  useEffect(() => {
    try {
      console.assert(typeof Home === "function", "[TEST] lucide-react Home icon should be a component");
      const ids = ["home", "about", "projects", "education", "experience"] as const;
      console.assert(new Set(ids).size === ids.length, "[TEST] Section ids must be unique");
      scrollToId("__nonexistent__");
    } catch (e) {
      console.warn("[TEST] Dev smoke tests threw", e);
    }
  }, []);
}