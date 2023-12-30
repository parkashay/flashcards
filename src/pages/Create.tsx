import { ChangeEvent, FormEvent, useState } from "react";
import { firebaseData } from "../utils/firebaseData";
import { checkLogin } from "../utils/checkLogin";

const Create = () => {
  const { createCard } = firebaseData();
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [_, user] = checkLogin();
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
    const res =await createCard({
      question: formData.question,
      answer: formData.answer,
      userEmail: user?.email ?? "test@test.com",
    });
    setFormData({ question: "", answer: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white/10 shadow-md rounded-md my-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
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
    </div>
  );
};

export default Create;
