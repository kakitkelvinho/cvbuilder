import Image from "next/image";

export default function MainHeader({ name, img }: { name: string, img: string }) {
  return (
    <div className="flex justify-between items-center my-2">
      <h1>{name}</h1>
      <Image
        src={img}
        alt="Portrait picture"
        width={100}
        height={100}
        className="my-2"
      />
    </div>
  )
}
