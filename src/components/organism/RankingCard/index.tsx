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
      <div className='shadow-md w-48 h-34'>
        <div className='w-48 h-34 rounded-md overflow-hidden'>
          <img alt='alt' className='object-cover w-48 h-34' src={content.thumbnails} />
        </div>
        <div className='text-lg truncate whitespace-no-wrap'> {content.song} </div>
        <div className='text-xs'> {content.singer} </div>

        <div className='text-xs mt-3 text-gray-400'> {content.title} </div>
        <div className='text-xs mt-1 text-gray-400'> {content.date} </div>
      </div>
    </a>
  );
};

export default RankingCard;
