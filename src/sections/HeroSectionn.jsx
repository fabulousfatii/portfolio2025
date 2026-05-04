import { gsap } from "gsap";
import React, { useRef, useEffect } from 'react';

function HeroSectionn() {
  const textRef = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const navRef = useRef(null);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const typeRef = useRef(null);

  // --- Typewriter ---
  useEffect(() => {
    const phrases = ['Full Stack Developer', 'Frontend Craftsperson', 'React Developer'];
    let pIdx = 0, cIdx = 0, deleting = false, timer;
    const el = typeRef.current;
    if (!el) return;
    function type() {
      const phrase = phrases[pIdx];
      if (!deleting) {
        el.textContent = phrase.slice(0, ++cIdx);
        if (cIdx === phrase.length) { deleting = true; timer = setTimeout(type, 1800); return; }
      } else {
        el.textContent = phrase.slice(0, --cIdx);
        if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; timer = setTimeout(type, 400); return; }
      }
      timer = setTimeout(type, deleting ? 50 : 80);
    }
    timer = setTimeout(type, 1200);
    return () => clearTimeout(timer);
  }, []);


 

  // --- GSAP entrance ---
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.in' })
      .fromTo([text2Ref.current, text3Ref.current], { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.in' })
      .fromTo(navRef.current.children, { opacity: 0 }, { opacity: 1, duration: 2, ease: 'power2.out', stagger: 0.2 });
  }, []);

  

  return (
    <>
      <style>{`
        @keyframes ripple { to { transform: scale(4); opacity: 0; } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer { 0%{background-position:0% center} 100%{background-position:200% center} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,0.6)} 50%{box-shadow:0 0 0 6px rgba(52,211,153,0)} }
        .type-text { background:linear-gradient(135deg,#60a5fa,#0655b7 60%,#147af8);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shimmer s linear infinite; }
        .blink-cur { display:inline-block;width:3px;height:.85em;background:#60a5fa;margin-left:4px;vertical-align:middle;animation:blink .9s step-end infinite; }
        .status-dot { width:7px;height:7px;background:#34d399;border-radius:50%;animation:pulse 2s infinite; }
        .hero-btn { position:relative;overflow:hidden;transition:color .3s,border-color .3s,transform .2s,box-shadow .3s; }
        .hero-btn:hover { transform:translateY(-2px) scale(1.04) !important; }
      `}</style>

      

      <div id="section1" className="h-screen overflow-x-hidden relative flex flex-col p-4 justify-center items-center" >
        <div className="absolute opacity-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        <div ref={blob1Ref} className="w-40 h-40 sm:w-52 sm:h-52 lg:w-[300px] lg:h-[300px] anim rounded-full absolute -top-24 right-2/3 bg-blue-900 blur-[130px] transition-transform duration-75 " />
        <div ref={blob2Ref} className="w-40 h-40 sm:w-52 sm:h-52 lg:w-[500px] lg:h-[300px] rounded-xl absolute -top-16 right-0 bg-blue-900 blur-[130px] transition-transform duration-75" />

        {/* Status badge */}
        <div className="z-20 flex items-center gap-2 bg-blue-900/20 border border-blue-400/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-lg">
          <span className="status-dot" />
          <span className="text-xs text-blue-300 uppercase tracking-widest">Available for internship roles</span>
        </div>

        <h2 ref={text2Ref} className="z-20 text-xl md:text-2xl text-gray-300 font-medium text-center">
          <span className="text-blue-400 font-sans">I am</span>, Fatima Saleem
        </h2>

        <div ref={textRef} className="z-20 mt-1">
          <h1 className="text-4xl md:text-7xl font-bold text-center leading-tight" style={{ fontFamily: 'sans-serif' }}>
            <span className="type-text" ref={typeRef} />
            <span className="blink-cur" />
          </h1>
        </div>

        <p ref={text3Ref} className="z-20 text-sm md:text-base mt-4 text-gray-400 text-center leading-relaxed max-w-md">
          Building modern web apps with clean UI, solid architecture,<br />and real-world performance in mind.
        </p>

        <div ref={navRef} className="flex flex-wrap gap-3 mt-5 justify-center z-20">
          <a href="#section2"  className="hero-btn hidden md:inline-flex items-center gap-2 text-center px-5 py-2 bg-gradient-to-r from-blue-900/20 to-blue-950/20 rounded-full backdrop-blur-lg border border-white/20 text-gray-300 shadow-sm shadow-blue-800 hover:text-blue-300 hover:border-blue-400/40 hover:shadow-blue-500/30 hover:shadow-md">
            Explore more 🔎
          </a>
          <a href="#contact"  className="hero-btn hidden md:inline-flex items-center gap-2 text-center px-5 py-2 bg-gradient-to-r from-blue-900/20 to-blue-950/20 rounded-full backdrop-blur-lg border border-white/20 text-gray-300 shadow-sm shadow-blue-800 hover:text-blue-300 hover:border-blue-400/40 hover:shadow-blue-500/30 hover:shadow-md">
            Open for internship 💻
          </a>
          <a href="#contact"  className="hero-btn inline-flex items-center gap-2 text-center px-5 py-2 bg-gradient-to-r from-blue-900/20 to-blue-950/20 rounded-full backdrop-blur-lg border border-white/20 text-gray-300 shadow-sm shadow-blue-800 hover:text-blue-300 hover:border-blue-400/40 hover:shadow-blue-500/30 hover:shadow-md">
            Let's build together ✨
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
          <div style={{ width: '1px', height: '42px', background: 'linear-gradient(to bottom, #60a5fa, transparent)', animation: 'scrollDrop 1.8s ease infinite' }} />
          <span className="text-xs text-slate-500 uppercase tracking-widest">scroll</span>
        </div>
        <style>{`@keyframes scrollDrop{0%{transform:scaleY(0);transform-origin:top;opacity:1}50%{transform:scaleY(1);transform-origin:top}100%{transform:scaleY(1);transform-origin:bottom;opacity:0}}`}</style>
      </div>
    </>
  );
}

export default HeroSectionn;