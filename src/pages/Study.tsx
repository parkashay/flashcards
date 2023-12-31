import { useEffect, useState } from "react";
import { Card } from "../types/types";
import { useFetch } from "../hooks/useFetch";
import { FaShuffle } from "react-icons/fa6";
import CardContainer from "../components/Cards/CardContainer";
import { FaArrowRight } from "react-icons/fa";

const ALLOWED_ITEMS_PER_PAGE = [1, 3, 6, 9, 12];
const Study = () => {
  const [randomized, setRandomized] = useState<Card[]>([]);
  const [change, setChange] = useState<boolean>(true);
  const [cardsPerPage, setCardsPerPage] = useState<number>(1);
  const { cards } = useFetch();
  
  function randomize() {
    setRandomized(cards.sort(() => Math.random() - 0.5));
  }
  useEffect(() => {
    randomize();
  }, [cards, change]);
  return (
    <section className="px-3 md:px-12 my-2 min-h-[720px]">
      <h3> Cards users have posted: </h3>
      <div className="flex justify-between flex-wrap gap-2 my-3">
        <div>
          Cards per Page:{" "}
          <select
            name="per_page"
            className="bg-highlight rounded px-3 py-2"
            value={cardsPerPage}
            onChange={(e) => setCardsPerPage(Number(e.target.value))}
          >
            {ALLOWED_ITEMS_PER_PAGE.map((item) => (
              <option key={item} value={item} className="bg-primary">
                {item}
              </option>
            ))}
          </select>
        </div>{" "}
        <button
          onClick={() => setChange(!change)}
          className="flex gap-2 items-center  active:bg-secondary bg-highlight px-3 py-2 rounded font-semibold"
        >
          {" "}
          <FaShuffle /> Randomize
        </button>{" "}
      </div>
     <CardContainer cards={randomized.slice(0, cardsPerPage)} />
     {cards.length && cardsPerPage === 1 ? <div className="flex items-center justify-center my-2">
      <button
          onClick={() => setChange(!change)}
          className="flex gap-2 items-center bg-highlight active:bg-secondary hover:bg-highlight/70 px-3 py-2 rounded font-semibold"
        >
          {" "}
           Next <FaArrowRight />
        </button>
     </div> :  ""}
    </section>
  );
};

export default Study;
