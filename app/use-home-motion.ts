'use client';
import {useEffect} from 'react';

// Progressive enhancement: all content remains visible if JS or observer support is absent.
export function useHomeMotion(active: boolean) {
  useEffect(() => {
    if (!active || !('IntersectionObserver' in window)) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const selectors = '.home-content aside > :not(.aside-rule), .contact';
    const targets = [...document.querySelectorAll<HTMLElement>(selectors)];
    const progress = document.querySelector<HTMLElement>('.reading-progress');
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    function reveal(element: HTMLElement) { element.dataset.reveal = 'visible'; }
    function configure() {
      observer?.disconnect();
      if (reduced.matches) {
        targets.forEach(reveal);
        return;
      }
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          reveal(entry.target as HTMLElement);
          observer?.unobserve(entry.target);
        });
      }, {threshold: 0.12, rootMargin:'0px 0px -24px 0px'});
      targets.forEach(element => {
        const siblings = element.parentElement ? [...element.parentElement.children] : [];
        const card = element.matches('.job-row, .post-card');
        element.style.setProperty('--reveal-delay', `${card ? siblings.indexOf(element) * 110 : 0}ms`);
        element.dataset.reveal = element.getBoundingClientRect().top < window.innerHeight - 24 ? 'visible' : 'pending';
        observer?.observe(element);
      });
    }
    function updateProgress() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progress?.style.setProperty('--reading-progress', String(total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0));
      frame = 0;
    }
    function onScroll() { if (!frame) frame = requestAnimationFrame(updateProgress); }
    function onFocus(event: FocusEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-reveal]') : null;
      if (target) { reveal(target); observer?.unobserve(target); }
    }
    configure();
    updateProgress();
    reduced.addEventListener('change', configure);
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    document.addEventListener('focusin', onFocus);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      reduced.removeEventListener('change', configure);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('focusin', onFocus);
      targets.forEach(element => { delete element.dataset.reveal; element.style.removeProperty('--reveal-delay'); });
    };
  }, [active]);
}
