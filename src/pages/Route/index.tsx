import { Card } from "@/components/Card"
import { Button } from "@/components/Button"
import { FaCircle } from "react-icons/fa"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import "leaflet/dist/leaflet.css"
import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server"

const markerIcon = divIcon({
  html: renderToStaticMarkup(<FaCircle className="text-aidx-orange" size={12} />),
  className: "border-0",
  iconSize: [12, 12],
  iconAnchor: [8, 8],
})

export const Route = () => {
  return <Card title="Our Route">
    <div className="relative -mx-6 -mb-6">
      <MapContainer center={[44.78, 14.76]} className="h-[400px] w-full" zoom={8} scrollWheelZoom={false} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={markerIcon} position={[44.7, 14.76]}>
            <Popup>
            First point
          </Popup>
        </Marker>
      </MapContainer>

      <div className="absolute bottom-0 p-6 z-999">
        <ul className="backdrop-blur-sm font-semibold p-3 mb-3">
          <li className="flex items-center gap-3 uppercase my-3"><FaCircle className="text-aidx-blue" /> Main Camp</li>
          <li className="flex items-center gap-3 uppercase my-3"><FaCircle className="text-aidx-orange" /> Activated</li>
          <li className="flex items-center gap-3 uppercase my-3"><FaCircle className="text-gray-500" /> Planned</li>
        </ul>
        <Button size="sm" variant="secondary">View Full Route</Button>
      </div>
    </div>
  </Card>
}
