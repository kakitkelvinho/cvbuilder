import SubHeader from "@/subcomponents/subheader";

type awardProp = {
  title: string;
  institution: string;
  location: string;
  date: string;
  description: string;
}

export default function Awards() {
  return (
    <div>
      <h2>Awards</h2>
      <Award award={hkses} />
      <Award award={tmentor} />
    </div>
  )
}

function Award({ award }: { award: awardProp }) {
  return (
    <>
      <SubHeader {...award} />
      <p>{award.description}</p>
    </>
  )
}

const hkses: awardProp = {
  title: "Hong Kong Scholarship for Excellence Scheme",
  institution: "HKSAR Government",
  location: "Hong Kong, China",
  date: "Sep 2019 - Jun 2023",
  description: "Full scholarship for 4 years tuition for my degree."
}

const tmentor: awardProp = {
  title: "Senior Mentor Administrative Excellence",
  institution: "University College London",
  location: "London, United Kingdom",
  date: "Sep 2022 - Jan 2023",
  description: "Outstanding organization and management of university's mentorship program."
}

