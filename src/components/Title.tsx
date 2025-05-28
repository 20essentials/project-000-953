import { arrayPlayers } from '@/data/players.tsx';
import { useSliderStore } from '@/store/useSliderStore';

export const Title = () => {
  const currentImg = useSliderStore(state => state.currentImg);
  const { name } = arrayPlayers[currentImg];

  return (
    <>
      <h2 className='title'>{name}</h2>
    </>
  );
};
