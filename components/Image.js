import Image from "next/image";

export default function VanImages({
  src,
  zoomLevel,
  loading,
  allImagesLoaded,
  className,
  priority = false,
}) {
  // const widths = [320, 640, 960, 1280, 1600, 2000];

  return (
    <Image
      className={`absolute left-0 top-0 h-full w-full object-cover lg:object-contain ${className}`}
      src={src}
      width={2000}
      height={1600}
      // srcSet={widths
      //   .map((width) => `${src}?width=${width} ${width}w`)
      //   .join(", ")}
      alt=""
      loading={loading}
      style={{ transform: `scale(${zoomLevel})` }}
      onLoad={allImagesLoaded}
      priority={priority}
    />
  );
}
