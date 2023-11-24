"use client";

import { Icons } from "@/images/Icons";

export default function MenuButton({ menu, menuChange, className }) {
  return (
    <button
      className={className}
      onClick={() => {
        menuChange({ open: !menu.open });
      }}
    >
      <Icons icon="hamburger" className="h-full w-full fill-white" />
    </button>
  );
}
