import clsx from 'clsx';

const images = [
  { background: 'bg-carousel-1', animation: 'animate-carousel-1' },
  { background: 'bg-carousel-2', animation: 'animate-carousel-2' },
  { background: 'bg-carousel-3', animation: 'animate-carousel-3' },
  { background: 'bg-carousel-4', animation: 'animate-carousel-4' },
  { background: 'bg-carousel-5', animation: 'animate-carousel-5' },
];

export function Carousel() {
  return (
    <section className={'display-on-scroll relative h-[50vh]'}>
      {images.map((image, index) => (
        <div
          key={index}
          className={clsx(
            image.background,
            image.animation,
            'absolute h-full w-full bg-cover bg-center opacity-0 lg:left-1/2 lg:w-2/3 lg:-translate-x-1/2'
          )}
        />
      ))}
    </section>
  );
}
