import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BaseLayout from "@/components/BaseLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout {...pageProps}>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
