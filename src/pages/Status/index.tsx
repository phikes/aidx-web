import { FaTowerBroadcast } from "react-icons/fa6"
import { StatusTile } from "./StatusTile"

import { FaHeadset, FaRegCompass, FaRegSun } from "react-icons/fa"

export const Status = () => {
  return <div className="bg-white flex rounded-xl shadow-md py-6">
    <StatusTile heading="Current Island" icon={FaRegCompass} status="CI-123" footer="Olib Island" />
    <StatusTile heading="On Air" icon={FaTowerBroadcast} footer="40 m CW" />
    <StatusTile heading="Last QSO" icon={FaHeadset} status="DL9PK" footer="19:44 UTC" />
    <StatusTile heading="Weather" icon={FaRegSun} status="27 ℃" footer="Sunny" />
  </div>
}
