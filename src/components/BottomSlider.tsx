import { arrayPlayers } from '@/data/players.tsx';
export const BottomSlider = () => {
  return (
    <section className='bottom-slider'>
      {arrayPlayers.slice(1).map(player => (
        <aside key={player.id} className='player'>
          <img draggable='false' src={player.image} alt={player.name} />
        </aside>
      ))}
    </section>
  );
};
