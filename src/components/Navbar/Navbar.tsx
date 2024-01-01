import { checkLogin } from "../../utils/checkLogin";
import { useAtom } from "jotai";
import { drawerAtom } from "../../jotai/atoms";
import Drawer from "./Drawer";
import DesktopNavbar from "./DesktopNavbar";
export const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Study",
    href: "/study",
  },
];
const Navbar = () => {
  const [isLoggedIn, user] = checkLogin();
  const [showDrawer, setShowDrawer] = useAtom(drawerAtom);
  return (
    <nav>
      {showDrawer && (
        <div
          className="bg-primary/70 w-full absolute h-full z-50 md:hidden"
          onClick={() => setShowDrawer(!showDrawer)}
        >
          <Drawer isLoggedIn={isLoggedIn} user={user} />
        </div>
      )}
      <DesktopNavbar isLoggedIn={isLoggedIn} user={user} />
    </nav>
  );
};

export default Navbar;
