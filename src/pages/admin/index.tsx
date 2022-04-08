import { table } from 'console';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const getHira = async (text: string) => {
  console.log(text);
  if (text == undefined || text == '') return '';
  const axios = require(`axios`);
  const APIKEY = `0600b69daaa7e055a90f1b1ed767db31110c480ee72e5d51552348f747aa8934`; //API KEY
  const BASE_URL = `https://labs.goo.ne.jp/api/hiragana`;
  const OUTPU_TYPE = `hiragana`; //or `katakana` or `hiragana`

  const options = {
    method: 'post',
    url: BASE_URL,
    headers: {
      'Content-Type': `application/json`,
    },
    data: {
      app_id: APIKEY,
      sentence: '',
      output_type: OUTPU_TYPE,
    },
  };
  const res = await axios.post('https://labs.goo.ne.jp/api/hiragana', {
    app_id: APIKEY,
    sentence: text,
    output_type: 'hiragana',
  });
  return res.data.converted.replace(/ /g, '');
};

const Admin: NextPage = () => {
  const [baseUrl, setBaseUrl] = useState('');
  const [result, setResult] = useState<Array<Content>>([]);

  const baseUrlChange = async (event: { target: HTMLInputElement }) => {
    setBaseUrl(event.target.value);
  };

  // ベーシック
  const handleChange1 = async (event: { target: HTMLTextAreaElement }) => {
    // prm //
    const title = 'バーチャルおばあちゃんのクリスマス三味線ライブ';
    const date = '2018/12/24';
    const thuthumbnails = 'https://img.youtube.com/vi/808FE3TSuPA/maxresdefault.jpg';

    const out = [];
    const original = event.target.value;
    const arr = original.split('\n');

    for (const clip of arr) {
      if (clip.length === 0) continue;
      const clipArr = clip.split(' ');
      const time = clipArr[0];
      const timeArr = time.split(':');
      timeArr.reverse();

      // name hira
      const song_singer = clipArr.slice(1).join(' ');
      console.log(song_singer);
      const song = song_singer.split('/')[0];
      const singer = song_singer.split('/')[1];
      console.log(song);
      console.log(singer);

      let minute = 0;
      for (let i = 0; i < timeArr.length; i++) {
        if (i === 0) {
          minute += parseInt(timeArr[i]);
        }
        if (i === 1) {
          minute += 60 * parseInt(timeArr[i]);
        }
        if (i === 2) {
          minute += 3600 * parseInt(timeArr[i]);
        }
      }
      const url = baseUrl + '?t=' + String(minute);

      const songHira = await getHira(song);
      const singerHira = await getHira(singer);
      // const songHira = '';
      // const singerHira = '';
      const content: Content = {
        song: song,
        songHira: songHira,
        singer: singer,
        singerHira: singerHira,
        url: url,
        thumbnails: thuthumbnails,
        title: title,
        date: date,
      };
      out.push(content);
    }
    console.log('===');
    console.log(out);
    setResult(out);
  };

  const handleChange2 = async (event: { target: HTMLTextAreaElement }) => {
    // prm //
    const title = 'バーチャルおばあちゃんの無観客三味線ライブ';
    const date = '2020/03/13';
    const thuthumbnails = 'https://img.youtube.com/vi/ydskfi5D0XI/maxresdefault.jpg';

    const out = [];
    const original = event.target.value;
    const arr = original.split('\n');

    for (const clip of arr) {
      if (clip.length === 0) continue;
      const clipArr = clip.split(')');
      const time = clipArr[0].slice(1);
      const timeArr = time.split(':');
      timeArr.reverse();

      // name hira
      console.log(clipArr);
      const song_singer = clipArr.slice(1).join(' ');
      console.log(song_singer);
      const singer = song_singer.split('/')[0];
      const song = song_singer.split('/')[1];
      console.log(song);
      console.log(singer);

      let minute = 0;
      for (let i = 0; i < timeArr.length; i++) {
        if (i === 0) {
          minute += parseInt(timeArr[i]);
        }
        if (i === 1) {
          minute += 60 * parseInt(timeArr[i]);
        }
        if (i === 2) {
          minute += 3600 * parseInt(timeArr[i]);
        }
      }
      const url = baseUrl + '?t=' + String(minute);

      const songHira = await getHira(song);
      const singerHira = await getHira(singer);
      // const songHira = '';
      // const singerHira = '';
      const content: Content = {
        song: song,
        songHira: songHira,
        singer: singer,
        singerHira: singerHira,
        url: url,
        thumbnails: thuthumbnails,
        title: title,
        date: date,
      };
      out.push(content);
    }
    console.log('===');
    console.log(out);
    setResult(out);
  };

  const handleChange3 = async (event: { target: HTMLTextAreaElement }) => {
    // prm //
    const title = 'バーチャルおばあちゃんの三味線放送';
    const date = '2020/03/10';
    const thuthumbnails = 'https://img.youtube.com/vi/La_fBYC47EY/maxresdefault.jpg';

    const out = [];
    const original = event.target.value;
    const arr = original.split('\n');

    for (const clip of arr) {
      if (clip.length === 0) continue;
      const clipArr = clip.split(' ');
      const time = clipArr[0];
      const timeArr = time.split(':');
      timeArr.reverse();

      // name hira
      const song = clipArr.slice(1).join(' ');
      const singer = '';
      console.log(song);
      console.log(singer);

      let minute = 0;
      for (let i = 0; i < timeArr.length; i++) {
        if (i === 0) {
          minute += parseInt(timeArr[i]);
        }
        if (i === 1) {
          minute += 60 * parseInt(timeArr[i]);
        }
        if (i === 2) {
          minute += 3600 * parseInt(timeArr[i]);
        }
      }
      const url = baseUrl + '?t=' + String(minute);

      const songHira = await getHira(song);
      const singerHira = '';
      // const songHira = '';
      // const singerHira = '';
      const content: Content = {
        song: song,
        songHira: songHira,
        singer: singer,
        singerHira: singerHira,
        url: url,
        thumbnails: thuthumbnails,
        title: title,
        date: date,
      };
      out.push(content);
    }
    console.log('===');
    console.log(out);
    setResult(out);
  };

  return (
    <div>
      <main>
        <div className='m-10 text-lg'>
          base url
          <input className='w-full border bg-black' onChange={baseUrlChange} />
        </div>
        <div className='flex'>
          <div className='w-1/2'>
            <textarea className='border-2 w-full h-screen bg-black' onChange={handleChange3} />
          </div>
          <div className='border-2 w-1/2 h-screen overflow-scroll'>
            {result.map((elm, i) => (
              <div key={i}>
                <div>{elm.singer}</div>
                <div>url: &apos;{elm.url}&apos;,</div>
                {/*elm[0]*/}
                {/*
                <a
                  href={elm[0]}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='underline text-blue-600'
                >
                  {elm[0]}
                </a>
                */}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
