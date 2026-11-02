/*
  * File: src/components/CustomButton.tsx
  * Author: Samuel Manley
  * Last Modified: February 1st, 2026
  *
  * Description: A reusable, stylized button component.
*/

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

type ButtonProps =
  | (CommonProps & {
      to: string;
      href?: never;
      onClick?: never;
      target?: never;
      rel?: never;
      download?: never;
      type?: never;
    })
  | (CommonProps & {
      href: string;
      target?: string;
      rel?: string;
      download?: boolean;
      onClick?: never;
      type?: never;
    })
  | (CommonProps & {
      onClick?: () => void;
      type?: "button" | "submit" | "reset";
      href?: never;
      target?: never;
      rel?: never;
      download?: never;
    });

const buttonClassName = (className: string, disabled: boolean) =>
  [
    "surface-control inline-flex items-center justify-center gap-2",
    "min-h-11 rounded-full px-5 py-2.5",
    "text-sm font-semibold tracking-[0.01em] text-white",
    disabled ? "cursor-not-allowed opacity-50" : "",
    className,
  ].join(" ");

const CustomButton: React.FC<ButtonProps> = (props) => {
  const reduceMotion = useReducedMotion();
  const className = buttonClassName(props.className ?? "", props.disabled ?? false);

  if ("to" in props && props.to !== undefined) {
    return <Link to={props.to} className={className}>{props.children}</Link>;
  }

  if ("href" in props && props.href !== undefined) {
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        download={props.download}
        whileHover={!props.disabled && !reduceMotion ? { y: -2 } : undefined}
        whileTap={!props.disabled && !reduceMotion ? { y: 1, scale: 0.985 } : undefined}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
        className={className}
        aria-disabled={props.disabled ? true : undefined}
      >
        {props.children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      whileHover={!props.disabled && !reduceMotion ? { y: -2 } : undefined}
      whileTap={!props.disabled && !reduceMotion ? { y: 1, scale: 0.985 } : undefined}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className={className}
    >
      {props.children}
    </motion.button>
  );
};

export default CustomButton;
