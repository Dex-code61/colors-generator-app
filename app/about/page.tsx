import { ArrowUpRight } from "lucide-react";
import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "../components/navBar";

export default function About() {
  return (
    <div className="w-full h-full max-h-full px-5 flex flex-col items-center">
      <div className="w-full py-12 flex items-center flex-col gap-2">
        <div className="w-20 aspect-square relative border border-border rounded-full overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all delay-150 cursor-pointer">
          <Image
            src={"https://github.com/Dex-code61.png"}
            objectFit="cover"
            alt="about"
            layout="fill"
            className=""
          />
        </div>
        <h1
          className="text-base text-muted-foreground font-medium flex items-center gap-1"
          translate="no"
        >
          <Link
            href={"https://github.com/Dex-code61"}
            className="flex items-center gap-1 cursor-pointer select-none hover:text-foreground transition-all delay-150"
          >
            <span>Dex-code61</span>
            <ArrowUpRight size={24} />
          </Link>
        </h1>
      </div>
      <div className="w-full text-muted-foreground text-center mb-5 px-5 sm:w-3/4 mx-auto">
        <h1 className="font-normal text-base text-foreground underline">
          About Colors Generator
        </h1>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Creating beautiful color palettes made easy! <br />
          Hi, I&apos;m{" "}
          <Link
            href="https://www.github.com/Dex-code61/colors-generator-app"
            className="text-foreground hover:text-primary delay-150"
          >
            Deodat aka Dex-code61
          </Link>{" "}
          , the creator of Colors Generator. I&apos;m a passionate web developer
          with a love for design and color theory. This project is a way for me
          to combine my skills in coding with my passion for beautiful design.
        </p>
      </div>
      <div className="w-full text-muted-foreground text-center mb-5 px-5 sm:w-3/4 mx-auto">
        <h1 className="font-normal text-base text-foreground underline">
          How i built this ?
        </h1>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Colors Generator is built using{" "}
          <Link
            className="text-foreground hover:text-primary delay-150"
            href="https://www.nextjs.org"
          >
            Next.js
          </Link>
          ,a React-based framework that allows for fast and dynamic web
          development. The color palette generation is done using{" "}
          <Link
            className="text-foreground hover:text-primary delay-150"
            href="https://github.com/cheatsnake/xColors-api"
          >
            xColors-api
          </Link>{" "}
          i have view on{" "}
          <Link
            className="text-foreground hover:text-primary delay-150"
            href="https://www.github.com/Dex-code61"
          >
            Github
          </Link>{" "}
          that ensures you get visually appealing color combinations every time.
        </p>
      </div>
      <NavLinks />
    </div>
  );
}
