export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm">
        <span>© {new Date().getFullYear()} Qveboo</span>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
