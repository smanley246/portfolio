/*
  * File: src/components/CustomButton.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: A reusable, stylized button component with pressable look
*/

import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

/**
 * Primary pill-style button
 * - Pressable (hover lift + active press)
 * - Matches existing chip aesthetic
 */
const CustomButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { y: -1 } : undefined}
      whileTap={!disabled ? { y: 1, scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={[
        // base shape
        "inline-flex items-center justify-center",
        "rounded-xl px-4 py-2",
        "text-sm font-medium text-white",

        // background + border
        "bg-white/10 border border-white/20",
        "backdrop-blur",

        // depth
        "shadow-[0_6px_14px_rgba(0,0,0,0.25)]",

        // hover
        "hover:bg-white/15 hover:border-white/30",

        // active (pressed)
        "active:shadow-[0_3px_8px_rgba(0,0,0,0.35)]",

        // disabled
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // smoothness
        "transition-colors",

        className,
      ].join(" ")}
    >
      {children}
    </motion.button>
  );
};

export default CustomButton;
