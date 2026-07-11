const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(200,138,101,0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, rgba(200,138,101,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(200,138,101,0.04) 0%, transparent 50%)',
      }} />
      
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(200,138,101,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(200,138,101,0.02) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }} />

      <div className="animate-float" style={{
        position: 'absolute',
        top: '10%',
        right: '8%',
        width: '350px',
        height: '350px',
        border: '1px solid rgba(200,138,101,0.08)',
        borderRadius: '50%',
        animationDelay: '0s',
      }} />
      <div className="animate-float" style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '200px',
        height: '200px',
        border: '1px solid rgba(200,138,101,0.06)',
        borderRadius: '50%',
        animationDelay: '3s',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          <div>
            <div className="reveal" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 20px',
              border: '1px solid rgba(200,138,101,0.3)',
              marginBottom: '35px',
            }}>
              <span style={{ width: '6px', height: '6px', background: '#C88A65', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: '10px', letterSpacing: '4px', color: '#C88A65', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>
                Luxury Collection
              </span>
            </div>

            <h1 className="reveal" style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 700,
              color: 'white',
              lineHeight: 0.95,
              marginBottom: '25px',
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '-2px',
              transitionDelay: '0.2s',
            }}>
              The Essence<br />
              of <span style={{
                background: 'linear-gradient(135deg, #C88A65, #E8C4A8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Beauty</span>
            </h1>

            <p className="reveal" style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8,
              marginBottom: '45px',
              maxWidth: '480px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              transitionDelay: '0.3s',
            }}>
              Curated collections of premium skincare, artisanal fragrances, 
              and exquisite jewelry for the discerning individual.
            </p>

            <div className="reveal" style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
              transitionDelay: '0.4s',
            }}>
              <a href="#featured" className="btn-luxury">Explore Collection</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>

            <div className="reveal" style={{
              display: 'flex',
              gap: '50px',
              marginTop: '70px',
              paddingTop: '30px',
              borderTop: '1px solid rgba(200,138,101,0.12)',
              transitionDelay: '0.5s',
            }}>
              {[
                { number: '500+', label: 'Products' },
                { number: '1.2K+', label: 'Clients' },
                { number: '25+', label: 'Categories' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{
                    fontSize: '34px',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #C88A65, #E8C4A8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '5px',
                  }}>{stat.number}</div>
                  <div style={{ fontSize: '11px', letterSpacing: '3px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-image reveal" style={{
            display: 'flex',
            justifyContent: 'center',
            transitionDelay: '0.3s',
          }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              <div style={{
                position: 'absolute',
                top: '-25px',
                right: '-25px',
                width: '100%',
                height: '100%',
                border: '2px solid rgba(200,138,101,0.25)',
              }} />
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '3/4',
                boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
              }}>
                <img
                  src="/img/img4.jpeg"
                  alt="Luxury Beauty"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .hero-image { display: none !important; }
          section > div > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;