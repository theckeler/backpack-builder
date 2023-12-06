export default function WrapperFullScreen({
  className = null,
  children,
  onClick,
  id,
  bgColor = true,
  blur = true,
}) {
  return (
    <div
      className={`${bgColor ? "bg-neutral-600/40" : ""} pt-10 ${
        blur ? "backdrop-blur-sm" : ""
      } ${className}`}
      id={id}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
