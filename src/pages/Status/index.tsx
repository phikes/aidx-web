import cx from "clsx"
import { FaTowerBroadcast } from "react-icons/fa6"
import { StatusTile } from "./StatusTile"

import { FaHeadset, FaRegCompass, FaRegSun } from "react-icons/fa"

const Sun = ({ className }: {className: string}) => <FaRegSun className={cx("text-orange-400", className)} />

export const Status = () => {
  return <div className="bg-white flex rounded-xl shadow-md py-6">
    <StatusTile heading="Current Island" icon={FaRegCompass} status="CI-123" footer="Olib Island" />
    <StatusTile heading="On Air" icon={FaTowerBroadcast} footer="40 m CW" />
    <StatusTile heading="Last QSO" icon={FaHeadset} status="DL9PK" footer="19:44 UTC" />
    <StatusTile heading="Weather" icon={Sun} status="27 ℃" footer="Sunny" />
  </div>
}
