export default function SubHeader({ title, date, institution, location }: { title: string, date: string, institution: string, location: string }) {
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h3 className="text-lg">{institution}</h3>
        <h3 className="">{date}</h3>
      </div>
      <div className="flex justify-between items-center my-4">
        <h3 className="italic">{title}</h3>
        <h3 className="italic">{location}</h3>
      </div>
    </>
  )
}
