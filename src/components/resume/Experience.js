import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="User Interface Designer"
            subTitle="LDKPI Indonesian AID, Kementerian Keuangan Republik Indonesia - (2023 - Present)"
            result="Jakarta Pusat, DKI Jakarta, Indonesia"
            des="LDKPI focuses on being an institution that provides grant assistance to countries in need."
          />
          <ResumeCard
            title="Financial Accounting"
            subTitle="Vision - (2023 - Present)"
            result="Indonesia"
            des="..."
          />
          <ResumeCard
            title="Agent Consigno and Assistant Manager"
            subTitle="JNE - Agen Popy - (03/2020 - 07/2023)"
            result="Cilegon, Banten, Indonesia"
            des=" This job involves working in a shipping expedition company on a national and international scale. In my position as Trusted Relationship, I manage the financial aspects of gross and net income from daily earnings, as well as managing the tasks of employees within the office."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">20XX - 20XX</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum"
            subTitle="Lorem ipsum"
            result="Lorem ipsum"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum"
            subTitle="Lorem ipsum"
            result="Negara Lorem ipsum"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="App Developer"
            subTitle="Lorem ipsum)"
            result="Lorem ipsum"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
