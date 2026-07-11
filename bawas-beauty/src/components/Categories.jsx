const categories = [
  { name: 'Skincare', count: '24 Products', image: '/img/img1.jpeg' },
  { name: 'Fragrances', count: '18 Products', image: '/img/img6.jpeg' },
  { name: 'Jewelry', count: '32 Products', image: '/img/WhatsApp Image 2026-06-13 at 20.45.35.jpeg' },
  { name: 'Body Care', count: '15 Products', image: '/img/WhatsApp Image 2026-06-13 at 20.40.03.jpeg' },
];

const Categories = () => {
  return (
    <section id="categories" style={{
      background: '#0d0d0d',
      padding: '140px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(45deg, rgba(200,138,101,0.02) 0px, rgba(200,138,101,0.02) 1px, transparent 1px, transparent 10px)',
        opacity: 0.5,
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
            Shop by Category
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 600,
            color: 'white',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '-1px',
          }}>
            Curated Collections
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
        }}>
          {categories.map((cat, i) => (
            <div key={i} className="reveal" style={{
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              aspectRatio: '3/4',
              transitionDelay: `${i * 0.15}s`,
            }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1.08)';
                e.currentTarget.querySelector('.overlay').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                e.currentTarget.querySelector('.overlay').style.opacity = '0';
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              />
              <div className="overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)',
                opacity: 0,
                transition: 'opacity 0.5s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '40px',
              }}>
                <h3 style={{
                  fontSize: '32px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '8px',
                }}>
                  {cat.name}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: '#C88A65',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}>
                  {cat.count} →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;