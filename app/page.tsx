"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const heroMedia = [
  { src: "/images/hx.jpg", type: "image" },
  { src: "/videos/promo1.mp4", type: "video" },
  { src: "/images/nx.jpg", type: "image" },
  { src: "/images/dx.jpg", type: "image" },
  { src: "/videos/promo2.mp4", type: "video" },
  { src: "/images/fx.jpg", type: "image" },
  { src: "/images/ix.jpg", type: "image" },
  { src: "/videos/promo3.mp4", type: "video" },
  { src: "/images/cx.jpg", type: "image" },
  { src: "/images/ax.jpg", type: "image" },
  { src: "/images/bx.jpg", type: "image" },
  { src: "/images/ex.jpg", type: "image" },
  { src: "/images/kx.jpg", type: "image" },
  { src: "/images/gx.jpg", type: "image" },
];

const menuLinks = [
  { name: "Design", href: "/design" },
  { name: "Automation", href: "#services" },
  { name: "Support", href: "#footer" }
];

const themes = [
  { name: "PointUp Purple", primary: "#D8B4FE", secondary: "#A855F7", bg: "#0D0A14", label: "CYBER IDENTITY" },
  { name: "Oceanic Blue", primary: "#7DD3FC", secondary: "#3B82F6", bg: "#0A0D14", label: "TRUST ENGINE" },
  { name: "Electric Lime", primary: "#BEF264", secondary: "#84CC16", bg: "#0B140A", label: "GROWTH LAB" }
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTiles, setShowTiles] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowTiles(true), 100);
    const interval = setInterval(() => {
      setActiveTheme((prev) => (prev + 1) % themes.length);
    }, 5000);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  const columns = Array.from({ length: 7 }, (_, i) => 
    [...heroMedia, ...heroMedia].filter((_, idx) => idx % 7 === i)
  );

  return (
    <>
      <header className="topbar">
        <div className="left-side">
          <Image src="https://plain-eeur-prod-public.komododecks.com/202603/29/3WkRxPzB59b5sd9X6Ww4/image.png" alt="Logo" width={120} height={45} className="logo-img-fixed" priority />
        </div>
        <div className="right-side" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav initial={{ width: 0, opacity: 0 }} animate={{ width: "auto", opacity: 1 }} exit={{ width: 0, opacity: 0 }} className="horizontal-menu-bar">
                {menuLinks.map((link, i) => (
                  <Link key={i} href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</Link>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span>
          </button>
        </div>
      </header>

      <section className="hero-showcase">
        <div className={`hero-collage-new ${showTiles ? "is-visible" : ""}`}>
          {columns.map((col, colIdx) => (
            <motion.div 
              key={colIdx} 
              className="hero-column"
              animate={{ y: colIdx % 2 === 0 ? [0, -120, 0] : [-120, 0, -120] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {col.map((item, idx) => (
                <div key={idx} className={`hero-tile-new ${idx % 2 === 0 ? "tall" : "short"}`}>
                  {item.type === "image" ? (
                    <Image src={item.src} alt="Work" fill className="tile-media" sizes="15vw" />
                  ) : (
                    <video src={item.src} autoPlay loop muted playsInline className="tile-media" />
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
        <div className="hero-overlay-dark" />
        <div className="hero-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>PointUp</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Visual Identity • Smart Automation • Creative Design</motion.p>
          <a href="#services" className="hero-cta">Explore Work</a>
        </div>
      </section>

      {/* القسم الثاني: مختبر الهوية (بدون خط الليزر) */}
      <motion.section 
        className="design-system-section" 
        animate={{ backgroundColor: themes[activeTheme].bg }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="container">
          <div className="section-title">
            <span className="badge" style={{ color: themes[activeTheme].primary }}>DIGITAL IDENTITY LAB</span>
            <h2>Engineered <span style={{ color: themes[activeTheme].primary }}>Consistency</span></h2>
          </div>
          
          <div className="brand-scanner-canvas" style={{ borderColor: themes[activeTheme].primary + '22' }}>
            <motion.h3 
              key={activeTheme}
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              style={{ color: themes[activeTheme].primary, fontSize: '32px' }}
            >
              {themes[activeTheme].name}
            </motion.h3>
            
            <div className="identity-cards-row">
              <motion.div className="brand-card-3d" whileHover={{ rotateY: 20, rotateX: 10 }} style={{ background: themes[activeTheme].primary }}>
                <div className="card-content-custom">
                  <span className="card-logo-p">P.</span>
                  <div className="card-tag-info" style={{ color: '#000' }}>SYSTEM CORE <br /> BRAND ASSETS 2026</div>
                </div>
              </motion.div>
              <motion.div className="brand-card-3d" whileHover={{ rotateY: -20, rotateX: 10 }} style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="card-content-custom">
                  <div style={{ height: '50px', background: themes[activeTheme].primary, opacity: 0.2, borderRadius: '8px' }} />
                  <div className="card-tag-info">UI FRAMEWORK <br /> CONSISTENCY</div>
                </div>
              </motion.div>
            </div>
            <motion.button className="scanner-btn" animate={{ background: themes[activeTheme].primary, boxShadow: `0 15px 40px ${themes[activeTheme].primary}44` }}>Analyze Brand</motion.button>
          </div>
        </div>
      </motion.section>
    </>
  );
}