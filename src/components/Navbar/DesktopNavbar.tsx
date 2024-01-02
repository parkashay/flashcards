import { TbCards, TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "./Navbar";
import { FaPencilAlt } from "react-icons/fa";
import Menu from "../Menu";
import { useAtom } from "jotai";
import { drawerAtom } from "../../jotai/atoms";
import { User } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { auth } from "../../firebase/firebase";
import { BsGoogle } from "react-icons/bs";
import { login } from "../../utils/login";
import {motion} from 'framer-motion'

export default function DesktopNavbar({
  isLoggedIn,
  user,
}: {
  isLoggedIn: boolean;
  user: User | null;
}) {
  const [showDrawer, setShowDrawer] = useAtom(drawerAtom);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLImageElement>(null);
  const location = useLocation();
  const pathname = location.pathname;

  function logout() {
    return auth.signOut();
  }

  const handleClickAnywhere = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef?.current.contains(e.target as Node))
      setShowDropdown(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickAnywhere);
    return () => window.removeEventListener("click", handleClickAnywhere);
  }, []);

  return (
    <div className="flex items-center justify-between bg-primary py-6">
      <Link to={"/"} className="flex items-center gap-2 px-3">
        <TbCards size={30} />
        <h2 className="font-bold font-mono">FlashCards</h2>
      </Link>
      <div className="hidden md:flex gap-3 px-12 items-center ">
        {NAV_LINKS.map((link) => (
          <Link
            to={link.href}
            key={link.title}
            className={`${
              pathname === link.href ? "bg-accent/60" : ""
            } hover:bg-secondary px-3 py-2 rounded-lg`}
          >
            {link?.title}
          </Link>
        ))}
        <div>
          {isLoggedIn ? (
            <div className="flex gap-6 items-center">
              <Link
                to={"/my-cards"}
                className={` px-3 py-2 rounded-lg hover:bg-secondary/60 ${
                  pathname === "/my-cards" ? "bg-accent/60" : ""
                }`}
              >
                My Cards
              </Link>
              <Link
                to={"/create"}
                className="bg-highlight px-2 py-2 rounded-lg flex items-center gap-2"
              >
                {" "}
                <FaPencilAlt /> Create
              </Link>
              <button
                className="cursor-pointer hover:opacity-65"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  ref={dropdownRef}
                  src={user?.photoURL as string}
                  alt="profile"
                  className="rounded-full w-10 h-10 border-2 border-highlight"
                />
              </button>
              {showDropdown && (
                <motion.div
                animate={{
                  y: [-50, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.2 },
                }}
                className="absolute flex flex-col gap-3 items-center right-6 top-[70px] z-50 bg-secondary py-3 px-3 rounded">
                  <div>{user?.email}</div>
                  <button
                    onClick={() => logout()}
                    className="bg-danger hover:bg-danger/80 px-3 py-2 rounded flex items-center gap-2"
                  >
                    Logout <TbLogout />{" "}
                  </button>
                </motion.div>
              )}
            </div>
          ) : (
            <div>
              <button
                onClick={() => login()}
                className="flex items-center gap-2 bg-teal-800 font-semibold px-3 py-2 rounded-lg"
              >
                Login with <BsGoogle />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="px-6 flex items-center md:hidden">
        {" "}
        <button onClick={() => setShowDrawer(!showDrawer)}>
          <Menu />
        </button>
      </div>
    </div>
  );
}
