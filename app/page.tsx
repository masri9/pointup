"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// المصفوفة المحدثة لتشمل الصور والفيديوهات
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
  { src: "/images/mx.jpg", type: "image" },
  { src: "/images/kx.jpg", type: "image" },
  { src: "/images/ax.jpg", type: "image" },
  { src: "/images/bx.jpg", type: "image" },
  { src: "/images/ex.jpg", type: "image" },
  { src: "/images/ux.jpg", type: "image" },
  { src: "/images/lx.jpg", type: "image" },
  { src: "/images/sx.jpg", type: "image" },
  { src: "/images/ox.jpg", type: "image" },
  { src: "/images/gx.jpg", type: "image" },
  { src: "/images/qx.jpg", type: "image" },
  { src: "/images/rx.jpg", type: "image" },
  { src: "/images/tx.jpg", type: "image" },
  { src: "/images/vx.jpg", type: "image" },
  { src: "/images/px.jpg", type: "image" },
  { src: "/images/zx.jpg", type: "image" },
];

const menuLinks = [
  { name: "Design", href: "/design" }, 
  { name: "Automation", href: "#services" },
  { name: "Support", href: "#contact" }
];

const columns = Array.from({ length: 7 }, (_, i) =>
  heroMedia.filter((_, idx) => idx % 7 === i)
);

const services = [
  {
    title: "AI Image Engine",
    desc: "Experience the power of Nano Banana 2. Generate high-fidelity images directly from your creative prompts.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4628c71d0?q=80&w=1600",
    link: "/design",
    isAI: true
  },
  {
    title: "Social Media Design",
    desc: "Eye-catching posts and ads designed to boost engagement and attract your ideal audience.",
    img: "https://plain-eeur-prod-public.komododecks.com/202603/29/H4OEBpbozA6pW9rBX95x/image.jpg",
    link: "#services",
    isAI: false
  },
  {
    title: "Landing Pages",
    desc: "We design fast, modern landing pages optimized to turn visitors into customers smoothly.",
    img: "https://plain-eeur-prod-public.komododecks.com/202603/29/vu4l2vY9TUs5UNyrXhH4/image.png",
    link: "#services",
    isAI: false
  }
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTiles, setShowTiles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTiles(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="topbar">
        <div className="left-side">
          <Image 
            src="https://plain-eeur-prod-public.komododecks.com/202603/29/3WkRxPzB59b5sd9X6Ww4/image.png" 
            alt="PointUp Logo" 
            width={400} 
            height={150} 
            className="logo-img"
            priority 
          />
        </div>

        <div className="right-side" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="horizontal-menu-bar"
              >
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={link.href} onClick={() => setMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          <button 
            className={`menu-btn ${menuOpen ? "active" : ""}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Hero Section مع دعم الفيديو */}
      <section className="hero-showcase">
        <div className={`hero-collage-new ${showTiles ? "is-visible" : ""}`}>
          {columns.map((col, colIdx) => (
            <motion.div 
              key={colIdx} 
              className="hero-column"
              animate={{
                y: colIdx % 2 === 0 ? [0, -100, 0] : [-100, 0, -100]
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...col, ...col].map((item, idx) => (
                <div key={idx} className={`hero-tile-new ${idx % 2 === 0 ? "tall" : "short"}`}>
                  {item.type === "image" ? (
                    <Image src={item.src} alt="Work" fill className="tile-media" sizes="15vw" />
                  ) : (
                    <video 
                      src={item.src} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                      className="tile-media" 
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="hero-overlay-dark" />

        <div className="hero-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            PointUp
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            We build landing pages, visual identities, and smart automation experiences that make your brand feel modern and sharp.
          </motion.p>
          <a href="#services" className="hero-cta">Explore Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Our Services
            </motion.h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                className={`service-card ${service.isAI ? "ai-featured" : ""}`} 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="service-image-wrapper">
                  <Image src={service.img} alt={service.title} fill className="service-img-main" style={{ objectFit: 'cover' }} />
                </div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  
                  <Link href={service.link} className="service-get-started">
                    {service.isAI ? "Try AI Engine" : "Get Started"}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <p>© 2026 PointUp. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" target="_blank">Instagram</a>
            <a href="#" target="_blank">WhatsApp</a>
          </div>
        </div>
      </footer>
    </>
  );
}