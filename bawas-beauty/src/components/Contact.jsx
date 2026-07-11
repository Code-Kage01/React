const Contact = () => {
  return (
    <section id="contact" style={{
      background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)',
      padding: '140px 0',
      position: 'relative',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '80px',
        }}>
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
                Get in Touch
              </span>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '-1px',
                marginBottom: '50px',
              }}>
                Visit Us
              </h2>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s', marginBottom: '35px' }}>
              <div style={{
                fontSize: '11px',
                letterSpacing: '4px',
                color: '#C88A65',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '12px',
              }}>
                📍 Address
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontFamily: 'Montserrat, sans-serif', fontWeight: 300, fontSize: '15px' }}>
                Dutse Modern Market Extension 111<br />
                Army Scheme, Block 13, Shop 4<br />
                Kubwa, Bwari, FCT
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.3s', marginBottom: '35px' }}>
              <div style={{
                fontSize: '11px',
                letterSpacing: '4px',
                color: '#C88A65',
                textTransform: 'uppercase',
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: '12px',
              }}>
                📞 Phone
              </div>
              <a href="https://wa.me/2348078024694" target="_blank" style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '24px',
                fontFamily: 'Playfair Display, serif',
                transition: 'color 0.3s',
              }}
                onMouseEnter={e => e.target.style.color = '#C88A65'}
                onMouseLeave={e => e.target.style.color = 'white'}
              >
                0807 802 4694
              </a>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <a href="https://wa.me/2348078024694" target="_blank" className="btn-luxury">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <div style={{
              width: '100%',
              height: '450px',
              border: '1px solid rgba(200,138,101,0.15)',
              overflow: 'hidden',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9999999999995!2d7.3500000!3d9.1500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0b0b0b0b0b%3A0x0!2sKubwa%2C%20Abuja!5e0!3m2!1sen!2sng!4v1697000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;