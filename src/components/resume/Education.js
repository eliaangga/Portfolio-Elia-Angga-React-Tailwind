import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Information Technology"
            subTitle="Telkom University (2020 - Present)"
            result="IP (Now) 3,6 and IPK (Now) 3,28 "
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, UI/UX, Quality Assurance etc."
          />
          <ResumeCard
            title="Higher School"
            subTitle="SMAN 2 Krakatau Steel (2017 - 2020)"
            result="90.15%"
            des="Studied in this school from 10th to 12th std. Social Science or Ilmu Pengetahuan Sosial like a Geographic, Accounting, History, Economic, Sociology, Antroplogy, and Japanese Language "
          />
          <ResumeCard
            title="Junior High School"
            subTitle="SMP YPW Krakatau Steel (2014 - 2017)"
            result="88% "
            des="Studied in this school SSC Subjects: English, Maths, Science, Social Sciences."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="  Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more"
            subTitle="Udemy - (05/06/2023)"
            result="Online"
            des="Learn and Focused for Implementation Skill UI/UX on my Projects"
          />
          <ResumeCard
            title="  Motion Design with Figma: Animations, Motion Graphics, UX/UI"
            subTitle="Udemy - (19/02/2023)"
            result="Online"
            des="Learn and Focused for Implementation Skill Motion Grapichs in Designed Development Frameworks and Applications"
          />
          <ResumeCard
            title="React JS Frontend Web Development for absolute beginners."
            subTitle="Udemy - (Issued on 4th November 2022)"
            result="Online"
            des=" Learned basics of ReactJs - Frontend Web Development for absolute beginners. "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education