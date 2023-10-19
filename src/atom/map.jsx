import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'; 

const Map = ({ mapCenter }) => {
  return (
    <MapContainer center={mapCenter} zoom={14} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
    </MapContainer>
  );
};

export default Map;