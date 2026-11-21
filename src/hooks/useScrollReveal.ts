import { useEffect } from 'react';

const SELECTOR =
  '.scroll-reveal, .fade-in, .slide-up, .slide-down, .slide-left, .slide-right, .scale-up, .zoom-in';

/**
 * Revela elementos con clases de animación al entrar en pantalla.
 * Pasa `deps` cuando el contenido cambie (ej. filtros) para observar los nuevos elementos.
 */
export const useScrollReveal = (deps: unknown[] = []) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`${SELECTOR.split(', ').map((s) => `${s}:not(.revealed)`).join(', ')}`);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
