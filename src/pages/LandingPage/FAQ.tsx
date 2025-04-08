import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '../../components/hooks/useIntersectionObserver';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay?: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, delay = 0 }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef);

  return (
    <div 
      ref={itemRef} 
      className={`faq-item fade-in ${isVisible ? 'visible' : ''}`} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="faq-question" onClick={onClick}>
        <h3>{question}</h3>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const isSectionVisible = useIntersectionObserver(sectionRef);
  const isHeadingVisible = useIntersectionObserver(headingRef);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Nexora gratis atau berbayar?",
      answer: "Nexora memiliki versi gratis dengan fitur dasar, dan versi berbayar (Premium) dengan fitur AI yang lebih canggih. Versi Premium dibanderol Rp 49.000/bulan atau Rp 499.000/tahun."
    },
    {
      question: "Aman gak data keuangan saya?",
      answer: "Keamanan data adalah prioritas kami. Nexora menggunakan enkripsi end-to-end untuk melindungi data keuanganmu. Kami tidak pernah menjual data pengguna ke pihak ketiga dan kamu dapat menghapus data kapan saja."
    },
    {
      question: "Saya gaptek, bisa pakai Nexora?",
      answer: "Tentu! Nexora dirancang untuk semua tingkat kemampuan teknologi. Interface-nya sederhana dan intuitif. Kamu hanya perlu mengambil foto struk atau mengetikkan pertanyaan, AI kami yang mengurus sisanya."
    },
    {
      question: "Bagaimana cara menghubungkan rekening bank ke Nexora?",
      answer: "Nexora terintegrasi dengan sebagian besar bank di Indonesia melalui teknologi open banking yang aman. Kamu cukup login melalui portal bank dan berikan izin akses. Alternatifnya, kamu bisa mengupload file CSV atau menginput transaksi secara manual."
    },
    {
      question: "Apakah Nexora bisa digunakan untuk keuangan bisnis?",
      answer: "Saat ini Nexora fokus pada keuangan personal, tapi kami sedang mengembangkan versi bisnis untuk UKM yang akan diluncurkan dalam beberapa bulan ke depan. Hubungi tim support untuk informasi lebih lanjut."
    }
  ];

  return (
    <section ref={sectionRef} id="faq" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div 
          ref={headingRef} 
          className={`text-center mb-12 fade-in ${isHeadingVisible ? 'visible' : ''}`}
        >
          <p className="subtitle">FAQ</p>
          <h2>Pertanyaan yang <span className="gradient-text">Sering Diajukan</span></h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

