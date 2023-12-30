import HeroSection from "../components/HeroSection/HeroSection";
import CardContainer from "../components/cards/CardContainer";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const { cards } = useFetch();
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CardContainer cards={cards} />
    </main>
  );
};

export default Home;
