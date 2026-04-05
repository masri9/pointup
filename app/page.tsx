"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ============================================================
// 1. قسم البيانات (DATA SETTINGS)
// ============================================================

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

const services = [
  { 
    name: "Visual Identity", 
    primary: "#D8B4FE", 
    bg: "#0D0A14", 
    label: "BRANDING & LOGOS",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000",
    desc: "نصمم هويات بصرية تترك أثراً لا ينسى وتعكس قيم شركتك."
  },
  { 
    name: "Web Development", 
    primary: "#7DD3FC", 
    bg: "#0A0D14", 
    label: "NEXT-GEN PLATFORMS",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    desc: "نبني منصات سريعة، متجاوبة، ومتطورة تقنياً بأحدث التقنيات."
  },
  { 
    name: "Smart Automation", 
    primary: "#BEF264", 
    bg: "#0B140A", 
    label: "WORKFLOW EFFICIENCY",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
    desc: "نؤتمت أعمالك لنوفر لك الوقت والجهد ونزيد الإنتاجية."
  }
];

export default function HomePage() {
  
  // ============================================================
  // 2. منطق الصفحة (LOGIC & STATE)
  // ============================================================
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTiles, setShowTiles] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowTiles(true), 100);
    const interval = setInterval(() => {
      setActiveTheme((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  const columns = Array.from({ length: 7 }, (_, i) => 
    [...heroMedia, ...heroMedia].filter((_, idx) => idx % 7 === i)
  );

  return (
    <>
      {/* 3. الهيدر (HEADER / TOPBAR) */}
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

      {/* 4. قسم الهيرو (HERO SECTION) */}
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

      {/* 5. قسم الخدمات الذكي (DYNAMIC SERVICES LAB) */}
      <motion.section 
        className="services-lab-section" 
        animate={{ backgroundColor: services[activeTheme].bg }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ padding: '150px 20px', position: 'relative', overflow: 'hidden' }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="services-display-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
            
            <div className="service-content-side">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTheme}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="badge" style={{ 
                    color: services[activeTheme].primary, 
                    border: `1px solid ${services[activeTheme].primary}33`,
                    padding: '8px 20px', borderRadius: '100px', fontSize: '12px', letterSpacing: '2px'
                  }}>
                    OUR EXPERTISE
                  </span>
                  
                  <h3 style={{ 
                    color: services[activeTheme].primary, 
                    fontSize: '56px', fontWeight: '900', marginTop: '20px', lineHeight: '1' 
                  }}>
                    {services[activeTheme].name}
                  </h3>
                  
                  <p className="service-label" style={{ 
                    letterSpacing: '4px', color: '#666', marginTop: '10px', textTransform: 'uppercase', fontSize: '13px' 
                  }}>
                    {services[activeTheme].label}
                  </p>
                  
                  <p className="service-description" style={{ 
                    color: 'rgba(255,255,255,0.5)', marginTop: '25px', fontSize: '18px', lineHeight: '1.6', maxWidth: '450px' 
                  }}>
                    {services[activeTheme].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="theme-switcher-mini" style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
                {services.map((_, i) => (
                  <div 
                    key={i} 
                    className="nav-dot-service" 
                    style={{ 
                      width: activeTheme === i ? '60px' : '30px',
                      height: '4px', borderRadius: '2px', cursor: 'pointer',
                      backgroundColor: activeTheme === i ? services[i].primary : '#333',
                      transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onClick={() => setActiveTheme(i)}
                  />
                ))}
              </div>
            </div>

            <div className="service-image-side">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTheme}
                  className="image-frame"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -5 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotateY: 5 }}
                  transition={{ duration: 0.7 }}
                  style={{ 
                    position: 'relative', height: '550px', borderRadius: '40px', overflow: 'hidden',
                    border: `1px solid rgba(255,255,255,0.05)`,
                    boxShadow: `0 40px 100px rgba(0,0,0,0.5)`
                  }}
                >
                  <Image 
                    src={services[activeTheme].image} 
                    alt={services[activeTheme].name} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div style={{ 
                    position: 'absolute', inset: 0, 
                    background: `linear-gradient(to top, ${services[activeTheme].bg}, transparent 70%)` 
                  }} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============================================================
          6. قسم معرض الأعمال (PORTFOLIO GRID)
          عرض المشاريع المختارة بتصميم شبكي فخم
          ============================================================
      */}
      <section className="portfolio-section" style={{ padding: '150px 20px', background: '#050505' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '80px' }}>
            <span className="badge" style={{ color: services[activeTheme].primary, border: `1px solid ${services[activeTheme].primary}33`, padding: '8px 20px', borderRadius: '100px', fontSize: '11px', letterSpacing: '2px' }}>
              SELECTED WORKS
            </span>
            <h2 style={{ fontSize: '48px', fontWeight: '900', marginTop: '15px' }}>
              Featured <span style={{ color: services[activeTheme].primary }}>Projects</span>
            </h2>
          </div>
          
          <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {services.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="portfolio-card"
                style={{ position: 'relative', height: '500px', borderRadius: '30px', overflow: 'hidden', background: '#111', border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}
              >
                <Image src={project.image} alt={project.name} fill style={{ objectFit: 'cover', opacity: 0.6 }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px', background: 'linear-gradient(to top, #050505, transparent)' }}>
                  <h4 style={{ fontSize: '24px', fontWeight: '800' }}>{project.name}</h4>
                  <p style={{ fontSize: '12px', color: '#666', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '5px' }}>{project.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="footer" style={{ padding: '100px', textAlign: 'center', color: '#222', fontWeight: '600', fontSize: '13px' }}>
        <p>© 2026 PointUp Studio. All rights reserved.</p>
      </footer>
    </>
  );
}