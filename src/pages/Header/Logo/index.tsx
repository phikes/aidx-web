import { StaticImage } from "gatsby-plugin-image"

export const Logo = () => {
  return <div className="flex gap-3">
    <StaticImage
      alt="The logo of AIDX showing a sunset, the letters AIDX and an ocean with islands below"
      height={96}
      width={96}
      src="./logo.jpeg" />
    <div className="font-display flex flex-col justify-center uppercase text-2xl font-700">
      <span className="text-aidx-navy">Adriatic Islands</span>
      <span className="text-aidx-orange">DX-pedition 2027</span>
    </div>
  </div>
}
