"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Option } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PopoverButton = ({
  sendDetailsToParent,
}: {
  sendDetailsToParent: (data: { style: string; color: string }) => void;
}) => {
  const [style, setStyle] = useState("dark");
  const [color, setColor] = useState("all");

  const handleStyle = (value: string) => {
    setStyle(value);
    sendDetailsToParent({ style: value, color });
  };
  const handleColor = (value: string) => {
    setColor(value);
    sendDetailsToParent({ style, color: value });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default" size="icon">
          <Option size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-max w-80 gap-5">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="w-full mt-5 h-full flex flex-col items-start gap-3">
          <Select onValueChange={(value) => handleStyle(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Style (dark / light)" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Style</SelectLabel>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="light">Light</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => handleColor(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Color reference" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Ref.</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="purple">Purple</SelectItem>
                <SelectItem value="yellow">Yellow</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverButton;
