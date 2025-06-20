import SubHeader from "@/subcomponents/subheader";

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
      <SubHeader position={`${degree.area}, ${degree.studyType}`} location={degree.location} startDate={degree.startDate} endDate={degree.endDate} name={degree.institution} />
      <p>{degree.score}</p>
    </>
  )
}
