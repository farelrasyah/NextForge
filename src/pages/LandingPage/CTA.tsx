import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../components/useIntersectionObserver';

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const isSectionVisible = useIntersectionObserver(sectionRef);
  const isContentVisible = useIntersectionObserver(contentRef);

  return (
    <section ref={sectionRef} id="cta" className="section">
      <div className="container">
        <div 
          ref={contentRef} 
          className={`text-center fade-in ${isContentVisible ? 'visible' : ''}`}
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-12) var(--space-6)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <h2>Gak Perlu Jago Finansial. <span className="gradient-text">Kamu Cuma Butuh Nexora.</span></h2>
          <p style={{ 
            fontSize: 'var(--text-xl)', 
            maxWidth: '600px', 
            margin: '0 auto var(--space-8) auto', 
            color: 'var(--text-secondary)' 
          }}>
            Mulai kelola keuanganmu dengan AI yang akan membimbing setiap keputusan finansialmu.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a href="#login" className="btn btn-primary" style={{ fontSize: 'var(--text-lg)', padding: 'var(--space-4) var(--space-8)' }}>
              Lihat Contoh Penggunaan
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;