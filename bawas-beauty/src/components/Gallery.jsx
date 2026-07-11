const images = [
  { src: '/img/imgs1.jpeg', size: 'tall' },
  { src: '/img/img4.jpeg', size: 'wide' },
  { src: '/img/imgs3.jpeg', size: 'normal' },
  { src: '/img/img5.jpeg', size: 'tall' },
  { src: '/img/WhatsApp Image 2026-06-13 at 20.45.12.jpeg', size: 'large' },
  { src: '/img/WhatsApp Image 2026-06-13 at 20.35.08.jpeg', size: 'normal' },
  { src: '/img/WhatsApp Image 2026-06-13 at 20.35.51.jpeg', size: 'wide' },
  { src: '/img/WhatsApp Image 2026-06-13 at 20.46.04.jpeg', size: 'tall' },
];

const Gallery = () => {
  return (
    <section id="gallery" style={{
      background: '#0a0a0a',
      padding: '140px 0',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(200,138,101,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ width: '50px', height: '1px', background: '#C88A65', margin: '0 auto 25px' }} />
          <span style={{
            fontSize: '11px',
            letterSpacing: '5px',
            color: '#C88A65',
            textTransform: 'uppercase',
            fontFamily: 'Montserrat, sans-serif',
            display: 'block',
            marginBottom: '15px',
          }}>
            Our Work
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 600,
            color: 'white',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '-1px',
          }}>
            Beauty Gallery
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '250px',
          gap: '15px',
        }}>
          {images.map((img, i) => {
            let gridStyle = {};
            if (img.size === 'tall') gridStyle = { gridRow: 'span 2' };
            if (img.size === 'wide') gridStyle = { gridColumn: 'span 2' };
            if (img.size === 'large') gridStyle = { gridColumn: 'span 2', gridRow: 'span 2' };

            return (
              <div key={i} className="reveal" style={{
                ...gridStyle,
                overflow: 'hidden',
                cursor: 'pointer',
                transitionDelay: `${i * 0.1}s`,
              }}>
                <img
                  src={img.src}
                  alt={`Gallery ${i + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 180px !important;
          }
          section > div > div > div:last-child > div[style*="span 2"] {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;