import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Categories', 'Featured', 'About', 'Gallery', 'Contact'];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.5s ease',
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(30px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,138,101,0.1)' : '1px solid transparent',
        padding: scrolled ? '12px 0' : '25px 0',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <div style={{
              fontSize: '30px',
              fontWeight: 700,
              fontFamily: 'Playfair Display, serif',
              letterSpacing: '4px',
              background: 'linear-gradient(135deg, #C88A65, #E8C4A8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
            }}>
              BAWAS
            </div>
            <div style={{
              fontSize: '9px',
              letterSpacing: '5px',
              color: 'rgba(200,138,101,0.6)',
              marginTop: '2px',
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase',
            }}>
              House of Beauty
            </div>
          </a>

          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            {links.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '11px',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 500,
                  transition: 'color 0.3s',
                  padding: '5px 0',
                }}
                onMouseEnter={e => e.target.style.color = '#C88A65'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
              >
                {link}
              </a>
            ))}
            <a href="https://wa.me/2348078024694" target="_blank" className="btn-luxury" style={{ padding: '12px 28px', fontSize: '10px' }}>
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              zIndex: 1001,
              display: 'none',
            }}
          >
            <div style={{
              width: '28px',
              height: '1.5px',
              background: '#C88A65',
              margin: '6px 0',
              transition: 'all 0.4s',
              transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <div style={{
              width: '28px',
              height: '1.5px',
              background: '#C88A65',
              margin: '6px 0',
              transition: 'all 0.4s',
              opacity: isOpen ? 0 : 1,
            }} />
            <div style={{
              width: '28px',
              height: '1.5px',
              background: '#C88A65',
              margin: '6px 0',
              transition: 'all 0.4s',
              transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>

        <div style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-100%',
          width: '100%',
          height: '100vh',
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(30px)',
          transition: 'right 0.6s cubic-bezier(0.77, 0.2, 0.05, 1)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '35px',
        }}>
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '32px',
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '4px',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="https://wa.me/2348078024694"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="btn-luxury"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: 'all 0.5s ease 0.5s',
              marginTop: '20px',
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;