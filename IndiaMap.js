import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './IndiaMap.css'; // Custom CSS for styling

// Agra Coordinates
const agraPosition = [27.1767, 78.0081];

// Custom marker icon (Leaflet fix for missing marker icon)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

const IndiaMap = () => {
  return (
    <div className="map-container">

      <MapContainer center={agraPosition} zoom={6} scrollWheelZoom={false} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={agraPosition}>
          <Popup>Agra, Uttar Pradesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default IndiaMap;
