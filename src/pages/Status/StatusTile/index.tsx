import { JSXElementConstructor } from "react"

interface Props {
  footer: string
  heading: string
  icon: JSXElementConstructor<{className: string}>
  status?: string
}

export const StatusTile = ({ footer, heading, icon: Icon, status }: Props) => <div className="border-l-2 grow border-gray-100 flex column items-center px-6">
  <Icon className="text-6xl mr-6" />
  <div className="font-thin text-aidx-navy">
    <div className="font-display uppercase text-gray-500 font-medium text-sm mb-2">{heading}</div>
    {status && <div className="text-2xl font-bold mb-2">{status}</div>}
    <div className="font-medium">{footer}</div>
  </div>
</div>

