"use client";
import { useState } from "react";

import VanBuilder from "@/components/VanBuilder";

export default function VanBuilderIndex() {
  const [vanPopup, setVanPopup] = useState(false);

  // const clickLaunch = () => {
  //   setVanPopup(true);
  // };

  return <VanBuilder />;

  // return vanPopup ? (
  //   <VanBuilder />
  // ) : (
  //   <WrapperRover>
  //     <div className="flex h-screen w-full items-center justify-center">
  //       <button
  //         className="bg-black px-10 py-2 text-white"
  //         onClick={clickLaunch}
  //       >
  //         LAUNCH VAN BUILDER
  //       </button>
  //     </div>
  //   </WrapperRover>
  // );
}
