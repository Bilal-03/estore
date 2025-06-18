import { useEffect, useState } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

const mockProducts = [
  {
    id: 1,
    title: "Minimalist Cotton T-Shirt",
    description: "100% organic cotton, soft and breathable, perfect for everyday wear.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    id: 2,
    title: "ZenPods – Wireless Bluetooth Earbuds",
    description: "Crystal-clear audio, 20-hour battery life, IPX5 water resistance.",
    image: "https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Shockproof iPhone 14 Case – Matte Black",
    description: "Sleek protection with raised edges and anti-slip grip.",
    image: "https://images.unsplash.com/photo-1711033312367-247626a984d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

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
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-20 px-6 text-center"
      >
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight text-blue-900 dark:text-blue-200">
          Discover Amazing Products
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Explore a curated collection just for you</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
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
            <Link key={product.id} href={`/products/${product.id}`} passHref>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.2 }}
                className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transform transition duration-500 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-5">
                  <h4 className="text-xl font-semibold mb-2">{product.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{product.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>

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
