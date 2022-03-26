import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className='flex flex-rows p-2 bg-red-500 text-white font-bold'>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
