import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const mockProducts = [
  {
    id: 1,
    title: "Minimalist Cotton T-Shirt",
    description: "100% organic cotton, soft and breathable, perfect for everyday wear.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const found = mockProducts.find(p => p.id === parseInt(id));
      setProduct(found);
    }
  }, [id]);

  if (!product) {
    return <p className="text-center mt-20 text-gray-600 dark:text-gray-300">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full object-cover h-80"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="p-6">
          <motion.h1
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {product.title}
          </motion.h1>

          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {product.description}
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded shadow"
          >
            Go Back
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
