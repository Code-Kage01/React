const About = () => {
  return (
    <section id="about" style={{
      background: '#0d0d0d',
      padding: '140px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative diagonal lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(200,138,101,0.015) 50px, rgba(200,138,101,0.015) 51px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}>
          <div className="reveal" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              width: '100%',
              height: '100%',
              border: '2px solid rgba(200,138,101,0.2)',
            }} />
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '3/4',
            }}>
              <img
                src="/img/ceo.jpeg"
                alt="About Bawas"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>

          <div>
            <div className="reveal">
              <div style={{ width: '50px', height: '1px', background: '#C88A65', marginBottom: '25px' }} />
              <span style={{
                fontSize: '11px',
                letterSpacing: '5px',
                color: '#C88A65',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                display: 'block',
                marginBottom: '15px',
              }}>
                Our Story
              </span>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '-1px',
                marginBottom: '30px',
                lineHeight: 1.15,
              }}>
                The Bawas <br />
                <span style={{
                  background: 'linear-gradient(135deg, #C88A65, #E8C4A8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                }}>Difference</span>
              </h2>
            </div>

            <p className="reveal" style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              marginBottom: '40px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              transitionDelay: '0.2s',
            }}>
              At Bawas House of Beauty, we believe luxury is in the details. 
              Every product is carefully selected to ensure the highest quality, 
              from our organic skincare to handcrafted jewelry pieces.
            </p>

            <div className="reveal" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              marginBottom: '40px',
              transitionDelay: '0.3s',
            }}>
              {[
                { icon: '✦', title: 'Premium', desc: 'Quality' },
                { icon: '◆', title: 'Natural', desc: 'Ingredients' },
                { icon: '◈', title: 'Trusted', desc: 'Service' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', color: '#C88A65', marginBottom: '10px' }}>{item.icon}</div>
                  <div style={{ color: 'white', fontSize: '16px', fontFamily: 'Playfair Display, serif', marginBottom: '5px' }}>{item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', fontFamily: 'Montserrat, sans-serif', letterSpacing: '2px', textTransform: 'uppercase' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <a href="https://wa.me/2348078024694" target="_blank" className="btn-luxury">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;