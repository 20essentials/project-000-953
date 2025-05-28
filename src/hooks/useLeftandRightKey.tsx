import { useEffect } from 'react';
import { $, $$ } from '@/utils/functionsTs.ts';
import { useSliderStore } from '@/store/useSliderStore';

export const useLeftandRightKey = () => {
  const increase = useSliderStore(state => state.increase);
  const decrease = useSliderStore(state => state.decrease);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      const key = e.key;

      if (['ArrowRight', 'D', 'd'].includes(key)) {
        const topSlider = $('.top-slider') as HTMLElement;
        const bottomSlider = $('.bottom-slider') as HTMLElement;
        setTimeout(() => {
          const players = $$('.player');
          const player1 = players[0];
          const player2 = players[1];
          topSlider.appendChild(player2);
          bottomSlider.appendChild(player1);
        }, 30);
        increase();
      } else if (['ArrowLeft', 'A', 'a'].includes(key)) {
        const topSlider = $('.top-slider') as HTMLElement;
        const bottomSlider = $('.bottom-slider') as HTMLElement;
        setTimeout(() => {
          const players = $$('.player');
          const player1 = players[0];
          const lastPlayer = players[players.length - 1];
          bottomSlider.prepend(player1);
          topSlider.appendChild(lastPlayer);
        }, 30);
        decrease()
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);
};
