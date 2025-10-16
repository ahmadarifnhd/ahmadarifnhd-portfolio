"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

import React, { useState } from "react";

export const HeroContent = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-white mr-[10px] h-5 w-10" />
          <h1 className="text-white text-[25px] ml-[-17px]">
            Ahmad Arif Nuhuda
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              The Best
            </span>{" "}
            Project Experience.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px]"
        >
          A university student specialized in computer science, passionate in Software Engineering, development,
          and business innovation I possess the ability to effectively prepare project requirements, streamline workflows,
          and strategize the design and feature development process. I am proficient in utilizing a range of tools to maximize efficiency and optimize outcomes.
          {showMore && (
            <span className="inline"> Additionally, I enjoy meeting and connecting with people and am enthusiastic about contributing ideas and insights to create impactful events,
              foster networking, and strengthen public engagement. I am eager to explore opportunities as a software developer in the field of business development and research, while also building meaningful professional relationships.
              With the knowledge I have in the field of computer science, especially in Artificial Intelligence (AI), I hope to be able to contribute fully.</span>
          )}
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show less" : "Learn more"}
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
