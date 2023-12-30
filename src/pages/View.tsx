import { useNavigate, useParams } from "react-router-dom";
import { firebaseData } from "../utils/firebaseData";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { checkLogin } from "../utils/checkLogin";
import { FaArrowAltCircleUp, FaTrashAlt } from "react-icons/fa";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoggedIn, _] = checkLogin();
  const { updateCard, deleteCard } = firebaseData();
  const [data, setData] = useState<DocumentData | undefined>();
  useEffect(() => {
    firebaseData()
      .getOneCard(id as string)
      .then((res) => setData(res));
  }, [isLoggedIn]);
  const handleSubmit = async () => {
    await updateCard({
      id: id as string,
      question: data?.question,
      answer: data?.answer,
    });
    return navigate('/study')
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleDelete = async () => {
    await deleteCard(id as string)
    return navigate('/study')
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white/10 shadow-md rounded-md my-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        Edit or Delete your card.
      </h2>
      
        <div className="mb-6">
          <label htmlFor="question" className="block text-lg font-semibold">
            Question
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={data?.question}
            onChange={(e) => handleChange(e)}
            className="mt-1 p-3 w-full bg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            placeholder="Enter your question"
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="answer" className="block text-lg font-semibold">
            Answer
          </label>
          <textarea
            id="answer"
            name="answer"
            value={data?.answer}
            onChange={(e) => handleChange(e)}
            className="mt-1 p-3 w-full bg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            placeholder="Enter your answer"
            required
          ></textarea>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleSubmit}
            className="flex gap-2 items-center bg-highlight hover:bg-highlight/60 text-white font-bold py-2 px-4 rounded-lg"
          >
             <FaArrowAltCircleUp /> Update
          </button>
          <button 
          onClick={handleDelete}
          className="flex items-center gap-2 bg-danger hover:bg-danger/50 font-bold px-4 py-2 rounded-lg"> <FaTrashAlt /> Delete</button>
        </div>
    </div>
  );
};

export default View;
