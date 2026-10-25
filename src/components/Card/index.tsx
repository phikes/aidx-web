import { JSXElementConstructor, PropsWithChildren, ReactElement } from "react"

interface Props extends PropsWithChildren {
  icon?: JSXElementConstructor<{}>
  title: string
}

export const Card = ({ children, icon: Icon, title }: Props) => {
  return <div className="p-6 shadow-md rounded-xl">
    <h2 className="flex gap-3 items-center uppercase font-black">{Icon && <Icon />} {title}</h2>
    <div>
      {children}
    </div>
  </div>
}
