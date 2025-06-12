import Image from "next/image";
import WorkExperience from "@/components/workexperience";
import Education from "@/components/education";
import Awards from "@/components/awards";
import MainHeader from "@/subcomponents/mainheader";

export default function Home() {
  return (
    <>
      <MainHeader name="Kelvin Ho" img="/placeholder.jpg" />
      <WorkExperience />
      <Education />
      <Awards />
    </>
  )
}
