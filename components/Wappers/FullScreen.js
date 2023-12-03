export default function WrapperFullScreen({
  className = null,
  children,
  onClick,
  id,
}) {
  return (
    <div
      className={`absolute bottom-0 left-0 z-20 h-full w-full bg-neutral-600/40 pt-10 backdrop-blur-sm ${className}`}
      id={id}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
