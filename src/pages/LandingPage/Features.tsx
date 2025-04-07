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
      title: "Responsive Design",
      description: "Create beautiful websites that work seamlessly on any device, from desktop to mobile."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Optimized for speed with next-generation performance that keeps your users engaged."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "SEO Optimized",
      description: "Built with best practices for search engines, helping your site rank higher and reach more users."
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
      title: "Easy Customization",
      description: "Tailor your website to your exact needs with our flexible and intuitive customization options."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Community Support",
      description: "Join a thriving community of developers and designers sharing knowledge and best practices."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 4V2M12 22V20M20 12H22M2 12H4M19.0711 19.0711L20.5 20.5M19.0711 4.92893L20.5 3.5M4.92893 19.0711L3.5 20.5M4.92893 4.92893L3.5 3.5" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Smart Automation",
      description: "Save time with intelligent automation features that streamline your workflow and boost productivity."
    }
  ];

  return (
    <section id="features" className="section" ref={sectionRef}>
      <div className="container">
        <div 
          ref={headingRef} 
          className={`text-center mb-12 fade-in ${isHeadingVisible ? 'visible' : ''}`}
        >
          <p className="subtitle">Features</p>
          <h2>Everything You Need to <span className="gradient-text">Create Amazing</span> Websites</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Our platform provides all the tools you need to create stunning, high-performance websites without the complexity.
          </p>
        </div>

        <div className="features-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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