export default function WrapperMenu({ className, children }) {
  return (
    <div
      className={`w-full bg-neutral-100/20 shadow-inner backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
