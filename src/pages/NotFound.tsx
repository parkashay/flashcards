import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <div className="min-h-[720px] flex items-center justify-center flex-col">
        <div className="flex items-center text-2xl font-bold">
            Error - <TbError404 size={50} />
        </div>
      <h1 className="font-bold"> Page Not Found !</h1>
    </div>
  );
};

export default NotFound;
