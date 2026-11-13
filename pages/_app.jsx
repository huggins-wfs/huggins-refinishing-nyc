import "../styles/globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${display.variable} ${sans.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
