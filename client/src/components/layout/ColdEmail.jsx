import React from "react";
import Button from "../ui/Button";

const textMetaData = `Subject: Exploring Opportunities as a Software Development Engineer\n\nDear Hiring Manager,\n\nI hope this email finds you well. My name is [Your Name], and I am writing to express my keen interest in the Software Development Engineer (SDE) position at [Company Name] as advertised.\n\nI would welcome the opportunity to discuss how I can contribute to [Company Name] and bring my unique blend of skills and enthusiasm to your esteemed team. Thank you for considering my application.\n\nLooking forward to the possibility of further discussion.\n\nWarm regards,\n\n[Your Name]
[Your Address]\n[City, State, Zip Code]\n[Your Email Address]\n[Your Phone Number]\n[Date]
`;

const ColdEmail = () => {
  return (
    <div className="flex w-full justify-between items-start transition-all duration-300 space-x-4 mt-2">
      <div className="flex justify-between items-start w-[52%] space-x-16 relative">
        <div className="bg-cyan-300 w-full h-[640px] p-4">
          <textarea
            value={textMetaData.replaceAll("%PREVIOUS_COMPANY_NAME%", "Google")}
            className="bg-transparent w-full h-full overflow-y-auto white-space-pre-wrap"
          />

          <div className="w-full h-[83%] absolute top-[6.8rem] left-0 bg-stone-900 opacity-70">
            &nbsp;
          </div>
        </div>
      </div>

      <div className="flex w-[44%] flex-col space-between items-start gap-6">
        <span className="text-stone-700 text-3xl ml-[-1rem]">Cold-email template</span>

        <div className="w-full flex justify-between flex-wrap items-start mt-2 gap-4 ml-[-1rem]">
          <div className="w-[48%]">
            <Button primary>Mail to recruiter</Button>
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

export default ColdEmail;
