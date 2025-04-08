import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '../../components/hooks/useIntersectionObserver';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const isSectionVisible = useIntersectionObserver(sectionRef);
  const isHeadingVisible = useIntersectionObserver(headingRef);
  const isCarouselVisible = useIntersectionObserver(carouselRef);
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Buatku yang freelancer, Nexora kayak partner hidup yang bantu aku ngatur penghasilan gak tetap. Sejak pakai Nexora, aku jadi lebih tenang ngadepin bulan-bulan sepi job.",
      name: "Dinda Pratiwi",
      age: "26",
      job: "Desainer Freelance",
      avatar: "DP"
    },
    {
      quote: "Gue baru sadar gue jajan Rp 1,5 juta di GoFood bulan lalu. Nexora ngebuka mata banget dan kasih rekomendasi praktis yang nggak terasa menghakimi.",
      name: "Farhan Rizky",
      age: "23",
      job: "Content Creator",
      avatar: "FR"
    },
    {
      quote: "Dulu aku suka impulsif belanja online. Sekarang sebelum checkout, aku cek dulu Nexora. AI-nya langsung kasih tau dampaknya ke target tabungan buat DP rumah.",
      name: "Annisa Widya",
      age: "29",
      job: "Marketing Manager",
      avatar: "AW"
    },
    {
      quote: "Sebagai pemula investasi, Nexora bantu aku paham berapa yang aman diinvestasikan tiap bulan tanpa ganggu kebutuhan sehari-hari. Simple banget!",
      name: "Budi Santoso",
      age: "31",
      job: "Software Engineer",
      avatar: "BS"
    }
  ];
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section" ref={sectionRef}>
      <div className="container">
        <div 
          ref={headingRef} 
          className={`text-center mb-12 fade-in ${isHeadingVisible ? 'visible' : ''}`}
        >
          <p className="subtitle">Testimonial</p>
          <h2>Yang Mereka Katakan Tentang <span className="gradient-text">Nexora</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Pengalaman nyata dari pengguna Nexora dalam mengelola keuangan mereka sehari-hari.
          </p>
        </div>
        
        <div 
          ref={carouselRef}
          className={`testimonial-carousel fade-in ${isCarouselVisible ? 'visible' : ''}`}
        >
          <div 
            className="testimonial-track" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div style={{ fontSize: 'var(--text-4xl)', color: 'var(--accent-color)', opacity: 0.4, marginBottom: 'var(--space-2)' }}>
                    "
                  </div>
                  <p style={{ 
                    fontSize: 'var(--text-xl)', 
                    marginBottom: 'var(--space-6)',
                    fontStyle: 'italic'
                  }}>
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 'var(--text-lg)'
                    }}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p style={{ fontWeight: 'var(--font-medium)', margin: 0 }}>
                        {testimonial.name}, {testimonial.age}
                      </p>
                      <p style={{ 
                        color: 'var(--text-secondary)', 
                        margin: 0, 
                        fontSize: 'var(--text-sm)' 
                      }}>
                        {testimonial.job}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center" style={{ marginTop: 'var(--space-6)' }}>
            <button 
              onClick={prevSlide}
              className="btn btn-secondary"
              style={{ padding: 'var(--space-2)', minWidth: 'auto' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="testimonial-controls">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`testimonial-dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="btn btn-secondary"
              style={{ padding: 'var(--space-2)', minWidth: 'auto' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;