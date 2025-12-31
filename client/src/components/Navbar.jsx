const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-app text-white">
      <div className="text-xl bg-app font-bold tracking-tight">Qveboo</div>
      <div className="flex items-center">
        <a className="mx-4 cursor-pointer hover:text-gray-300">Home</a>
        <a className="mx-4 cursor-pointer hover:text-gray-300">Login</a>
        <a className="mx-4 cursor-pointer hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
