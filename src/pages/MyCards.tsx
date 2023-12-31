import { useEffect } from "react";
import CardContainer from "../components/Cards/CardContainer";
import { useUserCards } from "../hooks/useUserCards";
import { checkLogin } from "../utils/checkLogin";
import toast from "react-hot-toast";
import { useAtom } from "jotai";
import { toastAtom } from "../jotai/atoms";

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
      <CardContainer cards={cards} />
    </div>
  );
};

export default MyCards;
