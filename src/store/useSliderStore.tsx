import { combine } from 'zustand/middleware';
import { create } from 'zustand';
import { arrayPlayers } from '@/data/players';
const { length } = arrayPlayers;

export const useSliderStore = create(
  combine(
    {
      currentImg: 0
    },
    set => ({
      increase: () => {
        set(state => ({
          currentImg: (state.currentImg + 1) % length
        }));
      },
      decrease: () => {
        set(state => ({
          currentImg: (state.currentImg - 1 + length) % length
        }));
      }
    })
  )
);
