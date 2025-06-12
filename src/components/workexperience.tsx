import SubHeader from "@/subcomponents/subheader";

type Experience = {
  title: string;
  location: string;
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
  location: "University of Innsbruck",
  date: "JAN 2024 - PRESENT",
  achievements: [
    "Design and improve existing electronics for cavity locking",
    "Software engineering for experimental data analysis",
    "Responsible for maintaining group website"
  ]
}

const uclRA: Experience = {
  title: "Research Assistant",
  location: "University College London",
  date: "AUG 2023 - DEC 2024",
  achievements: [
    "Independently constructed full experimental Optical Centrifuge setup",
    "Presented work to other institutes across Europe",
    "Contributed to upcoming publication on the experiment",
    "On-boarded new members"
  ]
}

const cityuTA: Experience = {
  title: "Technical Assistant",
  location: "City University of Hong Kong",
  date: "JUN 2021 - SEP 2022",
  achievements: [
    "Desgned and built a remote controlled antenna measurement platform",
    "Protyped and presented a modular IoT weather station to an interational STEM toys company",
    "Indepedently designed a novel lens antenna",
    "Published peer-review paper as first author"
  ]
}
