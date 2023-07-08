import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      {/* <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum"
            subTitle="Lorem ipsum"
            result=""
            des="Lorem ipsum"
          />
          <ResumeCard
            title="Lorem ipsum"
            subTitle="1Lorem ipsum"
            result="Lorem ipsum"
            des=". Lorem ipsum"
          />
          <ResumeCard
            title="Lorem ipsum"
            subTitle="adfasLorem ipsum"
            result="rank"
            des="Lorem ipsum"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum"
            subTitle="Lorem ipsum"
            result="Lorem ipsum"
            des="Lorem ipsum"
          />
          <ResumeCard
            title="Lorem ipsum"
            subTitle="Lorem ipsum"
            result="Lorem ipsum"
            des="Lorem ipsum"
          />
          <ResumeCard
            title="Lorem ipsum"
            subTitle="Lorem ipsum"
            result="Lorem ipsum"
            des="Lorem ipsum."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
