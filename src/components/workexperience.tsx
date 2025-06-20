import SubHeader from "@/subcomponents/subheader";


type JobFormat = {
  name: string;
  position: string;
  location: string;
  startDate: string; // ISO date format: "YYYY-MM-DD"
  endDate: string;   // ISO date format: "YYYY-MM-DD"
  highlights: string[];
}


export default function WorkExperience({ work }: { work: JobFormat[] }) {
  return (
    <>
      <h2 className="border-b-2">Work Experience</h2>
      {
        work.map((job: JobFormat, index: number) => <Job job={job} key={index} />)
      }
    </>
  )
}

function Job({ job }: { job: JobFormat }) {
  return (
    <div>
      <article><SubHeader {...job} /></article>
      <ul className="list-disc pl-6">
        {
          job.highlights.map((highlight: string, index: number) => <li key={index}>{highlight}</li>)
        }
      </ul>
    </div>
  )
}
