export default function SubHeader({ title, date, location }: { title: string, date: string, location: string }) {
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h3 className="text-lg">{location}</h3>
        <h3 className="text-lg">{date}</h3>
      </div>
      <h3 className="italic">{title}</h3>
    </>
  )
}
