import cx from "clsx"
import { JSXElementConstructor, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
  as?: "button" | "a"
  className?: string
  iconStart?: JSXElementConstructor<{}>
  size?: "sm" | "md"
  variant?: "primary" | "secondary" | "outline"
}

const SIZE_CLASSNAMES: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-xs",
  md: ""
}

const VARIANT_CLASSNAMES: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-aidx-orange text-white",
  secondary: "bg-aidx-navy text-white",
  outline: "bg-transparent border-2 border-gray-400 text-white",
}

export const Button = ({ as = "button", children, className, iconStart, size="md", variant = "primary" }: Props) => {
  const IconStart = iconStart

  return <a
    className={cx(className, SIZE_CLASSNAMES[size], VARIANT_CLASSNAMES[variant], "flex items-center gap-3 rounded-md uppercase font-[500] px-6 py-3")}
  >
    {IconStart && <IconStart />}
    {children}
  </a>
}
