import React from "react";
import Button from "../ui/Button";

const textMetaData = `[Your Name]\n[Your Address]\n[City, State, Zip Code]\n[Your Email Address]\n[Your Phone Number]\n[Date]\n\nDear Hiring Manager,\n\nI am writing to express my interest in the Software Development Engineer (SDE) position at Amazon as advertised. With a solid foundation as an Ex-Associate Engineer Trainee at %PREVIOUS_COMPANY_NAME%, coupled with 9 months of hands-on experience in MERN stack technology, I am excited about the opportunity to contribute to Amazon's innovative projects and dynamic work environment.\n\nThroughout my tenure at %PREVIOUS_COMPANY_NAME%, I honed my skills in full-stack development, specializing in the MERN stack. My proficiency in Agile methodologies and microservices architecture has enabled me to deliver scalable and high-performance solutions, aligning perfectly with Amazon's focus on innovation and customer satisfaction. \n\nMoreover, I am deeply dedicated to personal and professional growth. I believe in continuous learning and keeping abreast of the latest technologies and industry trends.  I look forward to the possibility of discussing how my skills and experiences align with the needs of your team.\n\nWarm regards,\nHarsh Vardhan`;

const CoverLetter = () => {
  return (
    <div className="flex w-full justify-between items-start space-x-4 mt-2 transition-all duration-300">
      <div className="flex justify-between items-start w-[52%] space-x-16 relative">
        <div className="bg-cyan-300 w-full h-[842px] p-4">
          <textarea
            value={textMetaData.replaceAll("%PREVIOUS_COMPANY_NAME%", "Google")}
            className="bg-transparent w-full h-full overflow-y-auto white-space-pre-wrap"
          />

          <div className="w-full h-[73.5%] absolute top-56 left-0 bg-stone-900 opacity-70">
            &nbsp;
          </div>
        </div>
      </div>

      <div className="flex w-[44%] flex-col space-between items-start gap-6">
        <span className="text-stone-700 text-3xl ml-[-1rem]">Features</span>

        <ul className="text-stone-600 text-lg flex flex-col gap-1 list-disc font-light">
          <li>A4 / US-Letter Size</li>
          <li>Editable Text</li>
          <li>Fully customizable</li>
          <li>Print ready format</li>
          <li>Match the design to your resume</li>
        </ul>

        <div className="w-full flex justify-between flex-wrap items-start mt-2 gap-4 ml-[-1rem]">
          <div className="w-[48%]">
            <Button primary>Download</Button>
          </div>

          <div className="w-[48%]">
            <Button primary>
              <div className="flex justify-center items-center space-x-2 w-fit">
                <img
                  src="/icons/copy.svg"
                  alt="copy_icon"
                  className="bg-center items-center !object-cover"
                />
                <span>Copy to clipboard</span>
              </div>
            </Button>
          </div>

          <div className="w-full">
            <Button type="transparent">Customised with Chatgpt</Button>
          </div>

          <div className="flex space-x-2 justify-center items-center mt-4 text-green-600 w-full">
            <img src="/icons/tick-nonBg.svg" alt="tick-icon" />
            <span>
              Your cover-letter automatically got saved in your profile
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
