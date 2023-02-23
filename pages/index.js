import Head from "next/head";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/som11.png";
import code from "../public/cube.png";
import design from "../public/cube2.png";
import consulting from "../public/tool.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import web7 from "../public/My project-1 (11) (1).png";
import Card from './Card'
import DarkLogo from '../public/darklogo.png'
import MonteImage1 from '../public/monte1.png'
import MonteImage2 from '../public/monte2.png'
import MonteImage3 from '../public/monte3.png'
import PixelBloom1 from '../public/pixelbloom1.png'
import PixelBloom2 from '../public/pixelbloom2.png'
import PixelBloom3 from '../public/pixelbloom3.png'
import PixelBloom4 from '../public/pixelbloom4.png'

import CreateMyEssay1 from '../public/createmyessay1.png'
import CreateMyEssay2 from '../public/createmyessay2.png'
import CreateMyEssay3 from '../public/createmyessay3.png'
import CreateMyEssay4 from '../public/createmyessay4.png'
import RoseInABottle1 from '../public/roseinabottle1.png'
import RoseInABottle2 from '../public/roseinabottle2.png'



const Rose = "https://monte-assets.s3.amazonaws.com/video/Screen_Recording_2023-02-06_at_12_51_03_PM_AdobeExpress.mp4"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const PortfolioAssets = [
    {
      title: "Monte Sinai",
      shortDescription: "Website for non profit religious organizations for visitors to track different churches around the globe",
      description: "This website is for a non profit religious organization with locations around the globe. It allows visitors to find different churches around the globe, learn about the organization, watch sermons and live streams, donate, andmore. Made in React with Tailwind and Node and Express and Next js.",
      link:"www.elmontesinai.org",
      link2:"www.github.com/afranci2/monteweb",
      features:"Facebook Live API, Stripe/Tithe.Ly Payment Processing, Volunteer Sign up Applications, Testimonial Upload, Social Media Integration, Admin Dashboard",
      stack: "Client: HTML, CSS, Javascript, TypeScript, React, NextJS, TailwindCSS, POSTCSS Javascript, Node, Express",
      optimizations: "Animations: add animation similar to https://www.revolut.com/en-US/ when hovering over cards",
      images:[MonteImage1,MonteImage2,MonteImage3],
      progress:"IN PROGRESS",
      shortstack:"Full Stack"
    },
    {
      title: "CreateMyEssay",
      shortDescription: "Website for non profit religious organizations for visitors to track different churches around the globe",
      description: "Website for non profit religious organizations for visitors to track different churches around the globe, learn about the organization, watch sermons and live streams, donate, andmore. Made in React with Tailwind and Node and Express and Next js.",
      link:"www.github.com/afranci2/monteweb",
      link2:"www.elmontesinai.org",
      features:"Facebook Live API, Stripe/Tithe.Ly Payment Processing, Volunteer Sign up Applications, Testimonial Upload, Social Media Integration, Admin Dashboard",
      stack: "Front End:wf",
      optimizations: "Wefwef",
      images:[CreateMyEssay1, CreateMyEssay2, CreateMyEssay3, CreateMyEssay4],
      progress: "COMPLETED",
      shortstack:"Full Stack",
    },
    {
      title: "PixelBloom",
      shortDescription: "Website for non profit religious organizations for visitors to track different churches around the globe",
      description: "Website for non profit religious organizations for visitors to track different churches around the globe, learn about the organization, watch sermons and live streams, donate, andmore. Made in React with Tailwind and Node and Express and Next js.",
      link:"www.pixel-bloom.com",
      link2:"www.github.com/afranci2/pixelbloom",
      features:"Facebook Live API, Stripe/Tithe.Ly Payment Processing, Volunteer Sign up Applications, Testimonial Upload, Social Media Integration, Admin Dashboard",
      stack: "Front End:wf",
      optimizations: "Wefwef",
      images:[PixelBloom1, PixelBloom2, PixelBloom3, PixelBloom4],
      progress: "COMPLETED",
      shortstack:"Front-End/Full"

    },
    {
      title: "RoseInABottle",
      shortDescription: "Website for non profit religious organizations for visitors to track different churches around the globe",
      description: "Website for non profit religious organizations for visitors to track different churches around the globe, learn about the organization, watch sermons and live streams, donate, andmore. Made in React with Tailwind and Node and Express and Next js.",
      link:"www.github.com/afranci2/monteweb",
      link2:"www.elmontesinai.org",
      features:"Facebook Live API, Stripe/Tithe.Ly Payment Processing, Volunteer Sign up Applications, Testimonial Upload, Social Media Integration, Admin Dashboard",
      stack: "Front End:wf",
      optimizations: "Wefwef",
      images:[RoseInABottle1,RoseInABottle2],
      progress: "COMPLETED",
      shortstack:"Full Stack",
      video:Rose
    },
    {
      title: "Medical Preparatory Academy of Rhode Island",
      shortDescription: "Website for non profit religious organizations for visitors to track different churches around the globe",
      description: "Website for non profit religious organizations for visitors to track different churches around the globe, learn about the organization, watch sermons and live streams, donate, andmore. Made in React with Tailwind and Node and Express and Next js.",
      link:"www.github.com/afranci2/monteweb",
      link2:"www.elmontesinai.org",
      features:"Facebook Live API, Stripe/Tithe.Ly Payment Processing, Volunteer Sign up Applications, Testimonial Upload, Social Media Integration, Admin Dashboard",
      stack: "Front End:wf",
      optimizations: "Wefwef",
      images:[MonteImage1,MonteImage2,MonteImage3],
      progress: "COMING SOON",
      shortstack:"Full Stack",
      video:Rose
    },

  ]

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anthony Francisco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/darklogo.png" />
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
              From the transition from Pre-Med path to Computer Science, I've
              done work for non-profit organizations and collaborated with
              talanted people to create digital products for both business and
              personal use. With a passion for entrepreneuship and media, I am
              focused on making practical digital solutions.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I have experience with a wide range of programming languages,
              frameworks, and tools.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="Wef" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Languages</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
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
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
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
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
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
            <h3 className="text-3xl font-semibold py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Check out my projects, personal and professional! Projects ranging
              from simple static sites to SASS tools!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {PortfolioAssets.map((project)=>{
              return (<Card shortDescription={project.shortDescription} video={project.video} optimizations={project.optimizations} shortstack={project.shortstack} progress={project.progress} title={project.title} image={MonteImage1} images={project.images} link={project.link} link2={project.link2} description={project.description} features={project.features} stack={project.stack}></Card>)
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
