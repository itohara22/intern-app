const Navbar = () => {
  return (
    <nav className=" bg-white p-4 fixed top-0 w-full z-10">
      <div className=" mx-auto  flex justify-around items-center gap-10">
        <div>
          <a href="#" className="text-black text-xl font-bold">
            App
          </a>
        </div>
        <ul className="flex gap-8 text-sm font-semibold">
          <li>
            <a href="#emotions" className="text-black">
              Emotions
            </a>
          </li>
          <li>
            <a href="#manifesto" className="text-black">
              Manifesto
            </a>
          </li>
          <li>
            <a href="#self-awareness" className="text-black">
              Self-awareness tets
            </a>
          </li>
          <li>
            <a href="#work" className="text-black">
              Work With Us
            </a>
          </li>
        </ul>
        <div>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
