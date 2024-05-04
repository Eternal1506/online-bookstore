import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  //   return (
  //     <div className="flex">
  //       <Link
  //         to={destination}
  //         className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
  //       >
  //         <BsArrowLeft className="text-2xl" />
  //       </Link>
  //     </div>
  //   );
  let navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </button>
    </>
  );
};

export default BackButton;
