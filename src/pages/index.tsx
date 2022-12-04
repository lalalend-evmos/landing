import Head from 'next/head';
import Box from '@material-ui/core/Box';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Navbar from 'components/Navbar';
import Introduction from 'components/home/Introduction';
import Benefits from 'components/home/Benefits';
import Body from 'components/home/Body';
import Investors from 'components/home/Investors';
import TokenModel from 'components/home/TokenModel';
import Footer from 'components/Footer';
import PurchaseBanner from 'components/Banners/PurchaseBanner';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <meta name="description" content={t('siteDescription')} />
        <title>{t('siteTitle')}</title>
      </Head>
      <Box className="overflow-x-hidden bg-white-dark dark:bg-black text-white">
        <Navbar active="Home" />
        <Introduction />
        <Benefits />
        <Body />
        <TokenModel />
      </Box>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}
