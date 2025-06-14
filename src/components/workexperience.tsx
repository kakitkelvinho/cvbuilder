import SubHeader from "@/subcomponents/subheader";

type Experience = {
  title: string;
  location: string;
  institution: string;
  date: string;
  achievements: string[];
}

export default function WorkExperience() {
  return (
    <>
      <h2>Work Experience</h2>
      <WorkItem experience={phd} />
      <WorkItem experience={uclRA} />
      <WorkItem experience={cityuTA} />
    </>
  )
}

function WorkItem({ experience }: { experience: Experience }) {
  return (
    <div>
      <SubHeader {...experience} />
      <ul className="list-disc list-inside">
        {
          experience.achievements.map((achievement: string, index: number) => <li key={index}>{achievement}</li>)
        }
      </ul>
    </div>
  )
}

const phd: Experience = {
  title: "PhD Student",
  location: "Innsbruck, Austria",
  institution: "University of Innsbruck",
  date: "Jan 2024 - Present",
  achievements: [
    "Design and improve existing electronics for cavity locking",
    "Software engineering for experimental data analysis",
    "Responsible for maintaining group website"
  ]
}

const uclRA: Experience = {
  title: "Research Assistant",
  institution: "University College London",
  location: "London, United Kingdom",
  date: "Aug 2023 - Dec 2024",
  achievements: [
    "Independently constructed full experimental Optical Centrifuge setup",
    "Presented work to other institutes across Europe",
    "Contributed to upcoming publication on the experiment",
  ]
}

const cityuTA: Experience = {
  title: "Technical Assistant",
  institution: "City University of Hong Kong",
  location: "Hong Kong, China",
  date: "Jun 2021 - Sep 2022",
  achievements: [
    "Desgned and built a remote controlled antenna measurement platform",
    "Protyped and presented a modular IoT weather station to an interational STEM toys company",
    "Indepedently designed a novel lens antenna and published results in peer-reviewed journal"
  ]
}
