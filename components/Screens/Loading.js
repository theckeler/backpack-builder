import { Icons } from "@/images/Icons";

export default function ScreenLoading({ vanChange }) {
  return (
    <div className="grid place-content-center justify-items-center rounded bg-neutral-800/70 p-[4vw] shadow-base">
      <Icons
        icon="progressactivity"
        className="h-16 w-16 animate-spin rounded-full bg-neutral-800 fill-amber-500 p-2"
      />

      <span className="animate-pulse text-[4vw] font-thin text-amber-400 shadow">
        loading
      </span>
    </div>
  );
}
