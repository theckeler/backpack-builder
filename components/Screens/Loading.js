
import { Icons } from "@/images/Icons";

export default function Loading({ vanChange }) {
  return (
    <div className="place-content-centerrounded grid justify-items-center bg-neutral-800 p-[2vw]">
      <div className="h-[16vw]">
        <Icons className="h-full w-full fill-amber-400" icon="hourglasstop" />
      </div>
      <span className="text-[4vw] font-thin text-amber-400 shadow">
        loading
      </span>
    </div>
  );
}
