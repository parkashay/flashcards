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
    <motion.div animate={{ y: [-50, 0], opacity: [0, 1] }} className="w-full">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        containerClassName="w-full shadow-lg cursor-pointer"
      >
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="flex items-center justify-between flex-col bg-highlight/70 rounded-lg bg px-3 min-h-[200px]"
        >
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
          <div className="text-xl my-2 font-semibold px-3">{data.question}</div>
          <div className="flex items-center gap-2 py-1 text-xs">
            {" "}
            <FaInfoCircle /> Flip to see answer
          </div>
        </div>
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="flex items-center justify-between flex-col bg-green-500/10 rounded-lg bg px-3 min-h-[200px]"
        >
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
