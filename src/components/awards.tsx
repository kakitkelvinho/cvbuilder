import SubHeader from "@/subcomponents/subheader";

type awardProp = {
  title: string;
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
  location: "HKSAR Government",
  date: "SEP 2019 - JUN 2023",
  description: "Full scholarship for 4 years tuition for my degree."
}

const tmentor: awardProp = {
  title: "Senior Mentor Administrative Excellence",
  location: "University College London",
  date: "SEP 2022 - JAN 2023",
  description: "Outstanding organization and management of university's mentorship program."
}

