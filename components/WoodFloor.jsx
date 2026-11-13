import { useId } from "react";

/**
 * Draws a wood floor as SVG: no photographs needed, and it weighs a few KB.
 * pattern: plank | herringbone | chevron | basket
 * tone:    key of TONES        width: narrow | medium | wide
 */
export const TONES = {
  nordic: { name: "Nordic White", h: 38, s: 22, l: 78 },
  natural: { name: "Natural Oak", h: 34, s: 38, l: 62 },
  honey: { name: "Honey", h: 30, s: 52, l: 50 },
  smoked: { name: "Smoked Oak", h: 28, s: 26, l: 36 },
  walnut: { name: "Walnut", h: 22, s: 36, l: 27 },
  ebony: { name: "Ebony", h: 24, s: 14, l: 15 },
};
export const PATTERNS = {
  plank: { name: "Wide Plank", waste: 8 },
  herringbone: { name: "Herringbone", waste: 15 },
  chevron: { name: "Chevron", waste: 15 },
  basket: { name: "Basketweave", waste: 12 },
};
export const WIDTHS = { narrow: { name: "Narrow", u: 30 }, medium: { name: "Medium", u: 42 }, wide: { name: "Wide", u: 58 } };

const W = 800;
const H = 600;

// Integer hash: identical on server and in every browser, so no hydration drift.
function rnd(a, b) {
  let h = Math.imul(a | 0, 374761393) ^ Math.imul(b | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
const fill = (t, a, b) => {
  const r = rnd(a, b);
  return `hsl(${t.h + Math.round((r - 0.5) * 6)} ${t.s}% ${(t.l + (r - 0.5) * 11).toFixed(1)}%)`;
};

function build(pattern, u, t) {
  const hz = []; // boards with grain running along x
  const vt = []; // boards with grain running along y
  const R = 520;
  if (pattern === "herringbone") {
    const L = u * 4;
    for (let k = -Math.ceil(R / u); k <= Math.ceil(R / u); k++)
      for (let m = -4; m <= 4; m++) {
        const x = k * u + 2 * L * m;
        const y = k * u;
        if (Math.hypot(x + L / 2, y + u / 2) < R + L)
          hz.push(<rect key={`h${k}_${m}`} x={x} y={y} width={L} height={u} fill={fill(t, k, m)} />);
        if (Math.hypot(x - u / 2, y + L / 2) < R + L)
          vt.push(<rect key={`v${k}_${m}`} x={x - u} y={y} width={u} height={L} fill={fill(t, k + 99, m)} />);
      }
  } else if (pattern === "basket") {
    const n = 3;
    const S = u * n;
    for (let i = -1; i <= W / S; i++)
      for (let j = -1; j <= H / S; j++)
        for (let s = 0; s < n; s++) {
          const key = `${i}_${j}_${s}`;
          if ((i + j) % 2 === 0) hz.push(<rect key={key} x={i * S} y={j * S + s * u} width={S} height={u} fill={fill(t, i * 7 + s, j)} />);
          else vt.push(<rect key={key} x={i * S + s * u} y={j * S} width={u} height={S} fill={fill(t, i, j * 7 + s)} />);
        }
  } else if (pattern === "plank") {
    const bh = u * 1.5;
    for (let j = 0; j * bh < H; j++) {
      let x = -rnd(j, 5) * 500;
      for (let i = 0; x < W; i++) {
        const len = 380 + rnd(j, i) * 420;
        hz.push(<rect key={`${j}_${i}`} x={x} y={j * bh} width={len} height={bh} fill={fill(t, j * 13 + i, 3)} />);
        x += len;
      }
    }
  }
  return { hz, vt };
}

function Chevron({ u, t, grain }) {
  const c = u * 3.2; // column width
  const cols = [];
  for (let i = -1; i * c < W; i++) {
    const dir = i % 2 === 0 ? 1 : -1;
    const rows = [];
    for (let j = -Math.ceil(c / u) - 1; j * u < H + c; j++)
      rows.push(<rect key={j} x={0} y={j * u} width={c} height={u} fill={fill(t, i, j)} />);
    cols.push(
      <g key={i} transform={`translate(${i * c} ${dir === 1 ? 0 : c}) skewY(${dir * 45})`} filter={grain}>
        {rows}
      </g>
    );
  }
  return cols;
}

export default function WoodFloor({ pattern = "herringbone", tone = "natural", width = "medium", sheen = "matte", label, className = "" }) {
  const id = useId().replace(/:/g, "");
  const t = TONES[tone] || TONES.natural;
  const u = (WIDTHS[width] || WIDTHS.medium).u;
  const lite = t.l < 20; // near-black woods get a pale grain, everything else a dark one
  const { hz, vt } = pattern === "chevron" ? { hz: [], vt: [] } : build(pattern, u, t);
  const rotate = pattern === "herringbone" ? `translate(${W / 2} ${H / 2}) rotate(45)` : undefined;
  const Grain = ({ gid, freq }) => (
    <filter id={gid} x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency={freq} numOctaves="3" seed="7" result="n" />
      <feColorMatrix in="n" type="matrix" values={`0 0 0 0 ${lite ? 1 : 0}  0 0 0 0 ${lite ? 0.92 : 0}  0 0 0 0 ${lite ? 0.8 : 0}  0 0 0 ${lite ? 0.28 : 0.42} -0.1`} result="g" />
      <feComposite in="g" in2="SourceGraphic" operator="in" result="gi" />
      <feMerge><feMergeNode in="SourceGraphic" /><feMergeNode in="gi" /></feMerge>
    </filter>
  );
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={label || `${PATTERNS[pattern]?.name} wood floor in ${t.name}`} className={className}>
      <defs>
        <Grain gid={`${id}h`} freq="0.006 0.22" />
        <Grain gid={`${id}v`} freq="0.22 0.006" />
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity={sheen === "satin" ? 0.3 : 0.1} />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity={sheen === "satin" ? 0.3 : 0.2} />
        </linearGradient>
      </defs>
      <rect width={W} height={H} fill={`hsl(${t.h} ${t.s}% ${t.l}%)`} />
      <g stroke={`hsl(${t.h} ${t.s}% ${Math.max(t.l - 22, 4)}%)`} strokeOpacity="0.55" strokeWidth="1.2">
        {pattern === "chevron" ? (
          <Chevron u={u} t={t} grain={`url(#${id}h)`} />
        ) : (
          <g transform={rotate}>
            <g filter={`url(#${id}h)`}>{hz}</g>
            <g filter={`url(#${id}v)`}>{vt}</g>
          </g>
        )}
      </g>
      <rect width={W} height={H} fill={`url(#${id}s)`} />
    </svg>
  );
}
