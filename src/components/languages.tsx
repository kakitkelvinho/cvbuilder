type LanguageFormat = {
  language: string;
  fluency: string;
}

export default function Languages({ languages }: { languages: LanguageFormat[] }) {
  const fluencyGroup = languages.reduce(
    (accumulator: Record<string, string[]>, current: LanguageFormat) => {
      if (!accumulator[current.fluency]) {
        accumulator[current.fluency] = [];
      }
      accumulator[current.fluency].push(current.language);
      return accumulator;
    }, {});

  const fluencyGroupSort = Object.entries(fluencyGroup)
    .sort((a: [string, string[]], b: [string, string[]]): number => b[1].length - a[1].length)
    .map(([fluency, langs]: [string, string[]]) => ({ fluency: fluency, languages: langs }));


  return (
    <>
      <h2 className="border-b-2">Languages</h2>
      {
        fluencyGroupSort.map((group: { fluency: string, languages: string[] }, index: number) => {
          return (
            <p key={index}><span className="font-bold">{group.fluency}</span>: {group.languages.join(", ")}</p>
          );
        })
      }
    </>
  )
}
