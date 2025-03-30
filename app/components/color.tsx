"use client";

import React from "react";
import { toast, Toaster } from "sonner";

const Color = ({
  color,
  mode,
}: {
  color: { hex: string; rgb: string; hsl: string };
  mode?: string;
}) => {
  const handleClick = (clipboardColor: string) => {
    try {
      navigator.clipboard.writeText(clipboardColor);
      toast.success(`${clipboardColor} copied successfully`, {
        duration: 3000,
      });
    } catch (error) {
      toast.error(`Error when copying ${clipboardColor}`, { duration: 3000 });
      console.log(error);
    }
  };
  return (
    <div
      className="h-full w-full flex group transition-all items-center justify-center sm:select-none"
      style={{ backgroundColor: color.hex }}>
      <div className="h-max w-full items-center py-5 px-2 sm:px-5 flex flex-col gap-2">
        <div
          className={`text-base font-semibold cursor-pointer sm:opacity-0 group-hover:opacity-100 transition-all delay-150 ${
            mode === "dark" ? "text-foreground" : "text-background"
          }`}
          onClick={() => handleClick(color.hex)}>
          Hex: {color.hex}
        </div>
        <div
          className={`text-base font-semibold cursor-pointer sm:opacity-0 group-hover:opacity-100 transition-all delay-150 ${
            mode === "dark" ? "text-foreground" : "text-background"
          }`}
          onClick={() => handleClick(color.rgb)}>
          RGB: {color.rgb}
        </div>
        <div
          className={`text-base font-semibold cursor-pointer sm:opacity-0 group-hover:opacity-100 transition-all delay-150 ${
            mode === "dark" ? "text-foreground" : "text-background"
          }`}
          onClick={() => handleClick(color.hsl)}>
          HSL: {color.hsl}
        </div>
      </div>
      <Toaster position="bottom-right" duration={3000} />
    </div>
  );
};

export default Color;
