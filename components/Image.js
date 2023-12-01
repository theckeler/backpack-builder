export default function VanImages({ src, zoomLevel, loading }) {
  return (
    <img
      className="absolute left-0 top-0 h-full w-full object-contain"
      src={src}
      alt=""
      loading="eager"
      style={{ transform: `scale(${zoomLevel})` }}
    />
  );
}
