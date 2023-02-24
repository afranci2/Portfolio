import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillCloseCircle } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosSend } from 'react-icons/io'
import React, { useState, FormEvent } from "react";
import deved from "../public/som11.png";
import code from "../public/cube.png";
import design from "../public/cube2.png";
import consulting from "../public/tool.png";
import Image from "next/image";
import web7 from "../public/My project-1 (11) (1).png";
import Card from './Card'
import DarkLogo from '../public/darklogo.png'
import MonteImage1 from '../public/monte1.png'
import MonteImage2 from '../public/monte2.png'
import MonteImage3 from '../public/monte3.png'
import PixelBloom1 from '../public/pixelbloom1.png'
import PixelBloom2 from '../public/pixelbloom2.png'
import PixelBloom3 from '../public/pixelbloomtry.png'
import PixelBloom4 from '../public/pixelbloomtry2.png'
import MedPrep1 from '../public/medprep1.png'
import MedPrep2 from '../public/medprep2.png'
import CreateMyEssay1 from '../public/createmyessay1.png'
import CreateMyEssay2 from '../public/createmyessay2.png'
import CreateMyEssay3 from '../public/createmyessay3.png'
import CreateMyEssay4 from '../public/createmyessay4.png'
import RoseInABottle1 from '../public/roseinabottle1.png'
import RoseInABottle2 from '../public/roseinabottle2.png'
const Rose = "https://monte-assets.s3.amazonaws.com/video/Screen_Recording_2023-02-06_at_12_51_03_PM_AdobeExpress.mp4"
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [submit, setSubmit] = useState(false)
  const initialFormState = {
    email: '',
    name: '',
    message: '',
  }

  const [formState, setFormState] = useState(initialFormState)
  const [formSuccess, setFormSuccess] = useState(false)

  const formId = 'BOFOAxmD'
  const formSparkUrl = `https://submit-form.com/${formId}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmit(true)
    const payload = {
      name: formState.name,
      email: formState.email,
      message: formState.message
    }

    try {
      const response = await fetch(formSparkUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(
          payload,
        ),
      })
      console.log(response)
      setFormSuccess(true)
      setSubmit(false)
      setTimeout(() => {
        setFormSuccess(false);
      }, 10000)

    }
    catch (error) {
      console.log(error)
    }
  }


  const PortfolioAssets = [
    {
      id: 0,
      title: "Monte Sinai",
      shortDescription: "Full stack web app built with Next.js, React.js, Node.js, Express.js, Tailwind, and MongoDB",
      description: "Originally a static site for non-profit organization, this full stack web app allows visitors to learn and interact with the organization. Complete with admin dashboard for easy site maintenance. View previous static site on Github.",
      link: "www.monte-web.vercel.app",
      link2: "www.github.com/afranci2/monteweb",
      features: "Facebook Live API, Stripe/Tithe.Ly Payment Processing, Volunteer Sign up Applications, Testimonial Upload, Social Media Integration, Admin Dashboard",
      stack: "HTML/CSS, Javascript, TypeScript, React.js, Next.js, TailwindCSS, POSTCSS, Node.js, Express.js, MongoDB",
      optimizations: "Animations",
      images: [MonteImage1, MonteImage2, MonteImage3],
      progress: "IN PROGRESS",
      shortstack: "Full Stack"
    },
    {
      id: 1,
      title: "CreateMyEssay",
      shortDescription: "Full-Stack SASS MVP writing assistant built with Express.js, Node.js, and OpenAI API",
      algorithms: "An outline is first requested based on the assignment. A linear search algorithm converts the Roman numerals of the outline into sections by numbers. Another algorithm developed requests text completion in chunks based on the previous algorithm. The algorithm uses a loop of fetch requests to generate essay sections based on the number of sections determined by the previous algorithm.",
      description: "Got writer's block? Need a writing assistant? Try CreateMyEssay! Just type in a prompt or assignment and get a unique response. This SASS tool can create an outline, title, and essay for you using OpenAI API. Use additional parameters to further refine the tone and style.",
      link: "www.createmyessay.com",
      link2: "www.github.com/afranci2/essaymaker",
      features: "Linear Search Algorithm, OpenAI API, Query Generation Algorithm, Text Generation Parameters (Tone, Style, Format, Citations)",
      stack: "Node.js, Express.js, OpenAI API",
      optimizations: "Add complete full-stack functionality with login/signup and payment option. Move algorithms into server side",
      images: [CreateMyEssay1, CreateMyEssay2, CreateMyEssay3, CreateMyEssay4],
      progress: "COMPLETED",
      shortstack: "Full Stack",
    },
    {
      id: 2,
      title: "PixelBloom",
      shortDescription: "SASS MVP UI design generator built with React.js and OpenAI API",
      description: "Website for non profit religious organizations for visitors to track different churches around the globe, learn about the organization, watch sermons and live streams, donate, andmore. Made in React with Tailwind and Node and Express and Next js.",
      link: "www.pixel-bloom.com",
      link2: "www.github.com/afranci2/pixelbloom",
      features: "Facebook Live API, Stripe/Tithe.Ly Payment Processing, Volunteer Sign up Applications, Testimonial Upload, Social Media Integration, Admin Dashboard",
      stack: "Front End",
      optimizations: "SignUP/SignIN functionality",
      images: [PixelBloom1, PixelBloom2, PixelBloom3, PixelBloom4],
      progress: "COMPLETED",
      shortstack: "Front-End/Full"

    },
    {
      id: 3,
      title: "RoseInABottle",
      shortDescription: "E-commerce website design template built with React.js, Liquid, CSS/HTML",
      description: "Custom Shopify e-commerce template made to replace Debutify powered theme. Improved page speed by 156% and website conversion by 2%. Integrated with Shopify plugins, payments, and functionality.",
      link: "www.github.com/afranci2/monteweb",
      link2: "www.elmontesinai.org",
      features: "Liquid HTML/CSS, Modular Components, Shopify Integration",
      stack: "HTML/CSS, Liquid, Shopify",
      optimizations: "Add support for additional plugins and product pages",
      images: [RoseInABottle1, RoseInABottle2],
      progress: "Coming Soon",
      shortstack: "Full Stack",
      video: Rose
    },
    {
      id: 4,
      title: "Medical Preparatory Academy of Rhode Island",
      shortDescription: "Full stack web app built with Next.js, React.js, Node.js, Express.js, Tailwind, and MySQL",
      description: "Full stack web app for charter school. Design and functionality similar to charter schools in near geographic area. Currently, creating team of designers and developers. Production begins October 2022.",
      link: "N/A",
      link2: "N/A",
      features: "Interactive Events/Blog, Admin Dashboard",
      stack: "React.js, Tailwind, Next.js, Node.js, Express.js, MySQL",
      optimizations: "",
      images: [MedPrep1, MedPrep2],
      progress: "COMING SOON",
      shortstack: "Full Stack",
    },

  ]

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anthony Francisco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/som6.png" />
      </Head>
      <main className="px-8 bg-white dark:bg-black md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Image className="" src={darkMode ? DarkLogo : web7} width={45} height={45} alt="wef" />

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-red-800 text- to-red-700 text-white px-4 py-2 border-none rounded-md ml-8 dark:bg-gradient-to-r dark:from-cyan-500 text- dark:to-teal-500"
                  href="https://monte-assets.s3.amazonaws.com/other/Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl font-bold py-2 text-red-800 dark:text-teal-400 md:text-6xl">
              Anthony Francisco{" "}
            </h2>
            <h3 className="text-xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>

            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software engineer for the web and more. Join me down below and
              let's get started!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://www.linkedin.com/in/anthony-francisco-354728226/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/afranci2" target="_blank">
                <AiFillGithub />
              </a>

            </div>
            <div className="mx-auto bg-gradient-to-b from-red-700 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96 dark:bg-gradient-to-b dark:to-teal-200 dark:from-teal-500">
              <Image src={deved} layout="fill" objectFit="cover" alt="Wef" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="font-semibold text-3xl py-1 dark:text-white ">
              About Me
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Hi! My name is Anthony. I am a passionate developer with experience creating digital solutions for both business and personal use, working with non-profit organizations and talented collaborators.

            </p>
            
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
           I am committed to using technology to make a positive impact on the world. I am always eager to take on new challenges and continue learning.            </p>
            <p className="text-md pb-2 leading-8 text-gray-800 dark:text-gray-200">
            I have a diverse range of experience with programming languages, frameworks, and tools.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="Wef" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Languages</h3>

              <h4 className="py-4 text-red-700 font-medium dark:text-teal-400">Languages I Use</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">HTML/CSS</p>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">Java</p>
              <p className="text-gray-800 py-1">Liquid</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="Wef" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Frameworks</h3>

              <div>
                <h4 className="py-4 text-red-700 font-medium dark:text-teal-400">Front End</h4>
                <p className="text-gray-800 py-1">React.js</p>
                <p className="text-gray-800 py-1">Tailwind</p>
                <p className="text-gray-800 py-1">Bootstrap</p>
                <div>
                  <h4 className="py-4 pt-8 text-red-700 font-medium dark:text-teal-400">
                    Back End
                  </h4>
                  <p className="text-gray-800 py-1">Node.js</p>
                  <p className="text-gray-800 py-1">Express.js</p>
                  <p className="text-gray-800 py-1">Next.js</p>
                  <p className="text-gray-800 py-1">MongoDB</p>
                  <p className="text-gray-800 py-1">MySQL</p>
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Tools</h3>
              <h4 className="py-4 text-red-700 font-medium dark:text-teal-400">Tools I Use</h4>
              <p className="text-gray-800 py-1">AWS</p>
              <p className="text-gray-800 py-1">Git</p>
              <p className="text-gray-800 py-1">Adobe Suite</p>
              <p className="text-gray-800 py-1">Vercel</p>
              <p className="text-gray-800 py-1">Netlify</p>
              <p className="text-gray-800 py-1">Shopify</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <section className="py-8 flex justify-between text-black rounded-lg">
              <div className="w-10/12">
                <p className="text-3xl font-semibold">Projects</p>
                <p className="pt-4 text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Check out some of my projects, personal and professional! Projects ranging from simple static sites to SASS tools!

           </p>

              </div>
              <a href="https://github.com/afranci2" target="_blank">
                <AiFillGithub size={60} color={"000"} />
              </a>
            </section>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {PortfolioAssets.map((project) => {
              return (<Card algorithms={project.algorithms} key={project.id} shortDescription={project.shortDescription} video={project.video} optimizations={project.optimizations} shortstack={project.shortstack} progress={project.progress} title={project.title} image={project.images[0]} images={project.images} link={project.link} link2={project.link2} description={project.description} features={project.features} stack={project.stack}></Card>)
            })}
          </div>
        </section>

        <section className="py-20 w-full">
          <div className="w-10/12 m-auto border-2 py-12 p-4 shadow-2xl rounded-lg">
            <div className="mr-2 flex gap-2 align-center m-auto justify-center">
              <IoIosSend size={30} />
              <h1 className=" font-bold text-2xl">
                Contact Me!
              </h1>
            </div>
            <p className="justify-center flex pb-8 p-4 text-md">
              Let's get started...
            </p>
            <div className="m-auto bg-gradient-to-b from-red-700 rounded-full w-40 h-40 relative overflow-hidde md:h-46 md:w-46 dark:bg-gradient-to-b dark:to-teal-200 dark:from-teal-500">
              <Image src={deved} layout="fill" objectFit="cover" alt="Wef" />
            </div>
            {
              formSuccess && (<div className="transition ease-in flex justify-between align-center m-auto p-4 mx-8 mt-8 rounded-lg bg-green-500">
                <p>Message sent!</p>
                <AiFillCloseCircle onClick={() => setFormSuccess(false)} size={20} className="align-center cursor-pointer my-auto" />
              </div>)
            }
            <div className="flex flex-col">
              <form className="flex flex-col p-8 gap-6" onSubmit={handleSubmit}>

                <div className="flex gap-2 flex-col">
                  <label className="" htmlFor="name">Name</label>
                  <input value={formState.name}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        name: e.target.value,
                      })
                    } className="bg-slate-100 rounded-lg h-12 p-4" type="text" id="name" name="name" placeholder="Name" required="" />
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="" htmlFor="email">Email</label>
                  <input value={formState.email}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        email: e.target.value,
                      })
                    } className="bg-slate-100 rounded-lg h-12 p-4" type="text" id="email" name="email" placeholder="Email" required="" />
                </div>
                <div className="flex gap-2 flex-col">
                  <label className="" htmlFor="message">Message</label>
                  <textarea
                    className="bg-slate-100 rounded-lg p-4 h-52"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        message: e.target.value,
                      })
                    }
                  ></textarea>                </div>

                <button type="submit" className="font-medium bg-red-700 transition-colors duration-200 justify-center shadow-lg rounded-lg my-2 text-white w-7/12 m-auto flex p-2  hover:bg-red-800">{submit ? "Submitting..." : "Submit"}</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
