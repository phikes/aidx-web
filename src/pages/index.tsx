import type { HeadFC, PageProps } from "gatsby"
import { useSiteMetadata } from "@/hooks/useSiteMetadata"
import { Header } from "./Header"
import type { FC } from "react"
import { Hero } from "./Hero"
import { Route } from "./Route"
import { Status } from "./Status"
import { Feed } from "./Feed"
import { Log } from "./Log"

const IndexPage: FC<PageProps> = () => {
  return <div className="w-[1440px]">
    <Header />
    <Hero />
    <div className="px-12">
      <div className="-mt-18 h-36 mb-6">
        <Status />
      </div>
      <div className="flex gap-6 justify-between">
        <div className="grow"><Route /></div>
        <div className="grow"><Feed /></div>
        <div className="grow"><Log /></div>
      </div>
    </div>
  </div>
}

export default IndexPage

export const Head: HeadFC = () => {
  const siteMetadata = useSiteMetadata()

  return <>
    <html className="h-screen" />
    <title>{siteMetadata?.title} - Home</title>
    <body className="h-full flex flex-col items-center" />
  </>
}
