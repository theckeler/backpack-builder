export default function WrapperFullScreen({
  className = null,
  children,
  onClick,
  id,
}) {
  return (
    <div
      className={`absolute bottom-0 left-0 z-20 h-full w-full bg-neutral-100/10 pt-10 ${className}`}
      id={id}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
