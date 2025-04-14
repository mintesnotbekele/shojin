// components/ui/MenuButton.tsx
"use client";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function MenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="text-2xl md:hidden text-light focus:outline-none"
      aria-label="Toggle Menu"
    >
      <HiOutlineMenuAlt3 />
    </button>
  );
}