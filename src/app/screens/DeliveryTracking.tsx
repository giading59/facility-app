import { useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, MapPin, Clock, Package, Navigation } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { motion } from "motion/react";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function DeliveryTracking() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(0);

  // Berlin coordinates
  const centerPosition: [number, number] = [52.520008, 13.404954];

  const locations = [
    {
      id: 1,
      name: "CoWork Berlin Mitte",
      address: "Friedrichstraße 123, 10117 Berlin",
      coordinates: [52.520008, 13.404954] as [number, number],
      deliveryTime: "08:00 - 10:00",
      status: "Geplant",
      items: "25 kg Salat Mix",
      distance: "0 km"
    },
    {
      id: 2,
      name: "CoWork Kreuzberg",
      address: "Oranienstraße 45, 10969 Berlin",
      coordinates: [52.499167, 13.420556] as [number, number],
      deliveryTime: "10:30 - 12:00",
      status: "Nächster Stop",
      items: "18 kg Gemüse Box",
      distance: "3.5 km"
    },
    {
      id: 3,
      name: "CoWork Prenzlauer Berg",
      address: "Kollwitzstraße 78, 10435 Berlin",
      coordinates: [52.535556, 13.417778] as [number, number],
      deliveryTime: "14:00 - 16:00",
      status: "In Warteschlange",
      items: "30 kg Beilagen Mix",
      distance: "5.2 km"
    }
  ];

  // Create route path
  const routePath = locations.map(loc => loc.coordinates);

  return (
    <div className="size-full bg-[#F8F9FA] flex flex-col">
      {/* Header */}
      <div className="bg-[#2A1F5B] border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/facility-dashboard" className="text-white/70 hover:text-white">
                <ChevronLeft size={24} />
              </Link>
              <div>
                <h1 className="text-xl text-white">Lieferroute & Tracking</h1>
                <p className="text-sm text-white/70">Heute, 11. April 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#9DD3A0]/20 text-[#9DD3A0] px-4 py-2 rounded-full border border-[#9DD3A0]/30">
              <Navigation size={16} />
              <span className="text-sm">Aktive Route</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Map Section */}
        <div className="flex-1 relative">
          <MapContainer
            center={centerPosition}
            zoom={12}
            className="h-full w-full"
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Route Line */}
            <Polyline
              positions={routePath}
              color="#5FA8B8"
              weight={4}
              opacity={0.8}
            />

            {/* Markers */}
            {locations.map((location) => (
              <Marker key={location.id} position={location.coordinates}>
                <Popup>
                  <div className="text-sm">
                    <h3 className="mb-1">{location.name}</h3>
                    <p className="text-xs text-neutral-500 mb-2">{location.address}</p>
                    <p className="text-xs">
                      <strong>Zeit:</strong> {location.deliveryTime}
                    </p>
                    <p className="text-xs">
                      <strong>Artikel:</strong> {location.items}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Map Overlay Info */}
          <div className="absolute top-4 left-4 right-4 md:left-auto md:w-80 bg-white rounded-2xl shadow-lg p-4 z-[1000] border-2 border-[#5FA8B8]/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#5FA8B8] p-2 rounded-xl">
                <Package className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Heute Lieferungen</p>
                <p className="text-lg text-[#2A1F5B]">3 Standorte</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-neutral-500">Gesamtstrecke</p>
                <p className="text-[#2A1F5B]">8.7 km</p>
              </div>
              <div>
                <p className="text-neutral-500">Geschätzte Zeit</p>
                <p className="text-[#2A1F5B]">~45 Min</p>
              </div>
            </div>
          </div>
        </div>

        {/* Locations List */}
        <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-neutral-200 overflow-auto">
          <div className="p-6">
            <h2 className="text-lg mb-4 text-[#2A1F5B]">Lieferstopps</h2>
            
            <div className="space-y-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedLocation(index)}
                  className={`border rounded-xl p-4 cursor-pointer transition-all ${
                    selectedLocation === index
                      ? "border-[#5FA8B8] bg-[#5FA8B8]/10"
                      : "border-neutral-200 hover:border-[#5FA8B8]/50"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-[#5FA8B8] text-white rounded-full size-8 flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm mb-1 text-[#2A1F5B]">{location.name}</h3>
                      <p className="text-xs text-neutral-400 mb-2">{location.address}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-neutral-500 mb-2">
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {location.deliveryTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {location.distance}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-600">{location.items}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          location.status === "Geplant"
                            ? "bg-[#5FA8B8]/20 text-[#5FA8B8]"
                            : location.status === "Nächster Stop"
                            ? "bg-[#EDE9A3]/60 text-[#2A1F5B]"
                            : "bg-neutral-100 text-neutral-700"
                        }`}>
                          {location.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Delivery Summary */}
            <div className="mt-6 p-4 bg-[#F8F9FA] rounded-xl border border-[#9DD3A0]/30">
              <h3 className="text-sm mb-3 text-[#2A1F5B]">Lieferzusammenfassung</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Gesamt Artikel</span>
                  <span>73 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Standorte</span>
                  <span>3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Fahrer</span>
                  <span>Max Mueller</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Fahrzeug</span>
                  <span>B-SA 1234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
