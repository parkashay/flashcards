import { motion } from "framer-motion";
import { GiSparkles, GiSpikyExplosion } from "react-icons/gi";
const Particles = () => {
  return (
    <div>
      <div className="absolute flex flex-wrap justify-evenly items-center top-0 left-0 w-full h-full">
        <motion.div
          animate={{
            scale: [0, 0, 1],
            transition: { duration: Math.random() + 1 },
          }}
          className=" text-accent top-1/2"
        >
          {" "}
          <GiSpikyExplosion size={100} />{" "}
        </motion.div>
        <motion.div
          animate={{
            scale: [0, 0, 1],
            transition: { duration: Math.random() + 1 },
          }}
          className=" text-highlight top-1/3 left-1/2"
        >
          {" "}
          <GiSpikyExplosion size={130} />{" "}
        </motion.div>
        <motion.div
          animate={{
            scale: [0, 0, 1],
            transition: { duration: Math.random() + 1 },
          }}
          className="  -top-1/2"
        >
          {" "}
          <GiSparkles size={100} />{" "}
        </motion.div>
      </div>
    </div>
  );
};
const Confetti = () => {
  return (
    <motion.div
      animate={{
        scale: [0, 1],
        transition: { duration: 0.3 },
      }}
      className="relative flex my-3 items-center justify-center min-h-[300px] bg-secondary mx-auto max-w-[600px] rounded-lg"
    >
      <div className="z-10 flex flex-col items-center gap-2 bg-primary/30 px-3 py-3 rounded">
        <h2 className="font-bold text-text">Congratulations !!</h2>
        <p className="font-semibold">You've read all the cards.</p>
      </div>
      <Particles />
    </motion.div>
  );
};

export default Confetti;
