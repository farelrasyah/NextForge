import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '../../components/hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [liveCounter] = useState(8230);

  const isHeroVisible = useIntersectionObserver(heroRef);
  const isTitleVisible = useIntersectionObserver(titleRef);
  const isSubtitleVisible = useIntersectionObserver(subtitleRef);
  const isCtaVisible = useIntersectionObserver(ctaRef);
  const isImageVisible = useIntersectionObserver(imageRef);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <div className="live-counter mb-4 fade-in visible">
              <span>+</span>
              <span className="counter-value">{liveCounter.toLocaleString()}</span>
              <span>pengguna sudah mengelola uang bareng Nexora</span>
            </div>
            
            <h1 
              ref={titleRef} 
              className={`fade-in ${isTitleVisible ? 'visible' : ''}`}
            >
              Uang Cepat Habis Tapi <span className="gradient-text">Gak Tahu Kemana?</span> Biarkan AI yang Bantu Kamu Atur.
            </h1>
            
            <p 
              ref={subtitleRef} 
              className={`fade-in ${isSubtitleVisible ? 'visible' : ''}`}
              style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-8)', color: 'var(--text-secondary)' }}
            >
              Nexora bukan cuma aplikasi catat keuangan. Ini asisten AI yang bantu kamu bikin keputusan harian tentang uang, dari beli kopi sampai rencana beli rumah.
            </p>
            
            <div 
              ref={ctaRef}
              className={`flex gap-4 fade-in ${isCtaVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '300ms' }}
            >
              <a href="#login" className="btn btn-primary">
                Login
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#features" className="btn btn-secondary">
                Pelajari Fitur
              </a>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className={`fade-in ${isImageVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '400ms', position: 'relative' }}
          >
            <div className="demo-screen" style={{ maxWidth: '450px', margin: '0 auto'}}>
              <div style={{ padding: '20px' }}>
                <div className="chat-header mb-4">
                  <div className="chat-avatar">
                    <span>AI</span>
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 'var(--text-lg)' }}>Nexora Assistant</h4>
                    <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>Online</p>
                  </div>
                </div>

                <div className="p-4 mb-4 ai-message">
                  <p style={{ margin: 0 }}>Hai Dinda! Berdasarkan analisis pengeluaranmu bulan ini, kamu bisa menghemat Rp 500.000 dengan mengurangi pembelian kopi di luar.</p>
                </div>
                
                <div className="p-4 mb-4 user-message">
                  <p style={{ margin: 0 }}>Berapa kali seminggu saya boleh jajan di luar?</p>
                </div>
                
                <div className="p-4 mb-4 ai-message">
                  <p style={{ margin: 0 }}>Berdasarkan anggaranmu bulan ini, kamu bisa jajan di luar <span className="text-green">2 kali seminggu</span> dan tetap mencapai target tabungan Rp 1,5 juta.</p>
                </div>

                <div className="flex justify-between items-center p-4 demo-screen mt-4 mb-4">
                  <div>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>Tabungan untuk DP Motor</p>
                    <h4 style={{ margin: 0 }}>Rp 3,500,000 <span className="text-green" style={{ fontSize: 'var(--text-sm)' }}>+12%</span></h4>
                  </div>
                  <div style={{ width: '120px', height: '40px', position: 'relative' }}>
                    <div style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '100%',
                      background: 'linear-gradient(to top, #3b82f6 0%, transparent 100%)',
                      opacity: 0.2,
                      borderRadius: 'var(--radius-md)'
                    }}></div>
                    {/* Simulate simple chart */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '2px',
                      display: 'flex',
                      alignItems: 'flex-end'
                    }}>
                      <div style={{ 
                        width: '15%', 
                        height: '30%', 
                        background: '#3b82f6', 
                        marginRight: '5px' 
                      }}></div>
                      <div style={{ 
                        width: '15%', 
                        height: '50%', 
                        background: '#3b82f6', 
                        marginRight: '5px' 
                      }}></div>
                      <div style={{ 
                        width: '15%', 
                        height: '40%', 
                        background: '#3b82f6', 
                        marginRight: '5px' 
                      }}></div>
                      <div style={{ 
                        width: '15%', 
                        height: '60%', 
                        background: '#3b82f6', 
                        marginRight: '5px' 
                      }}></div>
                      <div style={{ 
                        width: '15%', 
                        height: '80%', 
                        background: '#3b82f6', 
                        marginRight: '5px' 
                      }}></div>
                      <div style={{ 
                        width: '15%', 
                        height: '90%', 
                        background: '#10b981' 
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated typing dots in a small container at the bottom */}
            <div 
              className="ai-message" 
              style={{ 
                position: 'absolute', 
                bottom: '-10px', 
                left: '30%', 
                padding: 'var(--space-3)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;