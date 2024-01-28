import Sochi from "components/pages/events/sochi";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SochiPage = () => <Sochi />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "pages"])),
  },
});

export default SochiPage;
