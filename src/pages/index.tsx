import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, getDocs, collection } from 'firebase/firestore';
import Fuse from 'fuse.js';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ContentCard from '../components/organism/ContentCard';
import Footer from '../components/organism/Footer';
import Header from '../components/organism/Header';
import RankingCard from '../components/organism/RankingCard';
import Trend from '../components/organism/TrendLi';
import { List, videoKey2index, videoKeys } from '../constants/video/data';
import styles from '../styles/Home.module.css';

interface RankingElement {
  key: string;
  count: number;
}

const Home: NextPage = () => {
  // const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState<Array<Fuse.FuseResult<Content>>>([]);
  const [rankingDisp, setRankingDisp] = useState<Array<RankingElement>>([]);
  const ranking: Array<RankingElement> = [];
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    includeMatches: true,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.3,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,
    keys: ['song', 'songHira', 'singer', 'singerHira'],
  };
  const fuse = new Fuse(List, options);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyCmUnMiHUYcp39LRxYKq5zj1NJBbLqHFLE',
      authDomain: 'vbmusic-d6ea2.firebaseapp.com',
      projectId: 'vbmusic-d6ea2',
    };
    const app = initializeApp(firebaseConfig);

    const getDataFromFireStore = async () => {
      const db: Firestore = getFirestore(); // Firestore のインスタンスを初期化
      if (!db) {
        return;
      }
      const DB = await getDocs(collection(db, 'viewCounter'));
      DB.forEach((doc) => {
        console.log(doc.data());
        for (const k in doc.data()) {
          console.log(k, doc.data()[k]);
          ranking.push({ key: doc.id + k, count: doc.data()[k] });
        }
      });

      ranking.sort(function (a, b) {
        return a.count > b.count ? -1 : 1; //オブジェクトの昇順ソート
      });
      setRankingDisp(ranking.slice(0, 9));
    };

    getDataFromFireStore();
  }, []);

  const handleChange = async (event: { target: HTMLInputElement }) => {
    const pattern = event.target.value;

    setResult(fuse.search(pattern));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <i className='las la-search'></i>
      <i className='lab la-accessible-icon'></i>

      <Header />
      <main className={styles.main}>
        <div className='flex justify-center mt-2'>
          <div className='md:w-9/12 md:max-w-3xl w-full'>
            <div className='flex justify-center'>
              <div className='flex items-center border-2 rounded-md box-shadow w-full m-0 p-0 h-14'>
                <div className='material-icons text-4xl pl-1 pr-1'>search</div>
                <input
                  className='h-10 w-full border-none rounded-md outline-none bg-black'
                  onChange={handleChange}
                  placeholder='曲名・歌手名'
                />
              </div>
            </div>

            <div className='mt-6 md:h-96 h-80 overflow-scroll'>
              {result.length != 0 ? (
                result.map((elm, i) => (
                  <div key={i}>
                    <div key={i} className=''>
                      <ContentCard content={elm} />
                    </div>
                    <div className='border-b border-gray-300 mt-2 mb-2 w-full' />
                  </div>
                ))
              ) : (
                <div className='w-full h-full flex items-center justify-center'>
                  <div className='select-none'>
                    <div className='md:text-5xl text-2xl text-gray-600'>VB Music fuzzy search</div>
                    <div className='border-b-2 border-gray-600 mt-2 mb-2 w-full' />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-2'>
          <div className='md:w-11/12 md:max-w-7xl w-full'>
            <div className='text-3xl'>トレンドのやつ</div>
            <div className='mt-4'>
              <Trend contentList={rankingDisp} List={List} videoKey2index={videoKey2index}></Trend>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
