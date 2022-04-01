import Image from 'next/image';
import { incrementer } from '../../store/Incrementer';
import { getMinute } from '../../store/getMinute';
import { getVideoKey } from '../../store/getVideoKey';

interface Props {
  content: Content;
}

const RankingCard: React.FC<Props> = ({ content }) => {
  const handleClick = () => {
    incrementer(getVideoKey(content.url), getMinute(content.url));
  };

  return (
    <a href={content.url} target='_blank' rel='noopener noreferrer' onClick={handleClick}>
      <div className='m-2 border-2 shadow-md w-64'>
        <Image alt='alt' width={280} height={160} src={content.thumbnails} />
        <div className='text-xs'> {content.songHira} </div>
        <div className='text-lg truncate whitespace-no-wrap'> {content.song} </div>
        <div className='text-xs mt-1'> {content.singerHira} </div>
        <div className='text-xs'> {content.singer} </div>

        <div className='text-xs mt-3 truncate whitespace-no-wrap'> {content.title} </div>
        <div className='text-xs'> {content.date} </div>
      </div>
    </a>
  );
};

export default RankingCard;
