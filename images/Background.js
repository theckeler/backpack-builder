import ImagesLogo from "./logo";
export default function ImagesBackground({ className }) {
  return (
    <div
      className={`fixed left-2/4 top-1/4 -z-10 h-[100vw] w-[100vw] rotate-[22deg] ${className}`}
    >
      <ImagesLogo className="h-full w-full" />
    </div>
  );
}
