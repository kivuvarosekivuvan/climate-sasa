import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: '/Images/marker.png',
  iconSize: [70, 70],
  iconAnchor: [16, 32],
});

const Map = ({ mapCenter, temperature, humidity }) => {
  return (
    <MapContainer center={mapCenter} zoom={14} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      <Marker position={mapCenter} icon={customIcon}>
        <Popup>
          Temperature: {temperature}°C<br />
          Humidity: {humidity}%
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;