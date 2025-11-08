export default function MyApp({ Component, pageProps }) {
  // Import global CSS here (Next.js requires it in _app)
  return <Component {...pageProps} />;
}

// Import AFTER the export to avoid Next.js fast-refresh edge cases
import "../styles/globals.css";
