// Background-image photo (or looping video) with a warm wood-tone fallback.
// Until an image loads, the fallback gradient renders in its place.

const tones = {
  oak: ["#B89268", "#8A6743"],
  smoked: ["#6B5440", "#3E3026"],
  white: ["#E6DCCB", "#C9B9A0"],
  walnut: ["#7A5638", "#4A3322"],
  ash: ["#D2C3A8", "#A89272"],
  ebony: ["#3A2E26", "#1E1814"],
};

export default function Photo({ src, video, alt, tone = "oak", position = "center", className = "", children }) {
  const [a, b] = tones[tone] || tones.oak;
  const grain =
    "repeating-linear-gradient(92deg, rgba(0,0,0,0.035) 0 2px, transparent 2px 9px, rgba(255,255,255,0.04) 9px 10px, transparent 10px 23px)";
  const layers = [src && `url("${src}")`, grain, `linear-gradient(135deg, ${a}, ${b})`].filter(Boolean).join(", ");
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden bg-cover ${className}`}
      style={{ backgroundImage: layers, backgroundPosition: position }}
    >
      {video && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          poster={src}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
