import { Icons } from "@/images/Icons";

export default function ScreenLoading({ vanChange }) {
  return (
    <div className="grid place-content-center justify-items-center rounded bg-neutral-800 p-[2vw] shadow-base">
      <div className="h-[12vw]">
        <Icons className="h-full w-full fill-amber-400" icon="hourglasstop" />
      </div>
      <span className="text-[4vw] font-thin text-amber-400 shadow">
        loading
      </span>
    </div>
  );
}
