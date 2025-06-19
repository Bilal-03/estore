import { useRouter } from 'next/router';

export default function CategoryPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4 capitalize">
        {slug ? slug.replace(/-/g, ' ') : 'Loading...'}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Welcome to the <strong>{slug}</strong> category. This section will showcase all related products or services.
      </p>
    </div>
  );
}
