type DegreeInfo = {
  title: string;
  location: string;
  date: string;
  extraInfo?: ExtraInfo;
}

type ExtraInfo = {
  grade: string;
  thesis: string;
  additionalInfo: string;
}

export default function Education() {
  return (
    <div>
      <h2>Education</h2>
      <Degree degree={masters} />
    </div>
  )
}

function Degree({ degree }: { degree: DegreeInfo }) {
  return (
    <>
      <h3>{degree.title}</h3>
      <h4>{degree.location}</h4>
      <h4>{degree.date}</h4>
      {
        degree.extraInfo && (
          <>
            <p>Thesis: {degree.extraInfo.thesis}</p>
            <p>Grade: {degree.extraInfo.grade}</p>
            <p>{degree.extraInfo.additionalInfo}</p>
          </>
        )
      }
    </>
  )
}


const masters: DegreeInfo = {
  title: "MSci in Theoretical Physics",
  institution: "University College London",
  date: "SEP 2019 - JUN 2023",
  extraInfo: {
    thesis: "Fast Rotational Control in Levitated Optomechanics",
    grade: "First Class with Honours",
    additionalInfo: "With 4 year full scholarship from HK government."
  }
}
