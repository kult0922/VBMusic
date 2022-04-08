import { documentId } from 'firebase/firestore';
import React, { useState, useRef, useEffect } from 'react';
import Carousel, { ArrowProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RankingCard from '../RankingCard';

interface Props {
  contentList: Array<RankingElement>;
  List: Array<Content>;
  videoKey2index: Map<string, number>;
}

function CustomRightArrow({ onClick }: { onClick?: any }) {
  function handleClick() {
    // do whatever you want on the right button click
    console.log('Right button clicked, go to next slide');
    // ... and don't forget to call onClick to slide
    onClick();
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>
          <div className='absolute rounded-full bg-gray-50 ml-20 right-0 top-1/3 w-10 h-10'>
            <div className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-65%] w-3 h-3 border-r-3 border-t-3 border-gray-700 rotate-45 inline-block' />
          </div>
        </button>
      </div>
    </>
  );
}

function CustomLeftArrow({ onClick }: { onClick?: any }) {
  function handleClick() {
    // do whatever you want on the right button click
    console.log('Right button clicked, go to next slide');
    // ... and don't forget to call onClick to slide
    onClick();
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>
          <div className='absolute rounded-full bg-gray-50 left-0 top-1/3 w-10 h-10'>
            <div className='absolute left-1/2 top-1/2 translate-y-[-50%] translate-x-[-35%] w-3 h-3 border-l-3 border-b-3 border-gray-700 rotate-45 inline-block' />
          </div>
        </button>
      </div>
    </>
  );
}

const Trend: React.FC<Props> = ({ contentList, List, videoKey2index }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 5,
      partialVisibilityGutter: 30,
    },
    smallDesktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 110,
    },
  };

  return (
    <>
      <Carousel
        partialVisible={true}
        autoPlay={false}
        autoPlaySpeed={100000}
        shouldResetAutoplay={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        responsive={responsive}
        containerClass='carousel-container'
        // removeArrowOnDeviceType={['tablet', 'mobile']}
        //deviceType={this.props.deviceType}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {contentList.map((elm, i) => (
          <RankingCard content={List[videoKey2index.get(elm.key)!]} key={i} />
        ))}
      </Carousel>
    </>
  );
};

export default Trend;
