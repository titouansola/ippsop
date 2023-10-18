import { useEffect } from 'react';

export function useHandleScroll() {
  useEffect(() => {
    const callback = () => {
      const { innerHeight } = window;
      Array.from(document.getElementsByClassName('display-on-scroll')).forEach(
        (elt) => {
          const { y, height } = elt.getBoundingClientRect();
          if (y < innerHeight - height / 2) {
            elt.classList.add('scroll-visible');
          }
        }
      );
    };
    window.addEventListener('scroll', callback);
    callback();
    return () => window.removeEventListener('scroll', callback);
  }, []);
}
