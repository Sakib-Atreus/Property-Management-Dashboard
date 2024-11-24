import { MdDarkMode } from "react-icons/md";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white shadow-xl z-10">
      <div className="max-w-full mx-auto lg:px-12 md:px-12 px-2 pe-16 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Property Management</h1>
        <button
          onClick={toggleDarkMode}
          className="text-sm text-black lg:border-2 md:border-2 border-black dark:border-white dark:bg-black dark:text-white lg:px-3 md:px-3 px-1 py-1 rounded flex items-center gap-2"
        >
          <span className="hidden md:block lg:block">Dark Mode</span>
          <MdDarkMode className="text-2xl lg:text-lg md:text-lg" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
