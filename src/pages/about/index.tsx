import { table } from 'console';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '../../components/organism/Header';
import styles from '../../styles/Home.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <Header />
        <div className='mt-10'>VBのヘルパーが作った非公式のサイトです。</div>
        <div>
          2023/5/30 なんでもリクエストされたら歌ってみせるVBの三味線ライブ2023初夏
          までの曲が収録されています。
        </div>
        <div className='mt-4'>新たに三味線ライブが開催されれば随時曲を追加していきます。</div>
        <div>曲名に間違いなどあれば下のtwitter経由で教えていただけるとありがたいです。</div>
        <div className='mt-10'>
          <span className='mr-4'>つくった人 🧑‍💻 </span>
          <a className='underline text-gray-400' href='https://twitter.com/KK_sep_TT'>
            @KK_sep_TT
          </a>
        </div>
        <div className='mt-4'>
          <Link href='/'>
            <a className='underline text-gray-400'>Topにもどる</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;
