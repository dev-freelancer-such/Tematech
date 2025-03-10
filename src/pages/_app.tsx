import { useMemo } from "react";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { appWithTranslation } from "next-i18next";

import UserLayout from "@/components/layouts";

import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  const Layout = useMemo(() => {
    return UserLayout;
  }, [pathname]);
  return (
    <div>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default appWithTranslation(App);
