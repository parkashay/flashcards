import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { drawerAtom } from "../../jotai/atoms";
import Close from "../Close";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "./Navbar";
import { User } from "firebase/auth";
import { BsGoogle, BsPencil } from "react-icons/bs";
import { auth } from "../../firebase/firebase";
import { login } from "../../utils/login";
function Drawer({
  isLoggedIn,
  user,
}: {
  isLoggedIn: boolean;
  user: User | null;
}) {
  const [showDrawer, setShowDrawer] = useAtom(drawerAtom);
  function logout() {
    return auth.signOut();
  }
  return (
    <motion.div
      animate={{
        width: showDrawer ? ["0%", "80%"] : ["80%", "0%"],
      }}
      className={`absolute px-3 overflow-hidden h-full right-0 bg-primary z-50`}
      onClick={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-3 items-center my-6">
        <div className="w-full flex justify-end px-3 md:px-12">
          {" "}
          <button onClick={() => setShowDrawer(!showDrawer)}>
            <Close />
          </button>{" "}
        </div>
        {NAV_LINKS.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="hover:bg-secondary py-2 w-full text-center"
          >
            {" "}
            {item?.title}{" "}
          </Link>
        ))}
        <div className="w-full">
          {isLoggedIn ? (
            <div className="flex flex-col items-center gap-3 ">
              <Link
                to={"/my-cards"}
                className="py-2 hover:bg-secondary w-full text-center"
              >
                My Cards
              </Link>
              <Link
                to={"/create"}
                className="py-2 bg-highlight rounded-lg hover:bg-secondary w-full flex justify-center items-center gap-2"
              >
                Create <BsPencil />
              </Link>
              <div className="flex gap-2 flex-wrap items-center justify-center mt-6 bg-secondary rounded-lg w-full py-2">
                {" "}
                <img
                  src={user?.photoURL as string}
                  alt="photo"
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-xs">{user?.email}</span>
              </div>
              <button
                onClick={() => logout()}
                className="py-2 bg-danger w-full rounded-lg hover:bg-danger/70"
              >
                logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => login()}
              className="flex w-full justify-center items-center gap-2 bg-teal-800 font-semibold px-3 py-2 rounded-lg"
            >
              Login with <BsGoogle />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Drawer;
