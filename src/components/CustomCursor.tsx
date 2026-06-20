import { useEffect } from 'react';

/**
 * Custom cursor matching parnil.co: a small lime dot that tracks the pointer
 * exactly, plus a larger ring that trails it with easing. Both use
 * mix-blend-mode: exclusion (set in CSS). It enables itself only on fine-pointer
 * (mouse) devices and cleans up fully on unmount, so touch users are unaffected.
 */
export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return;

    const dot = document.createElement('div');
    dot.className = 'cursor';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.documentElement.classList.add('has-custom-cursor');

    // Dot snaps to the pointer; ring eases toward it for a subtle trail.
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let visible = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
      // Grow over interactive elements.
      const interactive = !!(e.target as Element)?.closest?.(
        'a, button, input, textarea, select, label, [role="button"], .cursor-pointer'
      );
      dot.classList.toggle('is-hover', interactive);
      ring.classList.toggle('is-hover', interactive);
    };

    const onLeave = () => {
      visible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      raf = requestAnimationFrame(tick);
    };

    dot.style.opacity = '0';
    ring.style.opacity = '0';
    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.documentElement.classList.remove('has-custom-cursor');
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
