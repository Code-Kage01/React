import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const ingredients = [
  {
    name: 'Shea Butter',
    description: 'Raw, unrefined shea butter for deep moisturizing and skin nourishment. Perfect for all skin types.',
    image: 'https://images.unsplash.com/photo-1702650730093-43cfa3237228?w=500&auto=format&fit=crop&q=60',
  },
  {
    name: 'Pure Honey',
    description: 'Natural, unprocessed honey for skincare, hair care, and overall wellness. A true beauty elixir.',
    image: 'https://images.unsplash.com/photo-1654515722385-c684c5331c04?w=500&auto=format&fit=crop&q=60',
  },
  {
    name: 'Coconut Oil',
    description: 'Virgin, cold-pressed coconut oil for skin moisturizing, hair treatment, and natural beauty care.',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=2070&auto=format&fit=crop',
  },
];

const Ingredients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ingredients" className="relative bg-black py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-gold/3 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-rose-gold text-sm tracking-[0.3em] uppercase">Pure & Natural</span>
          <h2 className="text-4xl md:text-5xl font-light text-white mt-4">
            Natural Ingredients
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Pure, organic, and sourced from nature for your beauty needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-rose-gold/20 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-light text-white mb-4">{item.name}</h3>
                <p className="text-white/40 leading-relaxed mb-6">{item.description}</p>
                <motion.a
                  href={`https://wa.me/2348078024694?text=Hello, I'm interested in your ${item.name}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-rose-gold/10 border border-rose-gold/30 text-rose-gold rounded-full text-sm hover:bg-rose-gold hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                  Order via WhatsApp
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;