"use client";

import { Icons } from "@/images/Icons";
import ButtonWrapper from "./index";

export default function ButtonMenu({ menu, menuChange, className }) {
  return (
    <ButtonWrapper
      className={className}
      onClick={() => {
        menuChange({ open: !menu.open });
      }}
    >
      <Icons icon={menu.open ? "close" : "hamburger"} />
    </ButtonWrapper>
  );
}
