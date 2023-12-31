import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCardText } from "react-icons/bs";
import { auth } from "../../firebase/firebase";
import { FaGoogle, FaPencilAlt } from "react-icons/fa";
import { login } from "../../utils/login";
import { checkLogin } from "../../utils/checkLogin";

const Navbar = () => {
  const navItems: { name: string; path: string }[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Study",
      path: "/study",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { pathname } = useLocation();
  const [isLoggedIn, user] = checkLogin();
  const logout = () => {
    auth.signOut();
  };

  return (
    <nav className="bg-gray-800 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-white text-2xl font-bold flex items-center gap-2"
        >
          {" "}
          <BsCardText /> FlashCards{" "}
        </Link>

        <div className="flex flex-row-reverse gap-3">
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex items-center ${isOpen ? "block" : "hidden"}`}
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-3 items-center">
              {navItems.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-white hover:bg-white/10 ${
                      pathname === link.path ? "bg-white/10 rounded" : ""
                    }`}
                  >
                    {" "}
                    {link.name}{" "}
                  </Link>
                </li>
              ))}
              {isLoggedIn && user ? (
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <Link
                    to={"/my-cards"}
                    className={`px-3 py-2 hover:bg-white/10 ${
                      pathname === "/my-cards" ? "bg-white/10 rounded" : ""
                    }`}
                  >
                    My Cards
                  </Link>
                  <Link
                    to={"/create"}
                    className="flex items-center gap-2 bg-highlight text-primary px-3 py-2 font-bold rounded-lg"
                  >
                    {" "}
                    <FaPencilAlt /> Create
                  </Link>
                  <button
                    className="flex items-center gap-2 bg-danger px-3 py-2 font-bold rounded-lg"
                    onClick={logout}
                  >
                    <img
                      src={user.photoURL as string}
                      alt={"user"}
                      className="h-6 w-6 rounded-full"
                    />{" "}
                    Logout{" "}
                  </button>
                </div>
              ) : (
                <button
                  className="flex items-center gap-3 bg-accent px-3 py-2 font-bold rounded-lg"
                  onClick={login}
                >
                  LOGIN with <FaGoogle />
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
