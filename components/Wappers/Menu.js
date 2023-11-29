"use client";

export default function WrapperMenu({ className = null, children }) {
  return (
    <div className={`bg-neutral-100/20 shadow-inner backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}
