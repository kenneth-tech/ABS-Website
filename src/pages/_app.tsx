import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, Cinzel, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import Layout from "@/components/Layout";
import LoadingScreen from "@/components/LoadingScreen";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cormorant",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${raleway.variable} ${cinzel.variable} ${cormorant.variable} ${greatVibes.variable} font-sans`}
    >
      <LoadingScreen />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
