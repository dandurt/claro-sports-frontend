import Sochi from "components/pages/events/sochi";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SochiPage = () => <Sochi />;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "pages", "shared"])),
  },
});

export default SochiPage;
