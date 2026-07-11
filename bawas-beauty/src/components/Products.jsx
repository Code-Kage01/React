import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaStar, FaWhatsapp } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Brightening Serum',
    category: 'Skincare',
    price: '₦12,500',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: "Jam's Acne Soap",
    category: 'Body Care',
    price: '₦1,500',
    rating: 4.8,
    image: '/img/WhatsApp Image 2026-06-13 at 21.06.29.jpeg',
    badge: 'Popular',
  },
  {
    id: 3,
    name: 'Gold Earrings Set',
    category: 'Jewelry',
    price: '₦15,900',
    rating: 4.9,
    image: '/img/WhatsApp Image 2026-06-13 at 20.45.35.jpeg',
    badge: 'Premium',
  },
  {
    id: 4,
    name: 'Signature Perfume Oil',
    category: 'Fragrance',
    price: '₦8,500',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2004&auto=format&fit=crop',
    badge: 'New',
  },
];

const Products = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="relative bg-black py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-rose-gold text-sm tracking-[0.3em] uppercase">Curated Selection</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-4">
            Best Sellers
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Discover our most loved products, carefully selected for their exceptional quality and results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-rose-gold/20 transition-all duration-500"
            >
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-rose-gold text-white text-xs rounded-full">
                  {product.badge}
                </span>
              </div>

              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredId === product.id ? 1.1 : 1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center gap-3"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-rose-gold rounded-full flex items-center justify-center text-white"
                  >
                    <FaArrowRight />
                  </motion.button>
                  <motion.a
                    href={`https://wa.me/2348078024694?text=I'm interested in ${product.name}`}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
                  >
                    <FaWhatsapp />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-rose-gold text-xs" />
                  ))}
                  <span className="text-white/40 text-xs ml-2">{product.rating}</span>
                </div>
                <h3 className="text-white font-medium text-lg mb-1">{product.name}</h3>
                <p className="text-white/30 text-sm mb-4">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-rose-gold">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white/50 hover:text-rose-gold text-sm transition-colors bg-transparent border-none cursor-pointer"
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;