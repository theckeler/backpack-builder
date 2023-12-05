export default function WrapperFullScreen({
  className = null,
  children,
  onClick,
  id,
}) {
  return (
    <div
      className={`bg-neutral-600/40 pt-10 backdrop-blur-sm ${className}`}
      id={id}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
