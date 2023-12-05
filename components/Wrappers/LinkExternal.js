export default function WrapperLinkExternal({
  className = null,
  href,
  children,
}) {
  return (
    <a className={`underline ${className}`} href={href}>
      {children}
    </a>
  );
}
