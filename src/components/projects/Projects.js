import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CandyCrush - LaundryWeb"
          des=" This Application focuses on customers who want to view laundry items with real-time reports, and its API is already connected between the application and the website."
          src={projectOne}
          githubLink="https://github.com/eliaangga/LaundryWebb"
          websiteLink="dycrushlaundry.000webhostapp.com"

        />
        <ProjectsCard
          title="CandyCrush - LaundryApp"
          des=" This Application focuses on customers who want to view laundry items with real-time reports, and its API is already connected between the application and the website."
          src={projectTwo}
          githubLink="https://github.com/eliaangga/LaundryApp"
          websiteLink=""
        />
        <ProjectsCard
          title="Otocompare - Figma"
          des=" The otocompare application focuses on comparing and providing feedback on vehicles."
          src={projectThree}
          githubLink="https://www.figma.com/file/ce7jlcdidQwJbAJF9th5qS/Otocompare-(Testing)?type=design&node-id=0%3A1&mode=design&t=h7Ska45C9goy5BnF-1"
          websiteLink=""
        />
        <ProjectsCard
          title="MyActivitySelf - Figma"
          des="[Not Ready] The MyActivitySelf application focuses on allowing us to see someone's activities openly, including their music preferences, activities, and personal notes."
          src={projectFour}
          githubLink="https://www.figma.com/file/8UIpC9AmF0QsHN65y6JSMJ/Project---MyActivitySelf?type=design&mode=design&t=h7Ska45C9goy5BnF-1"
          websiteLink="https://www.figma.com/file/8UIpC9AmF0QsHN65y6JSMJ/Project---MyActivitySelf?type=design&mode=design&t=h7Ska45C9goy5BnF-1"
        />
        <ProjectsCard
          title="UI Uniqlo Shop - Figma"
          des="Actually, my friend asked me to design a Uniqlo sales page in the application."
          src={projectFive}
          githubLink="https://www.figma.com/file/V2aNwqL4Ok7x9L9mnfn1mn/UI-Uniqlo?type=design&mode=design&t=h7Ska45C9goy5BnF-1"
          websiteLink="https://www.figma.com/file/V2aNwqL4Ok7x9L9mnfn1mn/UI-Uniqlo?type=design&mode=design&t=h7Ska45C9goy5BnF-1"
        />
        <ProjectsCard
          title="My Portofolio Designer - Drive"
          des=" This is my design portfolio."
          src={projectFour}
          githubLink="https://drive.google.com/drive/folders/162QorEhIIERuEgBWSPm997DWaOl6tGZ_?usp=sharing"
          websiteLink="https://drive.google.com/drive/folders/162QorEhIIERuEgBWSPm997DWaOl6tGZ_?usp=sharing"
        />
      </div>
    </section>
  );
}

export default Projects