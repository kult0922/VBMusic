import { documentId } from 'firebase/firestore';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Carousel, { ArrowProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RankingCard from '../RankingCard';

const Footer: React.FC = () => {
  return (
    <footer className='mt-24'>
      <div className='bottom-0 md:ml-10'>
        <div>
          <Link href='/about'>
            <a className='text-lg underline text-gray-400'>👵🏻 このサイトはなんだい？</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
