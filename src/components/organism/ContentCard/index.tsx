import { connect } from 'http2';
import { url } from 'inspector';
import Fuse from 'fuse.js';
import parse from 'html-react-parser';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

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
  console.log(content);
  const hilight = highlighter(content);
  console.log(hilight);
  return (
    <a href={content.item.url} target='_blank' rel='noopener noreferrer'>
      <div className='m-2 border-2 shadow-md w-64'>
        <Image alt='alt' width={280} height={160} src={content.item.thumbnails} />
        <div className='text-xs'> {parse(hilight.songHira)} </div>
        <div className='text-lg truncate whitespace-no-wrap'> {parse(hilight.song)} </div>
        <div className='text-xs mt-1'> {parse(hilight.singerHira)} </div>
        <div className='text-xs'> {parse(hilight.singer)} </div>

        <div className='text-xs mt-3 truncate whitespace-no-wrap'> {parse(hilight.title)} </div>
        <div className='text-xs'> {parse(hilight.date)} </div>
      </div>
    </a>
  );
};

export default ContentCard;
