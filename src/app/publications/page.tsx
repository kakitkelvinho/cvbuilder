
const basePath = process.env.NODE_ENV === 'production' ? '/cvbuilder' : '';

export default function Publications() {
  return (
    <>
      <h1 className="text-5xl font-bold py-2">Publications</h1>
      <div className="text-lg">
        <ol className="list-decimal">
          <li className="py-2">
            Ho, Ka Kit Kelvin, Geng-Bo Wu, Bao-Jie Chen, Ka Fai Chan, and Chi Hou Chan. 2023.
            “Spot Focusing Coma Correction by Linearly Polarized Dual-Transmitarray Antenna in the Terahertz Region.”
            IEEE Transactions on Terahertz Science and Technology 13: 493–502. <a href="https://doi.org/10.1109/TTHZ.2023.3297074" className="text-blue-500">https://doi.org/10.1109/TTHZ.2023.3297074.</a>
          </li>
          <li className="py-2">
            Rademacher, Markus, Ka Kit Kelvin Ho, Peiyao Xiong, Antonio Pontin, Jonathan Gosling, Marko Toros, and Peter F Barker. 2024.
            “An Optical Centrifuge for Levitated Nanoparticles.”
            In International Society for Optics and Photonics, edited by Jacob Scheuer and Selim M Shahriar,
            PC12912:PC129121X. SPIE. <a href="https://doi.org/10.1117/12.3001577" className="text-blue-500">https://doi.org/10.1117/12.3001577.</a>
          </li>
          <li className="py-2">
            Xiong, Peiyao, Ka Kit Kelvin Ho, J Gosling, M Rademacher, and P F Barker. 2025.
            “Optical Centrifuge for Nanoparticles.”
            2025. <a href="https://arxiv.org/abs/2506.16134" className="text-blue-500">https://arxiv.org/abs/2506.16134.</a>
          </li>
        </ol>
      </div>
      <div className="py-6 text-lg">
        <p className="py-2">I completed my master's thesis at University College London under the supervision of Professor Peter Barker. The thesis can be found <a href={`${basePath}/THESIS_Kelvin.pdf`} className="text-blue-500">here</a>. The work I have completed has also be incorporated in publications 2 and 3 listed above.</p>
        <p className="py-2">
          Due to COVID-19, I returned to Hong Kong in April 2020, halfway through my first year of undergraduate, and had the honor of working in the State Key Lab of Terahertz and Millimeter Waves.
          My time there has culminlated with a research project which resulted in the first publication listed above.
        </p>
      </div>
    </>
  )
}
