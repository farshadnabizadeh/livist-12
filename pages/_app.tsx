import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, createTheme } from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import { Vazirmatn } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AuthProvider } from "@/contexts/NestAuthContext";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
// import '@mantine/form/styles.css'
// import 'swiper/css';
import 'swiper/swiper-bundle.css'
import { UserProfileProvider } from "@/contexts/UserProfileContext";
import Logoutmodal from "@/components/LogoutModal/Logoutmodal";
import { Notifications } from '@mantine/notifications';

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};


const theme = createTheme({
  /** Put your mantine theme override here */
});


function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <AuthProvider>
        <UserProfileProvider>
          <Head>
            <title>Livist Sigorta</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin={"anonymous"}
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            ></link>
          </Head>
          <MantineProvider
          // withGlobalStyles
          // withNormalizeCSS
          // theme={{
          //   /** Put your mantine theme override here */
          //   colorScheme: 'light',
          // }}
          >
            <Notifications limit={3}/>
            <Logoutmodal />
            {getLayout(
              <main className={`${vazirmatn.variable} min-h-[95vh]`}>
                <Component {...pageProps} />
              </main>
            )}
          </MantineProvider>
        </UserProfileProvider>
      </AuthProvider>
    </>
  );
}

export default appWithTranslation(App);
