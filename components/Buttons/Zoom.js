"use client";

import { Icons } from "@/images/Icons";
import ButtonWrapper from "./index";

export default function ButtonZoom({
  zoom,
  handleZoomChange,
  changeZoom,
  zoomLevel,
}) {
  return (
    <>
      {zoom && (
        <div className="fixed bottom-0 left-0 z-50 flex h-full w-full items-end  bg-neutral-200/50  pt-10 shadow-inner">
          {/* <div className="mb-1 w-full text-center text-sm font-bold">Zoom:</div> */}
          <div className="backdrop-blur-s4 w-full bg-white/50 p-6 pb-20">
            <input
              className="w-full"
              type="range"
              id="zoom"
              name="zoom"
              min={0.5}
              max={2}
              step={0.1}
              value={zoomLevel}
              onChange={(e) => {
                changeZoom(e.currentTarget.value);
              }}
            />
          </div>
        </div>
      )}
      <ButtonWrapper
        className={
          zoom
            ? "relative z-50 bg-sky-500 fill-black shadow-inner"
            : "bg-neutral-700 lg:hover:bg-amber-500"
        }
        onClick={handleZoomChange}
      >
        <Icons
          icon={zoom ? "close" : "zoom"}
          className={`
          h-12 w-12 rounded-xl p-2 
            ${zoom ? "fill-black" : "fill-neutral-100 "}
          `}
        />
      </ButtonWrapper>
    </>
  );
}
