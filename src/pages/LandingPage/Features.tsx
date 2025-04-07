import React, { useRef } from 'react';
import Card from './Card';
import { useIntersectionObserver } from '../../components/useIntersectionObserver';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const isSectionVisible = useIntersectionObserver(sectionRef);
  const isHeadingVisible = useIntersectionObserver(headingRef);

  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "🤖 AI Assistant 24/7",
      description: "Bukan hanya laporan keuangan, tapi rekomendasi nyata tiap hari untuk membantu kamu mengambil keputusan keuangan yang lebih baik."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4V16M16 16L19 13M16 16L13 13M8 20V8M8 8L5 11M8 8L11 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "📅 Autopilot Budget",
      description: "Budget mingguan otomatis yang dibuat berdasarkan pola pengeluaran dan gaya hidupmu. Tidak perlu repot membuat anggaran manual."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 16L11.29 6.71C11.3851 6.61749 11.4972 6.54397 11.6199 6.49372C11.7425 6.44347 11.8734 6.41754 12.005 6.41754C12.1366 6.41754 12.2675 6.44347 12.3901 6.49372C12.5128 6.54397 12.6249 6.61749 12.72 6.71L22 16M4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "🎯 Simulasi Masa Depan",
      description: "Mau pensiun umur 40? Beli rumah 10 tahun lagi? Nexora bisa mensimulasikan berbagai skenario keuangan masa depanmu."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19.4 15C19.1277 15.6171 19.2583 16.3378 19.73 16.82L19.79 16.88C20.1656 17.2554 20.3766 17.7644 20.3766 18.295C20.3766 18.8256 20.1656 19.3346 19.79 19.71C19.4146 20.0856 18.9056 20.2966 18.375 20.2966C17.8444 20.2966 17.3354 20.0856 16.96 19.71L16.9 19.65C16.4178 19.1783 15.6971 19.0477 15.08 19.32C14.4755 19.5791 14.0826 20.1724 14.08 20.83V21C14.08 22.1046 13.1846 23 12.08 23C10.9754 23 10.08 22.1046 10.08 21V20.91C10.0647 20.2295 9.64778 19.6295 9.02 19.38C8.40274 19.1076 7.68207 19.2382 7.2 19.71L7.14 19.77C6.76458 20.1456 6.25559 20.3566 5.725 20.3566C5.19441 20.3566 4.68542 20.1456 4.31 19.77C3.93442 19.3946 3.72338 18.8856 3.72338 18.355C3.72338 17.8244 3.93442 17.3154 4.31 16.94L4.37 16.88C4.84172 16.3978 4.97231 15.6771 4.7 15.06C4.44094 14.4555 3.84758 14.0626 3.19 14.06H3C1.89543 14.06 1 13.1646 1 12.06C1 10.9554 1.89543 10.06 3 10.06H3.09C3.77052 10.0447 4.37049 9.62776 4.62 9C4.89237 8.38274 4.76178 7.66207 4.29 7.18L4.23 7.12C3.85442 6.74458 3.64338 6.23559 3.64338 5.705C3.64338 5.17441 3.85442 4.66542 4.23 4.29C4.60542 3.91442 5.11441 3.70338 5.645 3.70338C6.17559 3.70338 6.68458 3.91442 7.06 4.29L7.12 4.35C7.60217 4.82172 8.32283 4.95231 8.94 4.68H9C9.60447 4.41906 9.99737 3.8257 10 3.17V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3V3.09C14.0026 3.7467 14.3955 4.33994 15 4.6C15.6173 4.87231 16.3378 4.74172 16.82 4.27L16.88 4.21C17.2554 3.83442 17.7644 3.62338 18.295 3.62338C18.8256 3.62338 19.3346 3.83442 19.71 4.21C20.0856 4.58542 20.2966 5.09441 20.2966 5.625C20.2966 6.15559 20.0856 6.66458 19.71 7.04L19.65 7.1C19.1783 7.58217 19.0477 8.30283 19.32 8.92V9C19.5791 9.60447 20.1724 9.99737 20.83 10H21C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14H20.91C20.2533 14.0026 19.6601 14.3955 19.4 15Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "🧠 Insight Emosi + Uang",
      description: "AI kami mengenali pola emosimu saat berbelanja. Karena keuangan bukan hanya tentang angka, tapi juga perasaan."
    }
  ];

  return (
    <section id="features" className="section" ref={sectionRef}>
      <div className="container">
        <div 
          ref={headingRef} 
          className={`text-center mb-12 fade-in ${isHeadingVisible ? 'visible' : ''}`}
        >
          <p className="subtitle">Fitur Unggulan</p>
          <h2>Yang Bikin Nexora <span className="gradient-text">Berbeda</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Bukan sekedar aplikasi keuangan biasa. Nexora menggunakan AI untuk memberikan pengalaman pengelolaan uang yang personal.
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;