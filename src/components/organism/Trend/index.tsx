import { documentId } from 'firebase/firestore';
import React, { useState, useRef, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RankingCard from '../RankingCard';

interface Props {
  contentList: Array<RankingElement>;
  List: Array<Content>;
  videoKey2index: Map<string, number>;
}

const Trend: React.FC<Props> = ({ contentList, List, videoKey2index }) => {
  useEffect(() => {
    const scrollMax = elm.current?.scrollWidth != null ? elm.current.scrollWidth : 0;
    console.log(scrollMax, 'scrollWidth');
  }, []); // 第2引数には副作用関数の実行タイミングを制御する依存データを記述

  const elm = useRef<HTMLDivElement>(null);
  if (typeof document !== 'undefined') {
    const te = document.getElementById('trend');
    console.log(te?.scrollWidth, 'aa');
  }

  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  console.log(elm.current?.clientWidth, 'c');
  const movement =
    elm.current?.clientWidth != null ? elm.current.clientWidth - elm.current.clientWidth * 0.2 : 0;
  // const scrollMax = elm.current.scrollWidth;
  const clientWidth = elm.current?.clientWidth != null ? elm.current.clientWidth : 0;

  // scroll　をwindowサイズで指定するようにする
  const update = (movement: number) => {
    if (elm.current?.scrollLeft == undefined) return;
    if (elm.current.scrollLeft + elm.current.clientWidth + movement < elm.current.scrollWidth) {
      setShowRightButton(true);
    } else {
      setShowRightButton(false);
    }
    if (elm?.current?.scrollLeft + movement > 0) {
      setShowLeftButton(true);
    } else {
      setShowLeftButton(false);
    }
  };

  const right = () => {
    if (elm.current?.scrollLeft == undefined) return;
    elm?.current?.scrollBy({
      top: 0,
      left: movement,
      behavior: 'smooth',
    });
    update(movement);
  };
  const left = () => {
    if (elm.current?.scrollLeft == undefined) return;
    elm?.current?.scrollBy({
      top: 0,
      left: -movement,
      behavior: 'smooth',
    });
    update(-movement);
  };
  return (
    <div className='relative'>
      aa
      <div ref={elm} id='trend' className='flex wrap flex-no-wrap overflow-scroll'>
        {contentList.map((elm, i) => (
          <RankingCard content={List[videoKey2index.get(elm.key)!]} key={i} />
        ))}
      </div>
      <div>
        {showLeftButton && (
          <button onClick={left}>
            <div className='absolute rounded-full bg-gray-50 top-1/2 w-10 h-10'>
              <div className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-35%] w-3 h-3 border-l-3 border-b-3 border-gray-700 rotate-45 inline-block' />
            </div>
          </button>
        )}

        {showRightButton && (
          <button onClick={right}>
            <div className='absolute rounded-full bg-gray-50 right-0 top-1/2 w-10 h-10'>
              <div className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-65%] w-3 h-3 border-r-3 border-t-3 border-gray-700 rotate-45 inline-block' />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Trend;
