import React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const Card = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [click, setClick] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  function clickHandler() {
    setClick(true);

    console.log("het");
  }

  function clickHandler2() {
    setClick(!click);

    console.log("het");
  }

  return (
    <div className="transition ease-in-out basis-1/3 flex-1 relative">
      {" "}
      {click && (
        <div className="overflow-auto shadow-2xl rounded-lg bg-black/90 w-10/12 h-5/6 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex space-between">
            <div className="p-12 flex space-between content text-white">
              {" "}
              <div className="basis-1/3 flex-1 text pr-10">
                <p className="font-bold text-4xl">Monte Sinai</p>
                <p className="font-regular pt-1">Full Stack</p>
                <p className="font-regular text-xs text-red-500">IN PROGRESS</p>
                <p className="font-regular text-sm py-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam beatae aspernatur tenetur natus non assumenda sed
                  modi itaque nam accusamus dignissimos, praesentium eveniet
                  vero aperiam atque odio optio ratione magnam.
                </p>
                <p className="font-regular text-sm">
                  Features
                </p>
                <p className="font-regular text-sm">
                  Stack
                </p>
                <p className="font-regular text-sm">
                  Stack
                </p>
              </div>
              <div className="basis-1/3 flex-1 picture">
                <Image
                  className="object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={props.image}
                  alt="Wef"
                />
              </div>
            </div>
            <div className="button absolute right-0 p-4">
              <AiFillCloseCircle color={"fff"}size={27} onClick={clickHandler2} />
            </div>
          </div>
        </div>
      )}
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        onClick={clickHandler}
      >
        {showDetails && (
          <div className="">
            <div className=" card cursor-pointer text-white rounded-lg bg-black/50 w-full h-full absolute justify-center align-center flex flex-col z-40 text-center">
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
          </div>
        )}
        <Image
          className={`rounded-lg object-cover ${
            showDetails ? "transition ease-in-out  blur-sm" : ""
          }`}
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={props.image}
          alt="Wef"
        />
      </div>
    </div>
  );
};

export default Card;
