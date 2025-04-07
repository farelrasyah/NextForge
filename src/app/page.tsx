'use client';

import React, { useEffect } from 'react';
import Navbar from '../pages/LandingPage/Navbar';
import Hero from '../pages/LandingPage/Hero';
import Features from '../pages/LandingPage/Features';
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
      <Features />
      
      {/* Testimonials Section (simplified) */}
      <section id="testimonials" className="section" style={{ background: 'rgba(30, 41, 59, 0.3)' }}>
        <div className="container">
          <div className="text-center mb-12 fade-in visible">
            <p className="subtitle">Testimonials</p>
            <h2>What Our <span className="gradient-text">Clients Say</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="feature-card fade-in visible">
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>
                "NextForge transformed our online presence. The speed and design of our website have significantly improved user engagement and conversion rates."
              </p>
              <div className="flex items-center gap-4">
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 'var(--text-lg)'
                }}>
                  JS
                </div>
                <div>
                  <p style={{ fontWeight: 'var(--font-medium)', margin: 0 }}>John Smith</p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: 'var(--text-sm)' }}>CEO, TechStart</p>
                </div>
              </div>
            </div>
            
            <div className="feature-card fade-in visible">
              <p style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>
                "The customization options are incredible. We were able to create exactly what we envisioned without compromising on performance or design."
              </p>
              <div className="flex items-center gap-4">
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 'var(--text-lg)'
                }}>
                  AR
                </div>
                <div>
                  <p style={{ fontWeight: 'var(--font-medium)', margin: 0 }}>Alex Rivera</p>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: 'var(--text-sm)' }}>Designer, CreativeStudio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L1 12L12 22L23 12L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 22V12M12 12L1 12M12 12L23 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                NextForge
              </a>
              <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                Building the future of web development with modern tools and techniques.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#hero" className="nav-link">Home</a></li>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#features" className="nav-link">Features</a></li>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#testimonials" className="nav-link">Testimonials</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-4)' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#" className="nav-link">Privacy Policy</a></li>
                <li style={{ marginBottom: 'var(--space-2)' }}><a href="#" className="nav-link">Terms of Service</a></li>
                <li><a href="#" className="nav-link">Cookie Policy</a></li>
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
            <p>© {new Date().getFullYear()} NextForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}