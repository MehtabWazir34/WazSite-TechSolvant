import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import menuIcon from "../assets/menu Bar.jpg";
import logo from "../assets/logo.png"

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md dark:bg-gray-900 transition-colors duration-300">
      <img src={logo} alt="logo" className="w-20 h-14 rounded-lg" />

      {/* Navbar with animation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="inset-1/2 z-10 mt-8 absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-900 p-6 md:hidden"
          >
            <ul
            onClick={()=> setOpen(false)}
             className=" flex flex-col pl-4 md:flex-row gap-6 font-semibold text-gray-900 dark:text-gray-200">
              <li className="active:text-amber-400"><Link to="/" >Home</Link></li>
              <li><Link to="/us" >Us</Link></li>
              <li><Link to="/services" >Services</Link></li>
              <li><Link to="/team" >Our Team</Link></li>
              <li><Link to="/reviews" >Reviews</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

{/* Large Screen Menu */}
      <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="hidden flex md:block  w-full bg-gray-100 dark:bg-gray-900 p-6"
          >
            <ul
             className=" pl-4 flex gap-6 font-semibold text-gray-900 dark:text-gray-200">
              <li className="active:text-amber-400"><Link to="/" >Home</Link></li>
              <li><Link to="/us" >Us</Link></li>
              <li><Link to="/services" >Services</Link></li>
              <li><Link to="/team" >Our Team</Link></li>
              <li><Link to="/reviews" >Reviews</Link></li>
            </ul>
          </motion.nav>

      <div className="flex items-center gap-4 ">
        <Link to="/request">
          <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg font-bold text-white">
            Send Request
          </button>
        </Link>

        {/* Menu Icon */}
        <div className="rounded-full md:hidden">
          <img
            src={menuIcon}
            alt="menu icon"
            className="rounded-full cursor-pointer w-[60px] h-[60px] outline-none"
            onClick={() => {
              setOpen(!open)
              return setOpen(!open);
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
