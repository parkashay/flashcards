import { useEffect } from "react";
import CardContainer from "../components/Cards/CardContainer";
import { useUserCards } from "../hooks/useUserCards";
import { checkLogin } from "../utils/checkLogin";
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { toastAtom } from "../jotai/atoms";
import { Link } from "react-router-dom";

const MyCards = () => {
  const [_, user] = checkLogin();
  const { cards } = useUserCards(user?.email ?? "test@test.com");
  const [toastMessage, setToastMessage] = useAtom(toastAtom);
  useEffect(() => {
    if (toastMessage) {
      toast.success(toastMessage);
    }
    setToastMessage(null);
  }, []);
  return (
    <div className="px-3 md:px-12 min-h-[720px]">
      {!!cards.length ? <CardContainer cards={cards} />: 
      <div className="min-h-[300px] flex flex-col gap-3 items-center justify-center">
        <h1>You haven't uploaded any cards.</h1>
        <Link to={"/create"} className="bg-highlight px-3 py-2 rounded-lg" >Create One Now</Link>
      </div>
      }
    </div>
  );
};

export default MyCards;
