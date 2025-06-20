import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/cvbuilder' : '';
type Profile = {
  network: string;
  logo?: string;
  username: string;
  url: string;
}

type Basics = {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  summary: string;
  profiles: Array<Profile>;
}


export default function MainHeader({ basics }: { basics: Basics }) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center py-2 border-b border-gray-300  print:flex-row print:items-start print:gap-8 print:pb-4">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold">{basics.name}</h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-sm">
            <p className="mr-2">Email: {basics.email}</p>
            <p className="ml-2">Phone: {basics.phone}</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-sm">
            {basics.profiles.map((profile: Profile, index: number) => (
              <p key={index} className="flex items-center gap-1">
                <LogoRender profile={profile} />
                <a href={profile.url} target="_blank" rel="noopener noreferrer" className="underline">
                  {profile.url}
                </a>
              </p>
            ))}
          </div>
        </div>
        <Image
          src={`${basePath}/${basics.image}`}
          alt="Portrait picture"
          width={100}
          height={100}
          style={{ width: '15%', height: 'auto' }}
          className="mt-4 md:mt-0 shrink-0 print:mt-0 print:mx-2"
        />
      </div>
    </>
  )
}

function LogoRender({ profile }: { profile: Profile }) {
  if (profile.logo) {
    return (
      <Image
        src={`${basePath}/${profile.logo}`}
        alt={`${profile.network} logo`}
        width={16}
        height={16}
      />);
  }
  else {
    return (
      <span className="font-medium">{profile.network}:</span>
    );
  }
}
