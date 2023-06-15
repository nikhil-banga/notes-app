import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  let nav = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    nav("/login");
  };
  let location = useLocation();
  useEffect(() => {}, [location]);

  return (
    <>
     <header className="text-gray-600  body-font">
        <div className="container mx-auto  flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link className="mt-4 ml-3 text-xl" to="/">
              AapkeNotes
            </Link>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/" ? "active" : ""
              }`}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
            <Link
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              About Us
            </Link>
          </nav>
          {!localStorage.getItem("token") ? (
            <form className="d-flex ">
              <Link
                className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2"
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2"
                to="/signup"
                role="button"
              >
                Signup
              </Link>
            </form>
          ) : (
            <button
              onClick={handleLogout}
              className="inline-flex items-center py-2 px-4 mt-4 md:mt-0 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  text-center mr-2 mb-2"
            >
              Logout
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
