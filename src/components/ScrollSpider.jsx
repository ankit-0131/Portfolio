import { useEffect, useState } from 'react';
import './ScrollSpider.css';

/**
 * ScrollSpider — Floating scroll-linked spider on right margin
 * Moves downwards on scroll and wiggles legs when crawling
 */
export default function ScrollSpider({ scrollProgress }) {
  const [isScrolling, setIsScrolling] = useState(false);

  // Detect scroll activity to toggle crawling animations
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Position moves from 0% (top of page) to 100% (bottom of page), subtracting the spider's height (var(--spider-size)) proportionally so it doesn't overflow the bottom.
  const spiderTop = `calc(${scrollProgress}% - var(--spider-size) * ${scrollProgress / 100})`;

  return (
    <div className="scroll-spider-wrapper" aria-hidden="true">
      {/* Web thread line */}
      <div 
        className="scroll-web-thread" 
        style={{ height: spiderTop }}
      ></div>
      
      {/* Spider container */}
      <div 
        className={`scroll-spider-container ${isScrolling ? 'is-crawling' : ''}`}
        style={{ top: spiderTop }}
      >
        <svg viewBox="0 0 100 100" className="scroll-spider-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Spider Body - Stylized/Geometric */}
          <path 
            d="M50,33 C47.5,33 45.5,37 45.5,41 C45.5,45 47.5,47 50,47 C52.5,47 54.5,45 54.5,41 C54.5,37 52.5,33 50,33 Z" 
            className="scroll-spider-body-upper" 
          />
          <path 
            d="M50,48 C45.5,48 42,52.5 42,62.5 C42,72.5 45.5,76 50,76 C54.5,76 58,72.5 58,62.5 C58,52.5 54.5,48 50,48 Z" 
            className="scroll-spider-body-lower" 
          />

          {/* Spider Legs - Left Side */}
          <g className="legs-left">
            <path d="M46,40 Q32,29 27,18" strokeWidth="2.5" fill="none" className="scroll-spider-leg" />
            <path d="M45,43 Q25,37 21,31" strokeWidth="2.5" fill="none" className="scroll-spider-leg" />
            <path d="M45,49 Q22,54 18,60" strokeWidth="2.5" fill="none" className="scroll-spider-leg" />
            <path d="M46,55 Q27,69 25,80" strokeWidth="2.5" fill="none" className="scroll-spider-leg" />
          </g>

          {/* Spider Legs - Right Side */}
          <g className="legs-right">
            <path d="M54,40 Q68,29 73,18" strokeWidth="2.5" fill="none" className="scroll-spider-leg" />
            <path d="M55,43 Q75,37 79,31" strokeWidth="2.5" fill="none" className="scroll-spider-leg" />
            <path d="M55,49 Q78,54 82,60" strokeWidth="2.5" fill="none" className="scroll-spider-leg" />
            <path d="M54,55 Q73,69 75,80" strokeWidth="2.5" fill="none" className="scroll-spider-leg" />
          </g>
        </svg>
      </div>
    </div>
  );
}
