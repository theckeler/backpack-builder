export default function ScreenLoading({ vanChange }) {
  return (
    <div className="grid place-content-center justify-items-center rounded bg-neutral-800/70 p-[4vw] shadow-base">
      <ul className="grid grid-cols-1 items-center gap-6">
        <li className="h-16 w-8 animate-bounce rounded-full bg-amber-500 delay-150"></li>
      </ul>
      <span className="animate-pulse text-[4vw] font-thin text-amber-400 shadow">
        loading
      </span>
    </div>
  );
}
