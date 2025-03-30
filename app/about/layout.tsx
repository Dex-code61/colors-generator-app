import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colors palette generator - about",
  description: "A colors generator app description",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-full">{children}</div>;
}
