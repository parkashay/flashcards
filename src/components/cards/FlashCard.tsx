import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "../../types/types";
import { FaCommentAlt, FaQuestionCircle, FaUser } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { checkLogin } from "../../utils/checkLogin";
import { Link } from "react-router-dom";

const FlashCard = ({ id, data }: Card) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [_, user] = checkLogin();
  const showActions = user?.email == data.userEmail;

    

  return (
    <div className="flex items-center justify-center max-w-[500px]">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        containerClassName="w-full shadow-lg"
      >
        <div className="flex items-center justify-between flex-col bg-highlight/70 rounded-lg bg px-3 min-h-[200px]">
          <div className="w-full text-2xl my-2 flex justify-between">
            {" "}
            <FaQuestionCircle />
            <div>
              {" "}
              {showActions ? (
                <Link
                  to={`/view/${id}`}
                  className="flex items-center gap-1 bg-accent hover:bg-accent/50 px-2 py-1 rounded-lg "
                >
                  <BsEye />
                </Link>
              ) : (
                ""
              )}{" "}
            </div>
          </div>
          <div className="text-lg my-2 font-semibold px-3">{data.question}</div>
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="bg-accent px-3 py-1 rounded my-2 text-2xl hover:bg-accent/40 hover:skew-x-12 transition-all duration-200"
          >
            <FaArrowRightArrowLeft />
          </button>
        </div>
        <div className="flex items-center justify-between flex-col bg-green-500/10 rounded-lg bg px-3 min-h-[200px]">
          <div className=" flex w-full text-2xl gap-3 my-2 justify-between flex-wrap">
            {" "}
            <FaCommentAlt />
            <span className="text-xs flex gap-1 items-center">
              <FaUser /> {data.userEmail}
            </span>
          </div>

          <div className="text-lg my-2 font-semibold">{data.answer}</div>
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="bg-accent px-3 py-1 rounded my-2 text-2xl hover:bg-accent/40 hover:skew-x-12 transition-all duration-200"
          >
            <FaArrowRightArrowLeft />
          </button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default FlashCard;
