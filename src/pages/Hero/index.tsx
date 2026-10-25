import cx from "clsx"
import { hero } from "./index.module.scss"
import { Button } from "@/components/Button"
import { FaTowerBroadcast } from "react-icons/fa6"
import { FaHeart, FaMastodon } from "react-icons/fa"

export const Hero = () => {
  return <div className={cx(hero, "flex column items-center pt-[144px]")}>
    <div className="p-12">
      <h1 className="mb-6 font-display text-6xl uppercase">
        CQ from the<br />
        <span className="text-8xl">Adriatic Islands</span><br />
        <span className="text-aidx-orange">DX-pedition 2027</span>
      </h1>
      <p className="font-[500] w-1/2 mb-6">
        Seven ameteur radio operators. One boat. Twelve islands.
        Join us as we activate rare Croation islands along the
        Adriatic Coast while exploring one of Europe's most
        beautiful coastlines.
      </p>
      <div className="flex gap-3">
        <Button iconStart={FaTowerBroadcast} variant="secondary">Live Log</Button>
        <Button iconStart={FaMastodon} variant="secondary">Follow on Mastodon</Button>
        <Button iconStart={FaHeart}>Support</Button>
      </div>
    </div>
  </div>
}
