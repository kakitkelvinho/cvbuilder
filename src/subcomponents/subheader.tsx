import DateProcessing from "./dateprocessing";

export default function SubHeader({ position, startDate, endDate, name, location }: { position: string, startDate: string, endDate: string, location: string, name: string }) {
  return (
    <>
      <div className="flex justify-between items-center mt-2 border-t border-gray-400">
        <h3 className="text-lg">{name}</h3>
        <h3 className="italic">{DateProcessing(startDate)} to {DateProcessing(endDate)}</h3>
      </div>
      <div className="flex justify-between items-center mb-2 border-b border-gray-400">
        <h3 className="italic">{position}</h3>
        <h3 className="italic">{location}</h3>
      </div>
    </>
  )
}


