import { Title } from '@/components/Title';

export const TopSlider = () => {
  return (
    <article className='top-slider'>
      <aside className='player'>
        <img draggable='false' src='/assets/a1.avif' alt='Lionek Messi' />
      </aside>
      <Title />
    </article>
  );
};
