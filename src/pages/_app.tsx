import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        defaultTitle='VB Music'
        canonical='' //ここにurl
        description='バーチャルおばあちゃんの三味線ライブの曲を検索！'
        openGraph={{
          type: 'website',
          title: 'VB Music',
          description: 'バーチャルおばあちゃんの三味線ライブの曲を検索',
          site_name: 'VB Music',
          url: '',
          images: [
            {
              url: '/image/main/home.JPG',
              width: 800,
              height: 600,
              alt: 'VB Music',
            },
          ],
        }}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
