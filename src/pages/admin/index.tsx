import { table } from 'console';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Admin: NextPage = () => {
  const [baseUrl, setBaseUrl] = useState('');
  const [result, setResult] = useState<Array<Array<string>>>([]);

  const baseUrlChange = async (event: { target: HTMLInputElement }) => {
    setBaseUrl(event.target.value);
  };

  const handleChange = async (event: { target: HTMLTextAreaElement }) => {
    const out = [];
    const original = event.target.value;
    console.log(original);
    const arr = original.split('\n');
    console.log(arr);

    for (const clip of arr) {
      if (clip.length === 0) continue;
      const clipArr = clip.split(' ');
      const time = clipArr[0];
      const timeArr = time.split(':');
      timeArr.reverse();
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
      out.push([url, clip]);
    }
    console.log('===');
    console.log(out);
    setResult(out);
  };

  // Change the pattern

  return (
    <div>
      <main>
        <div className='m-10 text-lg'>
          base url
          <input className='w-full border' onChange={baseUrlChange} />
        </div>
        <div className='flex'>
          <div className='w-1/2'>
            <textarea className='border-2 w-full h-screen' onChange={handleChange} />
          </div>
          <div className='border-2 w-1/2 h-screen overflow-scroll'>
            {result.map((elm, i) => (
              <div key={i}>
                <div>{elm[1]}</div>
                {elm[0]}
                {/*
                <a
                  href={elm[0]}
                  target='_blank'
                  rel='noopener noreferrer'
                  // className='underline text-blue-600'
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
