import DateProcessing from "@/subcomponents/dateprocessing";

type awardFormat = {
  title: string;
  date: string;
  location: string;
  awarder: string;
  summary: string;
}

export default function Awards({ awards }: { awards: awardFormat[] }) {
  return (
    <div>
      <h2 className="border-b-2">Awards</h2>
      {awards.map((award: awardFormat, index: number) => <Award award={award} key={index} />)}
    </div>
  )
}

function Award({ award }: { award: awardFormat }) {
  return (
    <>
      <div className="flex justify-between items-center mt-2 border-t border-gray-400">
        <h3 className="text-lg">{award.title}</h3>
        <h3 className="italic">{DateProcessing(award.date)}</h3>
      </div>
      <div className="flex justify-between items-center mb-2 border-b border-grau-400">
        <h3 className="italic">{award.awarder}</h3>
        <h3 className="italic">{award.location}</h3>
      </div>
      <p>{award.summary}</p>
    </>
  )
}
