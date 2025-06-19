import { useEffect, useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { mockProducts } from '../data/products';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Bilal's Store</h1>
          <nav className="space-x-6">
            <Link href="/" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Products</Link>
            <Link href="/contact" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Contact</Link>
          </nav>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-500 transition"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 px-6 text-center overflow-hidden min-h-[70vh] flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-gray-800 dark:via-gray-900 dark:to-black animate-gradient-x opacity-60 blur-2xl pointer-events-none" />

        <h2 className="text-5xl font-extrabold mb-4 tracking-tight text-blue-900 dark:text-blue-200 z-10 relative">
          Discover Amazing Products
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 relative z-10">
          Explore a curated collection just for you
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition relative z-10"
        >
          Shop Now
        </motion.button>
      </motion.section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-14">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-semibold mb-10 text-center"
        >
          Our Products
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: 'spring', bounce: 0.4, delay: i * 0.2 }}
              className="cursor-pointer bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transform transition duration-500 hover:scale-105 hover:ring-4 hover:ring-blue-500/30"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
                <button className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition animate-pulse">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 max-w-6xl w-full rounded-xl overflow-hidden shadow-2xl p-10 grid md:grid-cols-2 gap-10 relative"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-xl"
              >
                ✕
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-[400px] object-cover rounded-lg shadow"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-2">{selectedProduct.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-base leading-relaxed">{selectedProduct.description}</p>
                <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">$49.99</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Free shipping on all orders. Easy returns within 30 days.</p>
                <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
          >
            ↑ Top
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Bilal's Store. All rights reserved.
      </footer>
    </div>
  );
}
