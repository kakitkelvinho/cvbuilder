type SkillFormat = {
  name: string;
  level: string;
  keywords: string[];
}

export default function Skills({ skills }: { skills: SkillFormat[] }) {
  return (
    <>
      <h2 className="border-b-2">Skills</h2>
      {skills.map((skill: SkillFormat, index: number) => {
        return (
          <p key={index}>
            <span className="font-semibold">{skill.name}</span>: {skill.keywords.join(", ")}
          </p>
        )
      })
      }
    </>
  )
}
