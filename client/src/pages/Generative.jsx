import React from "react";
import TabbedComponent from "../components/ui/TabbedComponent";

const tabsMetaData = [
  {
    id: 1,
    name: "Cover letter",
  },
  {
    id: 2,
    name: "Gmail template",
  },
  {
    id: 3,
    name: "Referral template",
  },
];

const textMetaData = `[Your Name]\n[Your Address]\n[City, State, Zip Code]\n[Your Email Address]\n[Your Phone Number]\n[Date]\n\nDear Hiring Manager,\n\nI am writing to express my interest in the Software Development Engineer (SDE) position at Amazon as advertised. With a solid foundation as an Ex-Associate Engineer Trainee at %PREVIOUS_COMPANY_NAME%, coupled with 9 months of hands-on experience in MERN stack technology, I am excited about the opportunity to contribute to Amazon's innovative projects and dynamic work environment.\n\nThroughout my tenure at %PREVIOUS_COMPANY_NAME%, I honed my skills in full-stack development, specializing in the MERN stack. My proficiency in Agile methodologies and microservices architecture has enabled me to deliver scalable and high-performance solutions, aligning perfectly with Amazon's focus on innovation and customer satisfaction. \n\nMoreover, I am deeply dedicated to personal and professional growth. I believe in continuous learning and keeping abreast of the latest technologies and industry trends.  I look forward to the possibility of discussing how my skills and experiences align with the needs of your team.\n\nWarm regards,\nHarsh Vardhan`;


const Generative = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      {/* Tabbed components -- Results */}
      <div className="w-[88%] m-auto mt-10 flex flex-col gap-8 items-start">
        <h6 className="text-stone-700 text-3xl font-semibold">
          Your Documents
        </h6>
        <div className="w-[64%] m-auto mt-5 rounded-xl">
          <TabbedComponent tabsMetaData={tabsMetaData} />
        </div>
        <div className="flex justify-between items-start space-x-4 relative">
          <div className="bg-cyan-300 w-[595px] h-[842px] p-4">
            <textarea
              value={textMetaData}
              className="bg-transparent w-full h-full overflow-y-auto white-space-pre-wrap"
            />

            <div className="w-full h-[73%] absolute top-56 left-0 bg-stone-900 opacity-70">
                &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generative;
