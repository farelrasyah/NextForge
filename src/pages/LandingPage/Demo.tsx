import React, { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../components/hooks/useIntersectionObserver';

const Demo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  const isSectionVisible = useIntersectionObserver(sectionRef);
  const isHeadingVisible = useIntersectionObserver(headingRef);
  const isDemoVisible = useIntersectionObserver(demoRef);

  // Chat demo state
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const conversation = [
    { type: 'ai', text: 'Halo! Ada yang bisa Nexora bantu hari ini?' },
    { type: 'user', text: 'Bisakah aku beli motor dalam 6 bulan ke depan?' },
    { type: 'ai', text: 'Berdasarkan pola pengeluaranmu, jika kamu menabung Rp 1.2 juta per bulan, kamu bisa mengumpulkan DP motor dalam 6 bulan.' },
    { type: 'user', text: 'Apa yang harus aku kurangi agar bisa menabung segitu?' },
    { type: 'ai', text: 'Aku melihat pengeluaran untuk makanan online dan hiburan bisa dikurangi 30%. Ini akan memberikanmu tambahan Rp 800ribu/bulan untuk ditabung.' },
  ];

  // Progress the chat demo
  useEffect(() => {
    if (isDemoVisible && currentStep < conversation.length - 1) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        
        // Show typing indicator for a while
        setTimeout(() => {
          setIsTyping(false);
          setCurrentStep(prev => prev + 1);
        }, 1500);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isDemoVisible, currentStep]);

  return (
    <section id="demo" className="demo-section" ref={sectionRef}>
      <div className="container">
        <div 
          ref={headingRef}
          className={`text-center mb-12 fade-in ${isHeadingVisible ? 'visible' : ''}`}
        >
          <p className="subtitle">Lihat Langsung</p>
          <h2>Gimana <span className="gradient-text">Nexora</span> Membantumu Setiap Hari</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Nexora tidak hanya melacak pengeluaranmu, tapi juga memberikan saran cerdas sesuai dengan pola keuanganmu.
          </p>
        </div>

        <div 
          ref={demoRef}
          className={`fade-in ${isDemoVisible ? 'visible' : ''}`}
        >
          <div className="ai-chat-demo" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="chat-header">
              <div className="chat-avatar">N</div>
              <div>
                <h4 style={{ margin: '0', fontSize: 'var(--text-lg)' }}>Nexora AI</h4>
                <p style={{ margin: '0', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  Asisten keuangan pintar
                </p>
              </div>
            </div>
            
            <div className="chat-body" style={{ height: '400px' }}>
              {conversation.slice(0, currentStep + 1).map((message, index) => (
                <div 
                  key={index}
                  className={`chat-message ${message.type === 'user' ? 'user-message' : 'ai-message'}`}
                >
                  {message.text}
                </div>
              ))}
              
              {isTyping && (
                <div className="chat-message ai-message">
                  <div className="typing-indicator">
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                    <div className="typing-dot"></div>
                  </div>
                </div>
              )}
              
              {currentStep >= conversation.length - 1 && (
                <div className="demo-screen" style={{ margin: '20px 0' }}>
                  <div style={{ padding: '16px' }}>
                    <h4 style={{ margin: '0 0 8px 0', fontSize: 'var(--text-lg)' }}>Simulasi Target Tabungan</h4>
                    <div style={{ 
                      width: '100%', 
                      height: '6px', 
                      backgroundColor: 'rgba(59, 130, 246, 0.2)', 
                      borderRadius: 'var(--radius-full)',
                      marginBottom: '8px'
                    }}>
                      <div style={{ 
                        width: '65%', 
                        height: '100%', 
                        backgroundColor: 'var(--accent-color)', 
                        borderRadius: 'var(--radius-full)' 
                      }}></div>
                    </div>
                    <div className="flex justify-between" style={{ fontSize: 'var(--text-sm)' }}>
                      <span className="text-blue">Rp 7.800.000</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Rp 12.000.000</span>
                    </div>
                    <p style={{ margin: '16px 0 8px 0', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                      Estimasi pencapaian target:
                    </p>
                    <p style={{ margin: '0', fontSize: 'var(--text-lg)', fontWeight: 'var(--font-medium)' }}>
                      <span className="text-green">1 bulan 12 hari</span> lagi
                    </p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="chat-footer">
              <input 
                type="text" 
                className="chat-input"
                placeholder="Tulis pesan..."
                readOnly
              />
              <button className="chat-send-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;