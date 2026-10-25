import { Card } from "@/components/Card"
import { Button } from "@/components/Button"
import { FaCircle } from "react-icons/fa"

export const Route = () => {
  return <Card title="Our Route">
    <ul className="font-semibold">
      <li className="flex items-center gap-3 uppercase"><FaCircle className="text-aidx-blue" /> Main Camp</li>
      <li className="flex items-center gap-3 uppercase"><FaCircle className="text-aidx-orange" /> Activated</li>
      <li className="flex items-center gap-3 uppercase"><FaCircle className="text-gray-500" /> Planned</li>
    </ul>
    <Button size="sm" variant="secondary">View Full Route</Button>
  </Card>
}
