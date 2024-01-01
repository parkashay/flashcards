import { Card } from "../../types/types";
import PreLoader from "../Preloader/PreLoader";
import FlashCard from "./FlashCard";

interface CardContainerProps {
  cards: Card[];
}
const CardContainer = ({ cards }: CardContainerProps) => {
  return (
    <section className="my-2">
      {cards.length > 0 ? (
        <div
          className={`w-full grid gap-3 grid-cols-1  ${
            cards.length > 1 ? "md:grid-cols-2 lg:grid-cols-3" : "mx-auto max-w-[700px]"
          } my-3 place-content-center`}
        >
          {cards.map((card) => (
            <FlashCard key={card.id} data={card.data} id={card.id} />
          ))}
        </div>
      ) : (
        <PreLoader />
      )}
    </section>
  );
};

export default CardContainer;
