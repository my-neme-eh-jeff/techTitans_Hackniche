"use client";
import "./howWeWorkSection.css";
import Aos from "aos";
import { useEffect } from "react";

export default function HowWeWorkSection() {
  useEffect(() => {
    Aos.init({ mirror: true, once: false, easing: "ease" });
  });

  return (
    <div>
      <div
        className="text-3xl text-center md:text-left md:text-6xl ml-5 mb-6"
        data-aos="fade-right"
      >
        How we work
      </div>
      <div className="steps-path w-full" data-aos="fade">
        <svg viewBox="0 0 1000 400" id="stepPath">
          <path
            className="steps"
            pathLength="100"
            d="M 100 200 C 250 200 150 50 300 50 L 500 50 C 650 50 550 200 700 200 L 900 200"
          />
          <path
            className="steps"
            pathLength="100"
            d="M 100 200 C 250 200 150 350 300 350 L 500 350 C 650 350 550 200 700 200 L 900 200 "
          />
          <text
            className="path-text-1 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="44"
            y="192"
            fontSize="15pt"
          >
            Company
          </text>
          <text
            className="path-text-1 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="47"
            y="214"
            fontSize="16pt"
          >
            Registers
          </text>
          <text
            className="path-text-2 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="297"
            y="10"
            fill="white"
            fontSize="16pt"
          >
            Representatives
          </text>
          <text
            className="path-text-2 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="297"
            y="30"
            fill="white"
            fontSize="16pt"
          >
            add data
          </text>
          <text
            className="path-text-2 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="294"
            y="370"
            fill="white"
            fontSize="16pt"
          >
            Web scraping
          </text>
          <text
            className="path-text-2 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="294"
            y="390"
            fill="white"
            fontSize="16pt"
          >
            started
          </text>
          <text
            className="path-text-3 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="525"
            y="375"
            fill="white"
            fontSize="16pt"
          >
            ML models run
          </text>
          <text
            className="path-text-3 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="535"
            y="25"
            fill="white"
            fontSize="16pt"
          >
            Add company data
          </text>
          <text
            className="path-text-4 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="735"
            y="175"
            fill="white"
            fontSize="16pt"
          >
            Feedback provided
          </text>
          <text
            className="path-text-5 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="950"
            y="200"
            fill="white"
            fontSize="16pt"
          >
            Stats
          </text>
          <text
            className="path-text-5 fill-black dark:fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
            x="950"
            y="226"
            fill="white"
            fontSize="16pt"
          >
            & reports
          </text>
          <circle
            cx="100"
            cy="200"
            r={10}
            className="path-point path-point-1 fill-black dark:fill-white"
          ></circle>
          <circle
            cx="300"
            cy="50"
            r={10}
            className="path-point path-point-2 fill-black dark:fill-white"
          ></circle>
          <circle
            cx="300"
            cy="350"
            r={10}
            className="path-point path-point-3 fill-black dark:fill-white"
          ></circle>
          <circle
            cx="500"
            cy="50"
            r={10}
            className="path-point path-point-4 fill-black dark:fill-white"
          ></circle>
          <circle
            cx="500"
            cy="350"
            r={10}
            className="path-point path-point-5 fill-black dark:fill-white"
          ></circle>
          <circle
            cx="700"
            cy="200"
            r={10}
            className="path-point path-point-6 fill-black dark:fill-white"
          ></circle>
          <circle
            cx="900"
            cy="200"
            r={10}
            className="path-point path-point-7 fill-black dark:fill-white"
          ></circle>
        </svg>
      </div>
    </div>
  );
}
