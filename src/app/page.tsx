import WorkExperience from "@/components/workexperience";
import Education from "@/components/education";
import Awards from "@/components/awards";
import MainHeader from "@/subcomponents/mainheader";
import resume from "@/data/resume.json";
import Languages from "@/components/languages";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <MainHeader basics={resume.basics} />
      <div className="flex flex-col md:flex-row gap-8 print:flex-row">
        <div className="flex-1 print:w-2/3">
          <WorkExperience work={resume.work} />
          <Education education={resume.education} />
        </div>
        <div className="w-full md:w-1/3 print:w-1/3">
          <Awards awards={resume.awards} />
          <Languages languages={resume.languages} />
          <Skills skills={resume.skills} />
        </div>
      </div>
    </>
  )
}
