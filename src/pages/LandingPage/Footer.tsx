import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--bg-secondary)', 
      padding: 'var(--space-8) 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="logo" style={{ marginBottom: 'var(--space-4)', display: 'inline-block' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Nexora
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
              Solusi pengelolaan keuangan personal dengan bantuan AI untuk keputusan finansial yang lebih baik setiap harinya.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Menu</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}><a href="#hero" className="nav-link">Beranda</a></li>
              <li style={{ marginBottom: 'var(--space-2)' }}><a href="#features" className="nav-link">Fitur</a></li>
              <li style={{ marginBottom: 'var(--space-2)' }}><a href="#demo" className="nav-link">Demo</a></li>
              <li><a href="#testimonials" className="nav-link">Testimoni</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Perusahaan</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}><a href="#" className="nav-link">Tentang</a></li>
              <li style={{ marginBottom: 'var(--space-2)' }}><a href="#" className="nav-link">Blog</a></li>
              <li style={{ marginBottom: 'var(--space-2)' }}><a href="#" className="nav-link">Karir</a></li>
              <li><a href="#" className="nav-link">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} className="hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} className="hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.01006C22.0424 3.68553 20.9821 4.20017 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} className="hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }} className="hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
            <div style={{ marginTop: 'var(--space-6)' }}>
              <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Download App</h4>
              <div className="flex gap-4 flex-wrap">
                <a href="#" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: 'var(--space-2) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.178L18.01 21.928L16.695 15.218L22 10.627L15.114 10.0145L12 3.80078L8.88599 10.0145L2 10.627L7.30499 15.218L5.98999 21.928L12 18.178Z" fill="currentColor"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', opacity: 0.7 }}>GET IT ON</div>
                    <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-semibold)' }}>Google Play</div>
                  </div>
                </a>
                <a href="#" style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: 'var(--space-2) var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0461 12.7932C17.0612 12.1051 17.2213 11.4679 17.5259 10.8835C17.8311 10.2984 18.2511 9.80662 18.7875 9.40791C18.3811 8.84492 17.8621 8.41803 17.2293 8.12673C16.5971 7.83503 15.9092 7.68428 15.1667 7.68428C13.9987 7.68428 13.0697 8.09907 12.3787 8.92955C11.6886 9.76044 11.3428 10.7891 11.3428 12.0148C11.3428 13.2595 11.6886 14.2973 12.3787 15.1272C13.0697 15.9578 13.9987 16.3726 15.1667 16.3726C15.9649 16.3726 16.6447 16.1944 17.2072 15.838C17.7697 15.4822 18.2762 14.9385 18.7256 14.2076H15.1667V12.7932H17.0461ZM21.7856 12.7932H20.3807V14.2076H18.9759V15.6219H20.3807V17.0362H21.7856V15.6219H23.1904V14.2076H21.7856V12.7932ZM10.3158 8.57216V9.99644H7.08971C7.29116 9.50468 7.59532 9.12206 8.00128 8.84492C8.40725 8.56778 8.87112 8.42961 9.39183 8.42961C9.64237 8.42961 9.88162 8.47015 10.1109 8.55164C10.3402 8.63272 10.5409 8.73816 10.3158 8.57216ZM7.05089 12.0148C7.05089 12.5253 7.10908 13.0137 7.22547 13.4803H10.3158V11.9852H8.75317C8.72911 11.7975 8.71719 11.6145 8.71719 11.4359C8.71719 11.2579 8.72911 11.0895 8.75317 10.9302H10.3158V9.49494H7.22547C7.10908 9.96152 7.05089 10.45 7.05089 10.9605V12.0148ZM9.39183 15.6219C8.87112 15.6219 8.40725 15.4834 8.00128 15.2063C7.59532 14.9292 7.29116 14.5435 7.08971 14.0517H10.3158V15.4763C10.5465 15.5763 10.3505 15.6219 10.1266 15.6826C9.90284 15.7429 9.6579 15.6219 9.39183 15.6219ZM4.36932 7.99374C3.81 8.56778 3.3756 9.24735 3.06796 10.0327C2.75991 10.8176 2.60632 11.662 2.60632 12.5662C2.60632 13.4703 2.75991 14.3151 3.06796 15.1C3.3756 15.8849 3.81 16.5648 4.36932 17.1388C4.92865 17.7128 5.5904 18.1573 6.35509 18.4721C7.11978 18.7867 7.93974 18.9443 8.81496 18.9443C9.69018 18.9443 10.5098 18.7867 11.2745 18.4721C12.0392 18.1573 12.701 17.7128 13.2603 17.1388C13.8196 16.5648 14.2541 15.8849 14.5617 15.1C14.8697 14.3151 15.0234 13.4703 15.0234 12.5662C15.0234 11.662 14.8697 10.8176 14.5617 10.0327C14.2541 9.24735 13.8196 8.56778 13.2603 7.99374C12.701 7.41971 12.0392 6.97532 11.2745 6.66057C10.5098 6.34583 9.69018 6.18804 8.81496 6.18804C7.93974 6.18804 7.11978 6.34583 6.35509 6.66057C5.5904 6.97532 4.92865 7.41971 4.36932 7.99374Z" fill="currentColor"/>
                  </svg>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', opacity: 0.7 }}>Download on</div>
                    <div style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--font-semibold)' }}>App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          marginTop: 'var(--space-8)',
          paddingTop: 'var(--space-4)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="nav-link" style={{ fontSize: 'var(--text-sm)' }}>Privasi</a>
            <a href="#" className="nav-link" style={{ fontSize: 'var(--text-sm)' }}>Syarat & Ketentuan</a>
            <a href="#" className="nav-link" style={{ fontSize: 'var(--text-sm)' }}>Kebijakan Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;