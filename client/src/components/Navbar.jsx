import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-app text-white">
      <div className="text-xl bg-app font-bold tracking-tight">Qveboo</div>

      <div className="flex items-center">
        <Link to="/" className="mx-4 hover:text-gray-300">
          Home
        </Link>

        <Link to="/login" className="mx-4 hover:text-gray-300">
          Login
        </Link>

        <Link to="/" className="mx-4 hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
