import { useAuthState } from "react-firebase-hooks/auth";
import { FaPencilAlt } from "react-icons/fa";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/login";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const create = () => {
    if (!user) {
      login();
    } else navigate("/create");
  };
  return (
    <div
      className="relative min-h-[500px] bg-cover bg-bottom"
      style={{ backgroundImage: 'url("/bg.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            animate={{
              x: [-100, 0],
              transition: { duration: 0.5 },
            }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Create a new card for others.
          </motion.h1>
          <motion.p
            animate={{
              x: [100, 0],
              transition: { duration: 0.5 },
            }}
            className="text-lg md:text-xl mb-6"
          >
            Sharing knowledge is the best way for improvement.
          </motion.p>
          <motion.div
          animate={{
            rotate: [-180, -180, -90, 0],
            translateX: [0, 400, 400, 0],
            translateY: [-200,-200, 0  ,0],
            transition: { duration: 0.5},
          }}
          >
            <button
              onClick={create}
              className="relative group overflow-hidden bg-accent text-white font-bold py-2 px-4 rounded-full"
            >
              <span
                className="absolute z-0 h-full w-0 group-hover:w-full overflow-hidden bg-secondary left-0 top-0 flex items-center justify-center gap-2"
                style={{
                  transition: "width 0.3s",
                }}
              >
                Go! <FaArrowRight />{" "}
              </span>
              <span className="flex py-2 items-center gap-3 z-10">
                <FaPencilAlt /> Create a Card
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
