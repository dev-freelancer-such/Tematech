import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

import Main from "@/modules/home";

export default function Home() {
  return <Main />;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || "en";
  const translate = await serverSideTranslations(locale, ["common", "home"]);

  return {
    props: {
      ...translate,
    },
  };
};
