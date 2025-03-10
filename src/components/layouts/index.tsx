import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Typography } from "../ui/typography";

import Header from "./Header";
import Footer from "./Footer";
import { BackToTop } from "../ui/back-to-top";

interface IUserLayoutProps {
  children: React.ReactNode;
  description: string | "";
  title: string | "";
  keywords: string | "";
}

export default function UserLayout(props: IUserLayoutProps) {
  const { children, description, title = "TEMA Tech", keywords } = props;
  const { t } = useTranslation("common");

  const router = useRouter();

  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
        />

        {/* Google / Search Engine Tags */}
        <meta itemProp='name' content={title} />
        <meta itemProp='description' content={description} />

        {/*Facebook Meta Tags  */}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='card_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
      </Head>
      <Header />
      <main className='min-h-screen'>{children}</main>
      <BackToTop />
      <Footer />
      <div className='bg-primary flex justify-center pt-[30px] pb-7'>
        <Typography variant='h4'>{t("copryright")}</Typography>
      </div>
    </section>
  );
}
