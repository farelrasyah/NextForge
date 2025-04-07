import React, { useRef } from 'react';
import { useIntersectionObserver } from '../../components/useIntersectionObserver';

interface ProblemCardProps {
  problem: string;
  solution: string;
  delay?: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, solution, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef);

  return (
    <div 
      ref={cardRef} 
      className={`problem-card fade-in ${isVisible ? 'visible' : ''}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="problem-header">
        <div className="problem-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4 style={{ margin: 0 }}>Masalah</h4>
      </div>
      <p className="problem-content">{problem}</p>
      
      <div className="problem-header">
        <div className="solution-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4 style={{ margin: 0 }}>Solusi Nexora</h4>
      </div>
      <p className="solution-content">{solution}</p>
    </div>
  );
};

const ProblemSolution: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const isSectionVisible = useIntersectionObserver(sectionRef);
  const isHeadingVisible = useIntersectionObserver(headingRef);

  const problems = [
    {
      problem: "Tiap akhir bulan selalu boncos, gak jelas ke mana duitnya.",
      solution: "Nexora track semua otomatis, dan kasih ringkasan harian yang mudah dimengerti."
    },
    {
      problem: "Gak ngerti cara buat anggaran yang realistis.",
      solution: "Nexora bantu buat budget mingguan hanya dengan 3 pertanyaan sederhana."
    },
    {
      problem: "Mau nabung tapi selalu gagal.",
      solution: "Nexora simulasikan masa depan & bantu capai tujuan kecil dulu untuk membangun kebiasaan."
    },
    {
      problem: "Males catat pengeluaran tiap hari.",
      solution: "Foto struk, selesai. AI kami yang kerjain sisanya secara otomatis."
    }
  ];

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div 
          ref={headingRef} 
          className={`text-center mb-12 fade-in ${isHeadingVisible ? 'visible' : ''}`}
        >
          <p className="subtitle">Solusi untuk Masalahmu</p>
          <h2>Kamu Pernah Alami <span className="gradient-text">Ini?</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Masalah keuangan sehari-hari yang sering dialami dan bagaimana Nexora membantu menyelesaikannya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <ProblemCard 
              key={index} 
              problem={item.problem} 
              solution={item.solution}
              delay={index * 150} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;