import { motion } from "framer-motion";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Bilal's Store</title>
      </Head>

      <motion.div
        className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8">
          <motion.h1
            className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-center text-gray-600 dark:text-gray-300 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We'd love to hear from you! Fill out the form below.
          </motion.p>

          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your Name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="you@example.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Write your message here..."
                required
              ></textarea>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded font-semibold transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
