const Footer = () => {
  return (
    <footer style={{
      background: '#050505',
      padding: '80px 0 30px',
      borderTop: '1px solid rgba(200,138,101,0.08)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px',
        }}>
          <div>
            <div style={{
              fontSize: '32px',
              fontWeight: 700,
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '5px',
              background: 'linear-gradient(135deg, #C88A65, #E8C4A8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '15px',
            }}>
              BAWAS
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '13px',
              lineHeight: 1.8,
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
            }}>
              Premium beauty, skincare, and lifestyle products for the modern individual.
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: '11px',
              letterSpacing: '4px',
              color: '#C88A65',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif',
              marginBottom: '25px',
              fontWeight: 500,
            }}>
              Quick Links
            </h4>
            {['Categories', 'Featured', 'About', 'Gallery', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  marginBottom: '12px',
                  fontSize: '13px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 300,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.target.style.color = '#C88A65'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{
              fontSize: '11px',
              letterSpacing: '4px',
              color: '#C88A65',
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif',
              marginBottom: '25px',
              fontWeight: 500,
            }}>
              Connect
            </h4>
            <a href="https://wa.me/2348078024694" target="_blank" className="btn-luxury" style={{ padding: '14px 28px', fontSize: '10px' }}>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '30px',
          textAlign: 'center',
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: '12px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 300,
            letterSpacing: '2px',
          }}>
            © 2026 BAWAS HOUSE OF BEAUTY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;