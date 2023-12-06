export default function VanImages({
  src,
  zoomLevel,
  loading,
  allImagesLoaded,
}) {
  // const widths = [320, 640, 960, 1280, 1600];

  return (
    <img
      className="absolute left-0 top-0 h-full w-full object-contain"
      src={src}
      // srcSet={widths
      //   .map((width) => `${src}?width=${width} ${width}w`)
      //   .join(", ")}
      alt=""
      loading={loading}
      style={{ transform: `scale(${zoomLevel})` }}
      onLoad={allImagesLoaded}
    />
  );
}
