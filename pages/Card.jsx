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
    <div className="rounded-lg transition ease-in-out basis-1/3 flex-1 relative">
      {" "}
      {click && (
        <div className="border-2  overflow-auto shadow-2xl rounded-lg bg-white/100 w-11/12 h-5/6 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex space-between">
            <div className="mr-4 w-10/12 py-12 m-auto md:flex md:py-14 md:px-16 md:ml-0 md:w-auto space-between content text-black">
              {" "}
              <div className="basis-1/3 flex-1 text pr-10">
                <p className="font-bold text-4xl">Monte Sinai</p>
                <p className="font-regular pt-1">Full Stack</p>
                <p className="font-regular text-xs text-red-500">IN PROGRESS</p>

                <p className="font-regular text-sm py-4">{props.description}</p>
                <p className="font-bold text-sm text-teal-00 pt-4">
                  Link to project
                </p>
                <a href={`https://${props.link}`}>
                  <p className="font-semibold text-sm pt-1">Live Site: </p>

                  <p className="font-regular text-sm underline">{props.link}</p>
                </a>

                <a href={`https://${props.link2}`}>
                  <p className="font-semibold text-sm pt-4">Github Repo: </p>

                  <p className="font-regular text-sm underline">
                    {props.link2}
                  </p>
                </a>

                <p className="font-bold text-sm text-teal-400  pt-4">
                  Features
                </p>
                <p className="font-regular text-sm">{props.features}</p>

                <p className="font-bold text-sm text-teal-400  pt-4">Stack</p>
                <p className="font-regular text-sm">{props.stack}</p>

                <p className="font-bold text-sm text-teal-400  pt-4">
                  Optimizations
                </p>
                <p className="font-regular text-sm">{props.optimizations}</p>
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
            <div className="button absolute right-0 p-5">
              <AiFillCloseCircle
                color={"000"}
                size={27}
                onClick={clickHandler2}
              />
            </div>
          </div>
        </div>
      )}
      <div
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        onClick={clickHandler}
        className="rounded-lg overflow-hidden "
      >
        {showDetails && (
          <div className="rounded-lg">
            <div className="px-8 card cursor-pointer text-white rounded-lg bg-black/40 w-full h-full absolute justify-center align-center flex flex-col z-40 text-center">
              <h2 className="rounded-lg font-bold text-4xl">{props.title}</h2>
                <button
                  className="py-1 text-sm font-bold text-teal-400 rounded-lg"
                  onClick={toggleDetails}
                >
                  IN PROGRESS
                </button>
              <p className="py-4">{props.shortdescription}</p>

              <p className="font-bold text-sm pt-4 rounded-lg">
                Click to learn more
              </p>
            </div>
          </div>
        )}
        <Image
          className={`rounded-lg object-cover ${
            showDetails ? "transition ease-in-out  blur-md" : ""
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
