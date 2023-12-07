import { Icons } from "@/images/Icons";

export default function WrapperLinkExternal({
  className = null,
  href,
  children,
}) {
  return (
    <a
      className={`group flex items-center underline hover:text-amber-500 ${className}`}
      href={href}
    >
      {children}{" "}
      <Icons
        icon="link"
        className="ml-2 w-8 rounded group-hover:fill-amber-500 "
      />
    </a>
  );
}
