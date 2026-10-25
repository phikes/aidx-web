import { FaRegHeart } from "react-icons/fa"

import { Button } from "@/components/Button"
import { Logo } from "./Logo"

export const Header = () => {
  return <header className="flex items-center p-6 fixed w-[1440px] bg-linear-to-r from-white from-30% to-white/50">
    <Logo />
    <ul className="flex gap-8 ms-auto font-[500]">
      <li><a className="border-b-3 border-aidx-orange pb-3" href="#">Home</a></li>
      <li><a href="#">Expedition</a></li>
      <li><a href="#">Live</a></li>
      <li><a href="#">Team</a></li>
      <li><a href="#">Gallery</a></li>
      <li><a href="#">Support</a></li>
      <li><a href="#">Sponsors</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <Button className="ms-8" iconStart={FaRegHeart}>Support</Button>
  </header>
}
