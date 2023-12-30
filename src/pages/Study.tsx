import { useEffect, useState } from "react";
import FlashCard from "../components/cards/FlashCard";
import { Card } from "../types/types";
import { useFetch } from "../hooks/useFetch";

const Study = () => {
  const [randomized, setRandomized] = useState<Card[]>([]);
  const { cards } = useFetch();
  useEffect(() => {
    setRandomized(cards.sort(() => Math.random() - 0.5));
  }, [cards]);
  return (
    <div className="px-3 md:px-12 my-6 grid grid-cols-1 gap-3 w-fit mx-auto">
      <h3> Cards users have posted: </h3>
      {randomized.map((card) => (
        <FlashCard key={card.id} data={card.data} id={card.id} />
      ))}
    </div>
  );
};

export default Study;
