'use client';

import React, { useEffect } from 'react';
import Navbar from '../pages/LandingPage/Navbar';
import Hero from '../pages/LandingPage/Hero';
import Features from '../pages/LandingPage/Features';
import ProblemSolution from '../pages/LandingPage/ProblemSolution';
import DemoSection from '../pages/LandingPage/DemoSection';
import Testimonials from '../pages/LandingPage/Testimonials';
import FAQ from '../pages/LandingPage/FAQ';
import Contact from '../pages/LandingPage/Contact';

// Import styles
import '../styles/typography.css';
import '../styles/LandingPage.css';

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(this: HTMLAnchorElement, e) {
          // Cleanup
        });
      });
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <DemoSection />
      <Testimonials />
      
      {/* CTA Section */}
      <section id="cta" className="section">
        <div className="container">
          <div className="text-center mb-8 fade-in visible">
            <h2>Gak Perlu Jago Finansial. <span className="gradient-text">Kamu Cuma Butuh Nexora</span>.</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', marginTop: 'var(--space-4)', marginBottom: 'var(--space-8)', color: 'var(--text-secondary)' }}>
              Mulai kelola keuanganmu dengan cara yang lebih cerdas dan mudah sekarang juga.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#login" className="btn btn-primary">
                Mulai Gratis
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#demo" className="btn btn-secondary">
                Lihat Contoh Penggunaan
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
      <Contact />
      
      {/* Footer */}
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
                Asisten AI personal untuk membantu mengelola keuanganmu dengan lebih cerdas dan efisien setiap hari.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Menu</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#hero" className="nav-link">Home</a></li>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#features" className="nav-link">Fitur</a></li>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#testimonials" className="nav-link">Testimoni</a></li>
                <li><a href="#faq" className="nav-link">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#" className="nav-link">Kebijakan Privasi</a></li>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#" className="nav-link">Syarat & Ketentuan</a></li>
                <li><a href="#" className="nav-link">Kebijakan Cookie</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Connect</h4>
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
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              
              <div style={{ marginTop: 'var(--space-8)' }}>
                <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Unduh Aplikasi</h4>
                <div className="flex gap-4">
                  <a href="#" className="btn btn-secondary" style={{ padding: 'var(--space-2) var(--space-3)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 18.178C14.6667 16.1507 16 14.4097 16 13C16 11.5903 14.6667 10.3333 12 9.33333C9.33333 10.3333 8 11.5903 8 13C8 14.4097 9.33333 16.1507 12 18.178Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.99709 7.93382C3.91543 9.36486 3.11345 10.9587 2.61147 12.658C3.25237 15.5593 5.21726 18.0048 7.99709 19.1938C11.0639 20.5019 14.6541 20.0465 17.2654 18.0334C19.8768 16.0204 21.2359 12.7133 20.7933 9.39521C19.7367 5.10535 15.8574 2.16798 11.4333 2.01382C8.14307 1.90656 4.99623 3.55869 3.09709 6.25382" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    App Store
                  </a>
                  <a href="#" className="btn btn-secondary" style={{ padding: 'var(--space-2) var(--space-3)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5 15.2499L7.65 21.4999C7.19 21.7599 6.69 21.9999 6.15 21.9999C5.56 21.9999 5.03 21.7899 4.56 21.4099C4.17 21.0799 3.85 20.6499 3.64 20.1399L15.3 12.9999L20.5 15.2499Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15.3 12.9999L3.64 5.8599C3.85 5.3499 4.17 4.9199 4.56 4.5899C5.64 3.7499 7.09 3.7499 8.16 4.3299L20.5 10.7499V15.2499" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Play Store
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: 'var(--space-8)',
            paddingTop: 'var(--space-4)',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-sm)'
          }}>
            <p>© {new Date().getFullYear()} Nexora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}