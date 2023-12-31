import { useEffect, useState } from "react";
import FlashCard from "../components/cards/FlashCard";
import { Card } from "../types/types";
import { useFetch } from "../hooks/useFetch";
import { FaShuffle } from "react-icons/fa6";

const ALLOWED_ITEMS_PER_PAGE = [1, 3, 6, 9, 12];
const Study = () => {
  const [randomized, setRandomized] = useState<Card[]>([]);
  const [change, setChange] = useState<boolean>(true);
  const [cardsPerPage, setCardsPerPage] = useState<number>(6);
  const { cards } = useFetch();
  function randomize() {
    setRandomized(cards.sort(() => Math.random() - 0.5));
  }
  useEffect(() => {
    randomize();
  }, [cards, change]);
  return (
    <section className="px-3 md:px-12 my-2">
      <h3> Cards users have posted: </h3>
      <div className="flex justify-between flex-wrap gap-2">
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
          className="flex gap-2 items-center bg-highlight px-3 py-2 rounded font-semibold"
        >
          {" "}
          <FaShuffle /> Randomize
        </button>{" "}
      </div>
      <div className="my-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {randomized.slice(0, cardsPerPage).map((card) => (
          <FlashCard key={card.id} data={card.data} id={card.id} />
        ))}
      </div>
    </section>
  );
};

export default Study;
