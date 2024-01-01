import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "../../types/types";
import {
  FaCommentAlt,
  FaEdit,
  FaInfoCircle,
  FaQuestionCircle,
  FaUser,
} from "react-icons/fa";
import { checkLogin } from "../../utils/checkLogin";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FlashCard = ({ id, data }: Card) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [_, user] = checkLogin();
  const showActions = user?.email == data.userEmail;

  return (
    <motion.div
      animate={{
        x: [-Math.ceil((Math.random() - 0.5) * 50), 0],
        y: [-Math.ceil((Math.random() - 0.5) * 50), 0],
        opacity: [0, 1],
      }}
      transition={{ type: "spring", stiffness: 120 }}
      className="w-full"
    >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        containerClassName="w-full shadow-lg cursor-pointer"
      >
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative overflow-hidden flex items-center justify-between flex-col bg-highlight/70 rounded-lg bg px-3 min-h-[200px]"
        >
          <div className="absolute bg-secondary/60 w-[150px] h-6 right-0 bottom-0 -skew-y-[25deg]"></div>
          <div className="w-full my-2 flex justify-between">
            {" "}
            <div className="flex items-center gap-2">
              <FaQuestionCircle />{" "}
              <span className="text-xs">click on the card to flip</span>
            </div>
            <div>
              {" "}
              {showActions ? (
                <Link
                  to={`/view/${id}`}
                  className="flex items-center gap-1 bg-accent hover:bg-accent/50 px-2 py-1 rounded-lg "
                >
                  <FaEdit />
                </Link>
              ) : (
                ""
              )}{" "}
            </div>
          </div>
          <div className="text-xl my-2 font-semibold px-3 z-10">{data.question}</div>
          <div className="flex items-center gap-2 py-1 text-xs z-10">
            {" "}
            <FaInfoCircle /> Flip to see answer
          </div>
        </div>
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative overflow-hidden flex items-center justify-between flex-col bg-green-500/10 rounded-lg bg px-3 min-h-[200px]"
        >
          <div className="absolute bg-highlight/40 w-[150px] h-6 right-0 bottom-0 -skew-y-[25deg]"></div>

          <div className=" flex w-full text-2xl gap-3 my-2 justify-between flex-wrap">
            {" "}
            <FaCommentAlt />
            <span className="text-xs flex gap-1 items-center">
              <FaUser /> {data.userEmail}
            </span>
          </div>

          <div className="text-2xl my-2 font-semibold">{data.answer}</div>
          <div></div>
        </div>
      </ReactCardFlip>
    </motion.div>
  );
};

export default FlashCard;
