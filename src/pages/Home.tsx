import HeroSection from "../components/HeroSection/HeroSection";
import CardContainer from "../components/Cards/CardContainer";
import { useFetch } from "../hooks/useFetch";
import PreLoader from "../components/Preloader/PreLoader";

const Home = () => {
  const { cards } = useFetch();
  return (
    <main className="min-h-[720px]">
      {!cards.length ? (
        <div className="absolute bg-black/70 w-full h-full z-10 top-0 left-0">
          <PreLoader />
        </div>
      ) : (
        <div>
          <HeroSection />
          <div className="px-3 md:px-12 my-3">
            <h2>Recently Published</h2>
            <CardContainer cards={cards.slice(0, 6)} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
