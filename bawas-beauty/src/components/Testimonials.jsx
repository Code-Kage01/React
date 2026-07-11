const testimonials = [
  { name: 'Amina J.', role: 'Verified Buyer', text: 'The skincare products are incredible! My skin has never looked this radiant. Bawas is my secret weapon.' },
  { name: 'Chidi O.', role: 'Loyal Customer', text: 'Quality products and fast delivery. My go-to beauty store in Abuja. Highly recommended to everyone.' },
  { name: 'Fatima B.', role: 'Premium Client', text: 'Perfume oils last all day. I get compliments everywhere. The jewelry collection is absolutely stunning.' },
];

const Testimonials = () => {
  return (
    <section style={{
      background: '#0d0d0d',
      padding: '140px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(200,138,101,0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
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
            Testimonials
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 600,
            color: 'white',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '-1px',
          }}>
            What Clients Say
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}>
          {testimonials.map((t, i) => (
            <div key={i} className="reveal" style={{
              background: '#111111',
              border: '1px solid rgba(200,138,101,0.08)',
              padding: '50px 35px',
              position: 'relative',
              transitionDelay: `${i * 0.15}s`,
              transition: 'all 0.4s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(200,138,101,0.3)';
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(200,138,101,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                fontSize: '60px',
                fontFamily: 'Playfair Display, serif',
                color: 'rgba(200,138,101,0.15)',
                position: 'absolute',
                top: '20px',
                left: '25px',
                lineHeight: 1,
              }}>
                &ldquo;
              </div>
              <div style={{ display: 'flex', gap: '5px', marginBottom: '25px', marginTop: '10px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#C88A65', fontSize: '16px' }}>★</span>
                ))}
              </div>
              <p style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.8,
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 300,
                marginBottom: '30px',
                fontStyle: 'italic',
              }}>
                "{t.text}"
              </p>
              <div style={{ borderTop: '1px solid rgba(200,138,101,0.1)', paddingTop: '20px' }}>
                <div style={{ color: 'white', fontSize: '18px', fontFamily: 'Playfair Display, serif', marginBottom: '5px' }}>
                  {t.name}
                </div>
                <div style={{ color: '#C88A65', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;