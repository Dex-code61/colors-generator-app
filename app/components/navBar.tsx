import { Palette } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex z-50 bg-background justify-between items-center w-full px-5 py-2">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Palette className="text-primary" size={24} />
          <h1 className="text-foreground text-base font-normal">
            Colors Generator
          </h1>
        </div>
      </Link>

      <NavLinks />
    </div>
  );
};

export default NavBar;

export const NavLinks = () => {
  return (
    <div className="flex items-center gap-1">
      <Link
        href="/"
        className="text-base text-muted-foreground hover:text-foreground transition-colors">
        Home /
      </Link>
      <Link
        href="/about"
        className="text-base text-muted-foreground hover:text-foreground transition-colors">
        About /
      </Link>
      <Link
        href="https://www.github.com/Dex-code61"
        className="text-base text-muted-foreground  hover:text-foreground transition-colors">
        Github
      </Link>
    </div>
  );
};
