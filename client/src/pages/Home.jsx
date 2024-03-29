import React from "react";
import Navbar from "../components/layout/Navbar";
import SectionWrapper from "../components/layout/SectionWrapper";
import ListView from "../components/ui/ListView";
import Button from "../components/ui/Button";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const sectionsMetaData = [
  {
    id: 1,
    heading: "Lets hear",
    subHeading: "good news",
    imgSrc: "Section-1",
    points: ["One", "Two", "Three", "Four"],
  },
  {
    id: 1,
    heading: "Lets hear",
    subHeading: "good news",
    imgSrc: "Section-2",
    points: ["One", "Two", "Three", "Four"],
  },
];

const newsHighlightsMetaData = [
  {
    id: 1,
    desctiption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    id: 2,
    desctiption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    desctiption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col gap-16">
        <Header />

        {/* 1. Section-1 */}
        <SectionWrapper imgSrc={"section-1"} align="left">
          <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center space-x-2 w-fit">
              <p className="text-3xl text-stone-800 font-semibold">
                {sectionsMetaData[0].heading}
              </p>
              <p className="text-3xl text-cyan-500 font-semibold">
                {sectionsMetaData[0].subHeading}
              </p>
            </div>

            <p className="text-lg text-stone-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
            </p>

            <div className="w-full">
              <ListView points={sectionsMetaData[0].points} />
            </div>

            <div className="w-[13rem]">
              <Button primary={true}>Manage your resume</Button>
            </div>
          </div>
        </SectionWrapper>

        {/* 1. Section-2 */}
        <SectionWrapper imgSrc={"section-2"} align="right">
          <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center space-x-2 w-fit">
              <p className="text-3xl text-stone-800 font-semibold">
                {sectionsMetaData[0].heading}
              </p>
              <p className="text-3xl text-cyan-500 font-semibold">
                {sectionsMetaData[0].subHeading}
              </p>
            </div>

            <p className="text-lg text-stone-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
            </p>

            <div className="w-full">
              <ListView points={sectionsMetaData[0].points} />
            </div>

            <div className="w-[13rem]">
              <Button primary={true}>Manage your resume</Button>
            </div>
          </div>
        </SectionWrapper>

        {/* 1. Section-3 */}
        <SectionWrapper imgSrc={"section-3"} align="left">
          <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center space-x-2 w-fit">
              <p className="text-3xl text-stone-800 font-semibold">
                {sectionsMetaData[0].heading}
              </p>
              <p className="text-3xl text-cyan-500 font-semibold">
                {sectionsMetaData[0].subHeading}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {newsHighlightsMetaData.map((item) => (
                <div className="flex justify-start items-center space-x-4 cursor-pointer" key={item?.id}>
                  <img src="/graphics/sections/section-2.svg" alt="news_img" className="h-16 w-16 rounded-full bg-center border-[1px] border-stone-2k00 bg-cover !object-cover"/>

                  <p className="text-lg text-stone-500">
                    {item?.desctiption}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-[13rem]">
              <Button primary={true}>Manage your resume</Button>
            </div>
          </div>
        </SectionWrapper>

        {/* 1. Section-4 */}
        <SectionWrapper imgSrc={"section-4"} align="right">
          <div className="w-full flex flex-col gap-6">
            <div className="flex justify-between items-center space-x-2 w-fit">
              <p className="text-3xl text-stone-800 font-semibold">
                {sectionsMetaData[0].heading}
              </p>
              <p className="text-3xl text-cyan-500 font-semibold">
                {sectionsMetaData[0].subHeading}
              </p>
            </div>

            <p className="text-lg text-stone-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
            </p>

            <div className="w-[13rem]">
              <Button primary={true}>Manage your resume</Button>
            </div>
          </div>
        </SectionWrapper>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
