"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compareValue, setCompareValue] = useState(50);
  const [showTiles, setShowTiles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTiles(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className="topbar">
        <div className="left-side">
          <img
            className="logo"
            src="https://plain-eeur-prod-public.komododecks.com/202603/29/3WkRxPzB59b5sd9X6Ww4/image.png"
            alt="PointUp Logo"
          />
        </div>

        <div className="right-side">
          <button
            className="menu-btn"
            aria-label="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`side-menu ${menuOpen ? "active" : ""}`} id="sideMenu">
        <div className="menu-content">
          <div className="menu-social">
            <a
              href="https://instagram.com/pointup.co"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/+972512812003"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>

          <div className="menu-links">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#" className="join-btn">
            Join Our Team
          </a>
        </div>
      </div>

      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        id="overlay"
        onClick={() => setMenuOpen(false)}
      />

     <section className="hero-showcase">
  <div className={`hero-collage ${showTiles ? "is-visible" : ""}`}>
    <div className="hero-tile tall"><img className="tile-media" src="/images/nx.jpg" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="/images/px.jpg" alt="" /></div>
    <div className="hero-tile short"><img className="tile-media" src="/images/ux.jpg" alt="" /></div>
    <div className="hero-tile medium"><img className="tile-media" src="/images/ix.jpg" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="/images/qx.jpg" alt="" /></div>
    <div className="hero-tile short"><img className="tile-media" src="/images/vx.jpg" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="/images/zx.jpg" alt="" /></div>

    <div className="hero-tile medium"><img className="tile-media" src="/images/dx.jpg" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="/images/ax.jpg" alt="" /></div>
    <div className="hero-tile medium"><img className="tile-media" src="/images/cx.jpg" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="/images/rx.jpg" alt="" /></div>
    <div className="hero-tile short"><img className="tile-media" src="/images/tx.jpg" alt="" /></div>
    <div className="hero-tile medium"><img className="tile-media" src="/images/fx.jpg" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1400" alt="" /></div>

    <div className="hero-tile short"><img className="tile-media" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1400" alt="" /></div>
    <div className="hero-tile medium"><img className="tile-media" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1400" alt="" /></div>
    <div className="hero-tile short"><img className="tile-media" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400" alt="" /></div>
    <div className="hero-tile medium"><img className="tile-media" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1400" alt="" /></div>

    <div className="hero-tile medium"><img className="tile-media" src="/images/nx.jpg" alt="" /></div>
    <div className="hero-tile short"><img className="tile-media" src="/images/px.jpg" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="/images/ux.jpg" alt="" /></div>
    <div className="hero-tile medium"><img className="tile-media" src="/images/ix.jpg" alt="" /></div>
    <div className="hero-tile short"><img className="tile-media" src="/images/qx.jpg" alt="" /></div>
    <div className="hero-tile tall"><img className="tile-media" src="/images/vx.jpg" alt="" /></div>
    <div className="hero-tile medium"><img className="tile-media" src="/images/zx.jpg" alt="" /></div>
  </div>

  <div className="hero-overlay" />

  <div className={`hero-center ${showTiles ? "is-visible" : ""}`}>
    <h1>PointUp</h1>
    <p>Where design, automation, and digital experiences come together.</p>
    <a href="#services" className="hero-cta">
      Explore Our Services
    </a>
  </div>
</section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Simple, modern, and focused on what your brand needs.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <img
                src="https://plain-eeur-prod-public.komododecks.com/202603/29/sRV5nXIN1WqkKDFORXKD/image.png"
                alt="Logo Design"
              />
              <div className="service-info">
                <h3>Logo Design</h3>
                <p>
                  We create modern, unique logos that represent your brand and
                  leave a strong first impression across all platforms.
                </p>
              </div>
            </div>

            <div className="service-card">
              <img
                src="https://plain-eeur-prod-public.komododecks.com/202603/29/H4OEBpbozA6pW9rBX95x/image.jpg"
                alt="Social Media Design"
              />
              <div className="service-info">
                <h3>Social Media Design</h3>
                <p>
                  Eye-catching posts and ads designed to boost engagement and
                  attract your ideal audience with a consistent visual identity.
                </p>
              </div>
            </div>

            <div className="service-card">
              <img
                src="https://plain-eeur-prod-public.komododecks.com/202603/29/vu4l2vY9TUs5UNyrXhH4/image.png"
                alt="Landing Pages"
              />
              <div className="service-info">
                <h3>Landing Pages</h3>
                <p>
                  We design fast, modern landing pages optimized to turn
                  visitors into customers with a smooth user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="before-after-section" id="about">
        <div className="container">
          <div className="before-after-top">
            <div className="before-after-kicker">Selected Transformation</div>
            <div className="section-title">
              <h2>Before & After</h2>
              <p>
                Drag the slider to reveal the difference between the old version
                and the upgraded result.
              </p>
            </div>
          </div>

          <div className="compare-wrapper">
            <div className="compare-frame">
              <div className="compare-box">
                <img
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop"
                  alt="After"
                  className="compare-img after-img"
                />

                <div
                  className="before-layer"
                  id="beforeLayer"
                  style={{ width: `${compareValue}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1600&auto=format&fit=crop"
                    alt="Before"
                    className="compare-img before-img"
                  />
                </div>

                <div
                  className="slider-line"
                  id="sliderLine"
                  style={{ left: `${compareValue}%` }}
                >
                  <div className="slider-button">↔</div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={compareValue}
                  className="compare-range"
                  id="compareRange"
                  onChange={(e) => setCompareValue(Number(e.target.value))}
                />

                <div className="compare-label before-label">Before</div>
                <div className="compare-label after-label">After</div>
              </div>

              <div className="compare-bottom-info">
                <div className="compare-info-card">
                  <strong>Old Version</strong>
                  <span>
                    Outdated structure, weaker visual hierarchy, and less
                    engaging overall presentation.
                  </span>
                </div>

                <div className="compare-info-card">
                  <strong>Upgraded Result</strong>
                  <span>
                    Cleaner design, stronger branding, and a more modern
                    experience built to convert better.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <p className="footer-copy">© 2026 PointUp. All rights reserved.</p>

          <p className="footer-join">
            Interested in joining <span>PointUp</span>? Let’s build what’s next
            together.
          </p>

          <div className="footer-social">
            <a
              href="https://instagram.com/pointup.co"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/+972512812003"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}