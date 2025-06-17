import DateProcessing from "@/subcomponents/dateprocessing";

type EducationFormat = {
  institution: string;
  location: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
}

export default function Education({ education }: { education: EducationFormat[] }) {
  return (
    <div>
      <h2 className="border-b-2">Education</h2>
      {education.map((edu: EducationFormat, index: number) => <Degree degree={edu} key={index} />)}
    </div>
  )
}

function Degree({ degree }: { degree: EducationFormat }) {
  return (
    <>
      <h3 className="font-bold text-lg">{degree.institution}, {degree.area} {degree.studyType}</h3>
      <h3 className="italic">{DateProcessing(degree.startDate)} to {DateProcessing(degree.endDate)}</h3>
      <h3>{degree.score}</h3>
      <h3 className="italic">{degree.location}</h3>
    </>
  )
}
