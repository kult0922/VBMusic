import { connect } from 'http2';
import { url } from 'inspector';
import Fuse from 'fuse.js';
import parse from 'html-react-parser';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { incrementer } from '../../store/Incrementer';
import { getMinute } from '../../store/getMinute';
import { getVideoKey } from '../../store/getVideoKey';

interface Props {
  content: Fuse.FuseResult<Content>;
}

const highlighter = (resultItem: Fuse.FuseResult<Content>) => {
  // resultItem.matches?.forEach((matchItem) => {
  const hilit = Object.assign({}, resultItem.item);
  if (resultItem.matches == undefined) return resultItem.item;
  for (let matchItem of resultItem.matches) {
    if (matchItem.key == undefined) continue;
    const text = resultItem.item[matchItem.key as keyof Content];
    let result = '';
    const bs = Array<string>(text.length + 1);
    bs.fill('');
    const indices = matchItem.indices; // limpar referencia
    for (const indice of indices) {
      bs[indice[0]] = '<b class="text-orange-600">';
      bs[indice[1] + 1] = '</b>';
    }

    for (var i = 0; i < text.length; i++) {
      result += bs[i];
      result += text[i];
    }
    result += bs[text.length];
    // resultItem.item[matchItem.key as keyof Content] = result;
    hilit[matchItem.key as keyof Content] = result;
  }

  return hilit;
};

const ContentCard: React.FC<Props> = ({ content }) => {
  const handleClick = () => {
    incrementer(getVideoKey(content.item.url), getMinute(content.item.url));
  };

  const hilight = highlighter(content);
  return (
    <a href={content.item.url} onClick={handleClick} target='_blank' rel='noopener noreferrer'>
      <div className='flex items-center'>
        <div className='w-16'>
          <Image
            alt='alt'
            className='object-cover'
            width={400}
            height={400}
            src={content.item.thumbnails}
          />
        </div>
        <div className='ml-3 w-9/12'>
          <div className='text-xs'> {parse(hilight.songHira)} </div>
          <div className='text-lg truncate whitespace-no-wrap'> {parse(hilight.song)} </div>
          <div className='text-xs text-gray-400'>
            {' '}
            {parse(hilight.singer)} / {parse(hilight.singerHira)}
          </div>

          <div className='text-xs text-gray-400 truncate whitespace-no-wrap'>
            {' '}
            {parse(hilight.title)}{' '}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ContentCard;
