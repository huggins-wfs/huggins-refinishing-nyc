// Background-image photo with a warm wood-tone fallback.
// Drop real photography into /public/images using the filenames referenced on the homepage;
// until a file exists, the fallback gradient renders in its place.

const tones = {
  oak: ["#B89268", "#8A6743"],
  smoked: ["#6B5440", "#3E3026"],
  white: ["#E6DCCB", "#C9B9A0"],
  walnut: ["#7A5638", "#4A3322"],
  ash: ["#D2C3A8", "#A89272"],
  ebony: ["#3A2E26", "#1E1814"],
};

export default function Photo({ src, alt, tone = "oak", className = "", children }) {
  const [a, b] = tones[tone] || tones.oak;
  const grain =
    "repeating-linear-gradient(92deg, rgba(0,0,0,0.035) 0 2px, transparent 2px 9px, rgba(255,255,255,0.04) 9px 10px, transparent 10px 23px)";
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src}), ${grain}, linear-gradient(135deg, ${a}, ${b})` }}
    >
      {children}
    </div>
  );
}
