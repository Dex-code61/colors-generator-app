"use client";

import { Button } from "@/components/ui/button";
import { GetColors } from "./actions/colors.actions";
import Color from "./components/color";
import { useEffect, useState } from "react";
import PopoverButton from "./components/popverButton";
import Loader from "./components/Loader";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState<
    { hex: string; rgb: string; hsl: string }[]
  >([]);
  const [details, setDetails] = useState<{ style: string; color: string }>(
    {} as { style: string; color: string }
  );
  const handleGenerateColors = async () => {
    setLoading(true);
    const colors = await GetColors({
      number: 3,
      mode: details?.style,
      hue: details?.color,
    });
    if (colors) setColors(colors);
    setLoading(false);
  };

  const getDetailsFromChild = (data: { style: string; color: string }) =>
    setDetails(data);

  useEffect(() => {
    handleGenerateColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (Array.isArray(colors) && colors.length === 0) {
    return (
      <div className="w-full absolute inset-0 min-h-full h-full max-h-full flex items-center justify-center">
        <Loader />
        <Button
          onClick={handleGenerateColors}
          className="absolute cursor-pointer sm:bottom-15 bottom-8 left-1/2 -translate-x-1/2"
          variant={"default"}
          size="default"
          disabled={loading}>
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={20} />{" "}
              <span>Await...</span>
            </div>
          ) : (
            "Generate colors"
          )}
        </Button>
      </div>
    );
  }
  if (!Array.isArray(colors)) {
    return (
      <div className="w-full absolute inset-0 min-h-full h-full max-h-full flex items-center justify-center">
        <span>Something went wrong please try again</span>
        <Button
          onClick={handleGenerateColors}
          className="absolute cursor-pointer sm:bottom-15 bottom-8 left-1/2 -translate-x-1/2"
          variant={"default"}
          size="default"
          disabled={loading}>
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={20} />{" "}
              <span>Await...</span>
            </div>
          ) : (
            "Generate colors"
          )}
        </Button>
      </div>
    );
  }
  return (
    <div className="w-full absolute inset-0 min-h-full h-full max-h-full grid grid-cols-1 sm:grid-cols-3">
      {colors.map(
        (color: { hex: string; rgb: string; hsl: string }, key: number) => (
          <Color key={key} color={color} mode={details?.style} />
        )
      )}
      <div className="flex absolute cursor-pointer sm:bottom-15 bottom-8 left-1/2 -translate-x-1/2 items-center gap-2">
        <PopoverButton sendDetailsToParent={getDetailsFromChild} />
        <Button
          onClick={handleGenerateColors}
          className=""
          variant={"default"}
          size="default"
          disabled={loading}>
          {loading ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={20} />{" "}
              <span>Await...</span>
            </div>
          ) : (
            "Generate colors"
          )}
        </Button>
      </div>
    </div>
  );
}
