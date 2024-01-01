import { ChangeEvent, FormEvent, useState } from "react";
import { firebaseData } from "../utils/firebaseData";
import { checkLogin } from "../utils/checkLogin";
import toast from "react-hot-toast";
import { BsInfoCircle } from "react-icons/bs";

const Create = () => {
  const { createCard } = firebaseData();
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [_, user] = checkLogin();
  const notify = () =>
    toast.success("Card created successfully", { position: "top-center" });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.answer === "" || formData.question === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }
    setErrorMessage("");
    await createCard({
      question: formData.question,
      answer: formData.answer,
      userEmail: user?.email ?? "test@test.com",
    });
    setFormData({ question: "", answer: "" });
    notify();
  };

  return (
    <div className="relative overflow-hidden max-w-md mx-auto mt-10 p-6 bg-secondary shadow-md rounded-md my-12 border-4 border-highlight/30">
      <h2 className="text-2xl font-bold mb-6 text-center text-text">
        Publish your card..
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-6">
          <label htmlFor="question" className="block text-lg font-semibold">
            Question
          </label>
          <input
            type="text"
            id="question"
            name="question"
            value={formData.question}
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
            value={formData.answer}
            onChange={(e) => handleChange(e)}
            rows={4}
            className="mt-1 p-3 w-full bg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
            placeholder="Enter your answer"
            required
          ></textarea>
        </div>
        <div className="text-center text-danger mb-3"> {errorMessage} </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-highlight hover:bg-primary text-white font-bold py-2 px-4 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="relative py-3 h-12 italic mt-12 text-text/70"> 
      <div className="absolute z-10 flex items-center  gap-2"><BsInfoCircle size={20} /> Cards you post will be visible to everyone.</div>
      </div>
      <div className="absolute -bottom-12 h-12 w-full bg-highlight/40 -skew-y-[45deg]"></div>
    </div>
  );
};

export default Create;
