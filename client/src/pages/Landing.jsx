export default function Landing() {
  return (
    <div className="flex items-center justify-center bg-surface text-white py-20">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Write your posts</h1>

        <p className="text-gray-400">Turn thoughts into something real.</p>

        <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
          Get started
        </button>
      </div>
    </div>
  );
}
