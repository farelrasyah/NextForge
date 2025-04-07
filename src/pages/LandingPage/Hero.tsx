import React, { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../../components/useIntersectionObserver';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const isHeroVisible = useIntersectionObserver(heroRef);
  const isTitleVisible = useIntersectionObserver(titleRef);
  const isSubtitleVisible = useIntersectionObserver(subtitleRef);
  const isCtaVisible = useIntersectionObserver(ctaRef);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
      </div>

      <div className="container">
        <div className="flex flex-col items-center text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p className="subtitle slide-in-left" style={{ opacity: 0, transform: 'translateY(20px)', animation: 'fadeInUp 0.6s forwards 0.3s' }}>
            Welcome to NextForge
          </p>
          <h1 
            ref={titleRef} 
            className={`fade-in ${isTitleVisible ? 'visible' : ''}`}
            style={{ marginBottom: 'var(--space-6)' }}
          >
            Create <span className="gradient-text">Stunning Web Experiences</span> With Modern Technology
          </h1>
          <p 
            ref={subtitleRef} 
            className={`fade-in ${isSubtitleVisible ? 'visible' : ''}`}
            style={{ fontSize: 'var(--text-xl)', maxWidth: '600px', marginBottom: 'var(--space-8)', color: 'var(--text-secondary)' }}
          >
            Transform your ideas into beautiful, responsive websites with our powerful platform. Build faster, scale easier, and deliver exceptional user experiences.
          </p>
          
          <div 
            ref={ctaRef}
            className={`flex gap-4 fade-in ${isCtaVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            <a href="#contact" className="btn btn-primary">
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;