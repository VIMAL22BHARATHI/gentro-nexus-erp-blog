import React, { useEffect, useRef, useState } from 'react';
import { BRAND_CONFIG } from '../constants/branding';

/**
 * InteractionLayer
 *
 * Adds the "alive" feel of the reference site without touching the existing
 * section components:
 *   - scroll progress bar
 *   - staggered reveal-on-scroll for cards / headings
 *   - pointer-following spotlight on cards
 *   - subtle 3D tilt on the hero lifecycle panel
 *   - scroll-spy highlighting in the navbar
 *   - "live" step highlight cycling in the hero lifecycle panel
 *   - floating WhatsApp + back-to-top actions
 *
 * Everything is driven by data-* attributes (React never manages those), so it
 * cannot be wiped by a re-render of the underlying components. All motion is
 * disabled for visitors who prefer reduced motion.
 */

const WHATSAPP_NUMBER = '919659245977';
const WHATSAPP_TEXT = `Hello ${BRAND_CONFIG.productName} team, I would like to know more about the AI-powered manufacturing ERP.`;

const REVEAL_SELECTORS = [
  '.section-header',
  '.workflow-stepper',
  '.workflow-detail-card',
  '.modules-nav-pills',
  '.ai-card',
  '.roles-tab-bar',
  '.role-detail-card',
  '.industry-detail-card',
  '.arch-layer-card',
  '.integration-card',
  '.comparison-card',
  '.driver-card',
  '.faq-item',
  '.hero-stat',
  '.hero-sectors',
  '.hero-mockup-wrapper',
  '.demo-container',
  '.contact-shell'
];

const SPOTLIGHT_SELECTORS = [
  '.ai-card',
  '.arch-layer-card',
  '.integration-card',
  '.driver-card',
  '.faq-item',
  '.role-detail-card',
  '.industry-detail-card',
  '.hero-stat'
];

const TILT_SELECTORS = ['.hero-lifecycle-panel'];

const SPY_SECTIONS = [
  'workflow',
  'modules',
  'ai-capabilities',
  'roles',
  'use-cases',
  'architecture',
  'benefits',
  'faq',
  'book-demo',
  'contact'
];

export default function InteractionLayer() {
  const progressRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanups = [];

    /* ---------------------------------------------------- scroll progress */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
        if (!reduced) root.style.setProperty('--scroll-y', String(Math.min(y, 1600)));
        setShowTop(y > 700);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      root.style.removeProperty('--scroll-y');
    });

    /* ------------------------------------------------------ reveal on scroll */
    if (!reduced && 'IntersectionObserver' in window) {
      const tagged = [];
      const siblingCount = new Map();

      document.querySelectorAll(REVEAL_SELECTORS.join(',')).forEach((el) => {
        const parent = el.parentElement;
        const idx = siblingCount.get(parent) || 0;
        siblingCount.set(parent, idx + 1);
        el.setAttribute('data-reveal', 'hidden');
        el.setAttribute('data-reveal-i', String(Math.min(idx, 6)));
        tagged.push(el);
      });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            io.unobserve(el);
            el.setAttribute('data-reveal', 'in');
            // Once the entrance has played, drop the reveal transition so the
            // element's own hover/transform styles take over cleanly.
            window.setTimeout(() => {
              if (el.getAttribute('data-reveal') === 'in') el.setAttribute('data-reveal', 'done');
            }, 1100);
          });
        },
        { threshold: 0.01, rootMargin: '0px 0px -6% 0px' }
      );
      tagged.forEach((el) => io.observe(el));

      cleanups.push(() => {
        io.disconnect();
        tagged.forEach((el) => {
          el.removeAttribute('data-reveal');
          el.removeAttribute('data-reveal-i');
        });
      });
    }

    /* ----------------------------------------- pointer spotlight + hero tilt */
    if (!reduced && finePointer) {
      const spot = document.querySelectorAll(SPOTLIGHT_SELECTORS.join(','));
      spot.forEach((el) => el.setAttribute('data-spotlight', ''));

      const tilt = document.querySelectorAll(TILT_SELECTORS.join(','));
      tilt.forEach((el) => el.setAttribute('data-tilt', ''));

      let raf = 0;
      const onMove = (e) => {
        if (raf) return;
        const { clientX, clientY, target } = e;
        raf = window.requestAnimationFrame(() => {
          raf = 0;
          if (!(target instanceof Element)) return;

          const s = target.closest('[data-spotlight]');
          if (s) {
            const r = s.getBoundingClientRect();
            s.style.setProperty('--mx', `${clientX - r.left}px`);
            s.style.setProperty('--my', `${clientY - r.top}px`);
          }

          const t = target.closest('[data-tilt]');
          if (t) {
            const r = t.getBoundingClientRect();
            const px = (clientX - r.left) / r.width - 0.5;
            const py = (clientY - r.top) / r.height - 0.5;
            t.style.setProperty('--ry', `${(px * 5).toFixed(2)}deg`);
            t.style.setProperty('--rx', `${(-py * 4).toFixed(2)}deg`);
          }
        });
      };
      const onLeave = (e) => {
        const t = e.target instanceof Element ? e.target.closest('[data-tilt]') : null;
        if (t) {
          t.style.setProperty('--rx', '0deg');
          t.style.setProperty('--ry', '0deg');
        }
      };
      document.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerout', onLeave, { passive: true });

      cleanups.push(() => {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerout', onLeave);
        if (raf) window.cancelAnimationFrame(raf);
        spot.forEach((el) => el.removeAttribute('data-spotlight'));
        tilt.forEach((el) => {
          el.removeAttribute('data-tilt');
          el.style.removeProperty('--rx');
          el.style.removeProperty('--ry');
        });
      });
    }

    /* -------------------------------------------------------- navbar scroll-spy */
    if ('IntersectionObserver' in window) {
      const links = Array.from(document.querySelectorAll('.nav-link'));
      const setActive = (id) => {
        links.forEach((a) => {
          const match = id && a.getAttribute('href') === `#${id}`;
          if (match) a.setAttribute('data-active', 'true');
          else a.removeAttribute('data-active');
        });
      };

      const visible = new Set();
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) visible.add(entry.target.id);
            else visible.delete(entry.target.id);
          });
          // Prefer the section that appears latest in page order among visible ones
          const current = SPY_SECTIONS.filter((id) => visible.has(id)).pop();
          setActive(current || null);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      SPY_SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) spy.observe(el);
      });
      cleanups.push(() => {
        spy.disconnect();
        setActive(null);
      });
    }

    /* ------------------------------------- hero "live" step highlight cycling */
    if (!reduced) {
      const steps = Array.from(document.querySelectorAll('.hlp-steps li'));
      if (steps.length) {
        let i = 0;
        let paused = false;
        const panel = document.querySelector('.hero-lifecycle-panel');
        const apply = () => {
          steps.forEach((li, n) => {
            if (n === i) li.setAttribute('data-live', 'true');
            else li.removeAttribute('data-live');
          });
        };
        apply();
        const timer = window.setInterval(() => {
          if (paused || document.hidden) return;
          i = (i + 1) % steps.length;
          apply();
        }, 2200);
        const pause = () => { paused = true; };
        const resume = () => { paused = false; };
        panel?.addEventListener('pointerenter', pause);
        panel?.addEventListener('pointerleave', resume);
        cleanups.push(() => {
          window.clearInterval(timer);
          panel?.removeEventListener('pointerenter', pause);
          panel?.removeEventListener('pointerleave', resume);
          steps.forEach((li) => li.removeAttribute('data-live'));
        });
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="scroll-progress-bar" ref={progressRef} />
      </div>

      <div className="floating-actions">
        <button
          type="button"
          className={`fab fab-top ${showTop ? 'visible' : ''}`}
          onClick={scrollTop}
          aria-label="Back to top"
          tabIndex={showTop ? 0 : -1}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>

        <a
          className="fab fab-whatsapp"
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with the GENTRO NEXUS team on WhatsApp"
        >
          <span className="fab-pulse" aria-hidden="true" />
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2zm0 1.8a8.1 8.1 0 0 1 0 16.2 8 8 0 0 1-4.13-1.14l-.3-.18-3.08.89.9-3-.2-.31A8.1 8.1 0 0 1 12.04 3.8zm-3.1 4.4c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.86 4.45 3.9 2.2.87 2.65.7 3.13.65.48-.04 1.55-.63 1.77-1.24.22-.6.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3-.26-.13-1.55-.77-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.68.85-.83 1.03-.15.17-.3.2-.57.07-.26-.13-1.1-.4-2.1-1.3-.78-.69-1.3-1.55-1.45-1.81-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.94-.21-.5-.43-.44-.59-.45h-.5z" />
          </svg>
          <span className="fab-tooltip">Chat on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
