import React, { useState, useEffect } from 'react';
import galleryMainImg from '../assets/home-gallery-main.png';
import practiceFocusImg from '../assets/home-practice-focus.png';
import facilitiesHeroImg from '../assets/facilities-hero.png';
import facilitiesPromiseImg from '../assets/facilities-promise.png';
import thumb1 from '../assets/home-gallery-thumb1.png';
import thumb2 from '../assets/home-gallery-thumb2.png';
import thumb3 from '../assets/home-gallery-thumb3.png';
import thumb4 from '../assets/home-gallery-thumb4.png';

export default function GalleryPage({ _onNavigate, _onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const GALLERY_ITEMS = [
    {
      id: 1,
      title: 'Modern Clinical Operatory',
      category: 'chairs',
      categoryLabel: 'Dental Chairs & Operatory',
      desc: 'Ergonomic A-dec style dental delivery units with LED operating lights, high-volume evacuation, and pneumatic foot controls.',
      img: galleryMainImg
    },
    {
      id: 2,
      title: 'Phantom Head Simulation Station',
      category: 'simulation',
      categoryLabel: 'Simulation Lab',
      desc: 'Precision typodont mannequins mounted on realistic patient simulators calibrated to ADC Melbourne examination standards.',
      img: practiceFocusImg
    },
    {
      id: 3,
      title: 'Digital Radiography & Treatment Planning',
      category: 'equipment',
      categoryLabel: 'Clinical Equipment',
      desc: 'High-definition digital OPG and bitewing radiographic display monitors for diagnostic OSCE case preparation.',
      img: thumb3
    },
    {
      id: 4,
      title: 'Clinical Instrumentation & Handpieces',
      category: 'equipment',
      categoryLabel: 'Clinical Equipment',
      desc: 'ADC-compliant high-speed electric handpieces, burs, rubber dam kits, and restorative restorative armamentarium.',
      img: thumb1
    },
    {
      id: 5,
      title: 'Dedicated Hands-On Training Suite',
      category: 'chairs',
      categoryLabel: 'Dental Chairs & Operatory',
      desc: 'Full operatory workstation with clean daylight illumination and real-world clinical ergonomics.',
      img: facilitiesHeroImg
    },
    {
      id: 6,
      title: 'OSCE Role-Play & Communication Suites',
      category: 'study',
      categoryLabel: 'OSCE & Study Suites',
      desc: 'Private examination rooms equipped for simulated patient role-play with dual video recording for faculty feedback.',
      img: facilitiesPromiseImg
    },
    {
      id: 7,
      title: 'Independent Study & Resource Library',
      category: 'study',
      categoryLabel: 'OSCE & Study Suites',
      desc: 'Quiet, air-conditioned study spaces with reference dental texts, past paper archives, and high-speed Wi-Fi.',
      img: thumb2
    },
    {
      id: 8,
      title: 'Multi-Station Clinical Skills Bay',
      category: 'simulation',
      categoryLabel: 'Simulation Lab',
      desc: 'Collaborative practice bay where candidates refine crown preparation, cavity design, and endodontic access skills.',
      img: thumb4
    }
  ];

  const FILTER_TABS = [
    { id: 'all', label: 'All Photos' },
    { id: 'chairs', label: 'Dental Chairs' },
    { id: 'simulation', label: 'Simulation Lab' },
    { id: 'equipment', label: 'Equipment & Tools' },
    { id: 'study', label: 'Study & OSCE Suites' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    function handleKeyDown(e) {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="gallery-page">
      {/* ------------------------------------------------------------------
          1. HERO INTRO
          ------------------------------------------------------------------ */}
      <section className="gallery-hero-section">
        <div className="container">
          <div className="gallery-hero-content text-center">
            <span className="gallery-eyebrow">ADC EXPERTS PERTH CENTRE</span>
            <h1 className="gallery-hero-title">
              Our Training Facilities <span className="text-terracotta">in Action</span>
            </h1>
            <p className="gallery-hero-lead">
              Take an interactive tour inside our purpose-built Perth clinical simulation centre, designed specifically to replicate the Australian Dental Council examination environment.
            </p>

            {/* Filter Pills */}
            <div className="gallery-filter-bar">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`gallery-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          2. GALLERY GRID
          ------------------------------------------------------------------ */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-photo-grid">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id} 
                className="gallery-card"
                onClick={() => setLightboxIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(idx); }}
              >
                <div className="gallery-card-img-wrap">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="gallery-card-img" 
                    loading="lazy" 
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-zoom-badge">🔍 View Full Image</span>
                  </div>
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-item-category">{item.categoryLabel}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="gallery-empty-state text-center">
              <p>No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------
          3. FULLSCREEN LIGHTBOX MODAL
          ------------------------------------------------------------------ */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="gallery-lightbox-overlay" 
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div 
            className="gallery-lightbox-container" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="gallery-lightbox-close" 
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image preview"
            >
              ✕
            </button>

            <button 
              type="button" 
              className="gallery-lightbox-nav prev"
              onClick={() => setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))}
              aria-label="Previous photo"
            >
              ‹
            </button>

            <button 
              type="button" 
              className="gallery-lightbox-nav next"
              onClick={() => setLightboxIndex((prev) => (prev + 1) % filteredItems.length)}
              aria-label="Next photo"
            >
              ›
            </button>

            <div className="gallery-lightbox-media">
              <img 
                src={filteredItems[lightboxIndex].img} 
                alt={filteredItems[lightboxIndex].title} 
                className="gallery-lightbox-img" 
              />
            </div>

            <div className="gallery-lightbox-caption">
              <span className="gallery-lightbox-badge">
                {filteredItems[lightboxIndex].categoryLabel} • {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="gallery-lightbox-title">{filteredItems[lightboxIndex].title}</h3>
              <p className="gallery-lightbox-desc">{filteredItems[lightboxIndex].desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
