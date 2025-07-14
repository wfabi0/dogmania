"use client";

import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-2xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-4 py-2";

const variantStyles = {
  primary: "bg-primary text-white border border-primary hover:bg-primary/90",
  secondary:
    "bg-zinc-100 text-primary border border-zinc-200 hover:bg-zinc-200",
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary/10",
};

export default function Button({
  children,
  onClick,
  className,
  variant = "primary",
  disabled = false,
  type = "button",
  href,
}: ButtonProps) {
  const classes = [
    baseStyles,
    variantStyles[variant],
    className,
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} tabIndex={disabled ? -1 : 0}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
