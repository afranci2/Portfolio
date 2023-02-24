import React,{ useState } from "react";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const Card = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  function clickHandler() {
    setClick(!click);

    console.log("het");
  }

  function clickHandler2() {
    setClick2(click2);

    console.log("het");
  }

  return (
    <div className="rounded-lg transition ease-in-out basis-1/3 flex-1 relative">
      {" "}
      {click && (
        <div className="border-2  overflow-auto shadow-2xl rounded-lg bg-white/100 w-11/12 h-5/6 fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-8/12">
          <div className="flex space-between">
            <div className=" w-10/12 py-12 m-auto lg:flex md:py-14 md:px-16 md:ml-0 md:w-auto space-between content text-black">
              {" "}
              <div className="w-1/2 break-words  basis-1/3 flex-1 text pr-20">
                <p className="font-bold text-4xl">{props.title}</p>
                <p className="font-regular pt-1">{props.shortstack}</p>
                <p className="font-regular text-xs text-red-500">
                  {props.progress}
                </p>

                <p className="font-regular text-sm py-4">{props.description}</p>
                <p className="font-bold text-sm text-teal-00 pt-4 text-teal-400 ">
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
                <p className="font-regular text-sm pb-6">
                  {props.optimizations}
                </p>
              </div>
              <div className=" cursor-pointer overflow-hidden rounded-lg mb-6 basis-1/3 h-full flex-1">
                {props.video && (
                  <div className="overflow-hidden rounded-lg mb-6">
                    {" "}
                    <video
                      loop
                      autoPlay={true}
                      muted
                      type="video/mp4"
                      src={props.video}
                    />{" "}
                  </div>
                )}
                {props.images.map((image, index) => {
                  return (
                    <a href={image.src} target="_blank" key={index}>
                      <img
                        className={`shadow-md border-2 h-full mb-6 rounded-lg object-cover ${
                          showDetails2 ? "transition ease-in-out  blur-md" : ""
                        }`}
                        src={image.src}
                        alt="project images"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="button  right-0 p-8 z-50 fixed top-0">
              <AiFillCloseCircle
                color={"000"}
                size={27}
                onClick={clickHandler}
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
                className="py-1 text-sm font-bold text-yellow-400 rounded-lg"
                onClick={toggleDetails}
              >
                {props.progress}
              </button>
              <p className="w-5/6 mx-auto p-4">{props.shortDescription}</p>
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
          src={props.images[0]}
          alt="First image"
        />
      </div>
    </div>
  );
};

export default Card;
