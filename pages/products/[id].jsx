import { useRouter } from 'next/router';
import { useState } from 'react';
import { mockProducts } from '../../data/products';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const product = mockProducts.find(p => p.id === parseInt(id));

  // Simulate multiple product images (you can replace with real ones)
  const previewImages = [
    product?.image,
    'https://source.unsplash.com/random/600x400?product',
    'https://source.unsplash.com/random/600x401?product',
  ];

  const [selectedImage, setSelectedImage] = useState(product?.image || '');

  if (!product) return <div className="text-center py-20 text-gray-500">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300">
      {/* Header */}
      <header className="px-6 py-4 shadow bg-white dark:bg-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Bilal's Store</h1>
          <Link href="/" className="text-sm hover:text-blue-500 dark:hover:text-blue-300 transition">← Back to Home</Link>
        </div>
      </header>

      {/* Main Content */}
      <motion.main 
        className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section with Zoom */}
        <div>
          <div className="overflow-hidden rounded-xl border dark:border-gray-700 group relative">
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Product"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
            />
          </div>

          {/* Preview Thumbnails */}
          <div className="flex space-x-3 mt-4">
            {previewImages.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-16 object-cover rounded border cursor-pointer transition hover:scale-105 ${selectedImage === img ? 'ring-2 ring-blue-500' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">{product.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">$49.99</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-200"
          >
            Buy Now
          </motion.button>
        </div>
      </motion.main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Bilal's Store. All rights reserved.
      </footer>
    </div>
  );
}
