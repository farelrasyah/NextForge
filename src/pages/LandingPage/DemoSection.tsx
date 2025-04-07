import React, { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../components/useIntersectionObserver';

const DemoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  
  const isSectionVisible = useIntersectionObserver(sectionRef);
  const isHeadingVisible = useIntersectionObserver(headingRef);
  const isDemoVisible = useIntersectionObserver(demoRef);

  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [visibleText, setVisibleText] = useState('');
  const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

  const demoSteps = [
    {
      question: "Berapa budget makan yang realistis untuk bulan ini?",
      answer: "Berdasarkan pola pengeluaranmu 3 bulan terakhir, budget makan yang realistis adalah Rp 1.200.000 (sekitar 20% dari pendapatanmu). Ini sudah termasuk makan di luar 2x seminggu.",
      chart: {
        title: "Perbandingan Budget Makanan",
        data: [
          { label: "Bulan Lalu", value: "Rp 1.450.000", color: "#ef4444" },
          { label: "Rekomendasi", value: "Rp 1.200.000", color: "#10b981" },
          { label: "Potensi Tabungan", value: "Rp 250.000", color: "#3b82f6" }
        ]
      }
    },
    {
      question: "Kalau aku mau beli motor cash dalam 6 bulan, berapa yang harus ditabung perbulan?",
      answer: "Untuk motor seharga Rp 25.000.000 dalam 6 bulan, kamu perlu menabung Rp 4.166.667 per bulan. Berdasarkan analisa cashflow-mu saat ini, kamu perlu memangkas pengeluaran non-esensial sebesar 15% untuk mencapainya.",
      chart: {
        title: "Simulasi Tabungan Motor",
        data: [
          { label: "Target", value: "Rp 25.000.000", color: "#3b82f6" },
          { label: "Tabungan Bulanan", value: "Rp 4.166.667", color: "#10b981" },
          { label: "Pengurangan Non-Esensial", value: "15%", color: "#f59e0b" }
        ]
      }
    },
    {
      question: "Apakah aku bisa pensiun di umur 45?",
      answer: "Berdasarkan pendapatanmu saat ini dan target dana pensiun sebesar Rp 3.5 miliar, kamu perlu menabung 30% dari pendapatan dan investasi dengan return minimal 10% per tahun untuk pensiun di umur 45. Saat ini kamu baru menyisihkan 10%.",
      chart: {
        title: "Proyeksi Dana Pensiun",
        data: [
          { label: "Target Dana", value: "Rp 3.500.000.000", color: "#3b82f6" },
          { label: "Tabungan Saat Ini", value: "10% pendapatan", color: "#ef4444" },
          { label: "Tabungan Minimal", value: "30% pendapatan", color: "#10b981" }
        ]
      }
    }
  ];

  const typeText = (text: string) => {
    setIsTyping(true);
    setVisibleText('');
    
    let i = 0;
    const typing = setInterval(() => {
      setVisibleText((prev) => prev + text.charAt(i));
      i++;
      
      if (i === text.length) {
        clearInterval(typing);
        setIsTyping(false);
      }
    }, 20); // Speed of typing
    
    setTypingTimeout(typing);
    
    return () => {
      if (typing) clearInterval(typing);
    };
  };

  useEffect(() => {
    if (isDemoVisible) {
      const timer = setTimeout(() => {
        typeText(demoSteps[currentStep].answer);
      }, 1000);
      
      return () => {
        clearTimeout(timer);
        if (typingTimeout) clearInterval(typingTimeout);
      };
    }
  }, [currentStep, isDemoVisible]);

  const handleNextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
    }
  };

  return (
    <section ref={sectionRef} id="demo" className="demo-section">
      <div className="container">
        <div 
          ref={headingRef} 
          className={`text-center mb-12 fade-in ${isHeadingVisible ? 'visible' : ''}`}
        >
          <p className="subtitle">Demo Interaktif</p>
          <h2>Lihat Gimana Nexora <span className="gradient-text">Membantumu</span> Setiap Hari</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Berikut adalah contoh bagaimana asisten AI Nexora membantu menjawab pertanyaan keuangan harianmu.
          </p>
        </div>
        
        <div 
          ref={demoRef}
          className={`fade-in ${isDemoVisible ? 'visible' : ''}`}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <div className="ai-chat-demo">
            <div className="chat-header">
              <div className="chat-avatar">
                <span>AI</span>
              </div>
              <div>
                <h4 style={{ margin: 0 }}>Nexora Assistant</h4>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  Online
                </p>
              </div>
            </div>
            
            <div className="chat-body" style={{ padding: 'var(--space-4)' }}>
              <div className="user-message chat-message">
                <p style={{ margin: 0 }}>{demoSteps[currentStep].question}</p>
              </div>
              
              <div className="ai-message chat-message">
                {isTyping ? (
                  <>
                    <p style={{ margin: 0 }}>{visibleText}</p>
                    <div className="typing-indicator" style={{ marginTop: 'var(--space-2)' }}>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  </>
                ) : (
                  <p style={{ margin: 0 }}>{visibleText}</p>
                )}
              </div>
              
              {!isTyping && visibleText === demoSteps[currentStep].answer && (
                <div 
                  className="demo-screen" 
                  style={{ 
                    marginTop: 'var(--space-4)',
                    padding: 'var(--space-4)',
                    animation: 'fadeIn 0.5s forwards'
                  }}
                >
                  <h5 style={{ marginTop: 0 }}>{demoSteps[currentStep].chart.title}</h5>
                  <div>
                    {demoSteps[currentStep].chart.data.map((item, index) => (
                      <div 
                        key={index} 
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: 'var(--space-2)',
                          padding: 'var(--space-2)',
                          borderLeft: `3px solid ${item.color}`,
                          background: 'rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <span>{item.label}</span>
                        <span style={{ fontWeight: 'var(--font-semibold)', color: item.color }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="chat-footer">
              <input 
                type="text" 
                className="chat-input"
                placeholder="Ketik pertanyaanmu..." 
                disabled
              />
              <button 
                className="chat-send-btn"
                onClick={handleNextStep}
              >
                Contoh Lain
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;