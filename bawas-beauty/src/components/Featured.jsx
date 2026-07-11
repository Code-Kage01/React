const products = [
  { name: 'Brightening Serum', price: '₦12,500', tag: 'Best Seller', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop' },
  { name: "Jam's Acne Soap", price: '₦1,500', tag: 'Popular', image: '/img/WhatsApp Image 2026-06-13 at 21.06.29.jpeg' },
  { name: 'Gold Earrings Set', price: '₦15,900', tag: 'Premium', image: '/img/WhatsApp Image 2026-06-13 at 20.45.35.jpeg' },
  { name: 'Perfume Oil', price: '₦8,500', tag: 'New', image: '/img/img6.jpeg' },
];

const Featured = () => {
  return (
    <section id="featured" style={{
      background: '#0a0a0a',
      padding: '140px 0',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(200,138,101,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ marginBottom: '80px' }}>
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
            Handpicked for You
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 600,
            color: 'white',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '-1px',
          }}>
            Featured Products
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
        }}>
          {products.map((product, i) => (
            <div key={i} className="reveal" style={{
              background: '#111111',
              border: '1px solid rgba(200,138,101,0.08)',
              transition: 'all 0.4s ease',
              cursor: 'pointer',
              transitionDelay: `${i * 0.15}s`,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.borderColor = 'rgba(200,138,101,0.3)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(200,138,101,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ overflow: 'hidden', aspectRatio: '1', position: 'relative' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  background: 'rgba(200,138,101,0.9)',
                  color: 'white',
                  padding: '6px 14px',
                  fontSize: '10px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: 'Montserrat, sans-serif',
                }}>
                  {product.tag}
                </span>
              </div>
              <div style={{ padding: '30px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '15px',
                }}>
                  {product.name}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '24px',
                    color: '#C88A65',
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: 700,
                  }}>
                    {product.price}
                  </span>
                  <a
                    href={`https://wa.me/2348078024694?text=I'm interested in ${product.name}`}
                    target="_blank"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '2px',
                      color: 'white',
                      textDecoration: 'none',
                      fontFamily: 'Montserrat, sans-serif',
                      borderBottom: '1px solid rgba(255,255,255,0.3)',
                      paddingBottom: '3px',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.target.style.color = '#C88A65';
                      e.target.style.borderColor = '#C88A65';
                    }}
                    onMouseLeave={e => {
                      e.target.style.color = 'white';
                      e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                    }}
                  >
                    ORDER NOW
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;