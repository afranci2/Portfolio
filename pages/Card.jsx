import React from "react";
import { useState } from "react";

const Card = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {" "}
      <div
        className="transition-all duration-500 delay-150 basis-1/3 flex-1 relative"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        onClick={toggleDetails}
      >
        {showDetails && (
          <div className="card transition-all duration-500 cursor-pointer text-white rounded-lg bg-black/50 w-full h-full absolute justify-center align-center flex flex-col z-50 text-center">
            <h2 className="font-sembibold text-4xl">{props.title}</h2>
            <p className="pt-4">{props.description}</p>
            <div className="px-6 py-2 ">
              <button
                className=" text-sm font-semibold  text-red-800 rounded-lg"
                onClick={toggleDetails}
              >
                IN PROGRESS
              </button>
            </div>
            <p className="font-bold text-sm py-6">Click to learn more</p>
          </div>
        )}
        <Image
          className={`rounded-lg object-cover ${showDetails ? "blur-sm" : ""}`}
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={web1}
          alt="Wef"
        />
      </div>
    </div>
  );
};

export default Card;
