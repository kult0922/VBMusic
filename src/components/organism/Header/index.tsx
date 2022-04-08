import { documentId } from 'firebase/firestore';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Carousel, { ArrowProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RankingCard from '../RankingCard';

const Header: React.FC = () => {
  return (
    <header>
      <Link href='/'>
        <a>
          <div className='text-3xl mt-6'>
            <span className='text-orange-600 text-3xl font-bold'>V</span>B Music
          </div>
        </a>
      </Link>
    </header>
  );
};

export default Header;
