import { Fraunces } from "next/font/google";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Head from "next/head";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

type BaseLayoutProps = React.PropsWithChildren<{}>;

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <SEO />
      </Head>

      <div
        className={`${fraunces.variable} ${inter.variable} font-body mx-auto font-medium text-black/[0.75]`}
      >
        <Header />
        {children}

        <Footer />
      </div>
    </>
  );
}
