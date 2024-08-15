import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import GymList from './GymList'; // Import the GymList component
import Layout from '../shop/Layout';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const GymMap = ({ gyms }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [gymsWithDistance, setGymsWithDistance] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLoc);
          calculateDistances(userLoc);
        },
        error => {
          console.error("Error fetching user's location:", error);
        }
      );
    }
  }, [gyms]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = x => (x * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2);
  };

  const calculateDistances = (userLoc) => {
    const updatedGyms = gyms.map(gym => {
      const distance = calculateDistance(userLoc.lat, userLoc.lng, gym.lat, gym.lng);
      return { ...gym, distance };
    });
    setGymsWithDistance(updatedGyms);
  };

  const coimbatoreCenter = [11.0168, 76.9558];
  const mapCenter = userLocation ? [userLocation.lat, userLocation.lng] : coimbatoreCenter;

  return (
    <Layout>
    <div className="map-container">
      <MapContainer center={mapCenter} zoom={13} style={{ height: '100vh', width: '75%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {gymsWithDistance.map((gym, index) => (
          <Marker key={index} position={[gym.lat, gym.lng]}>
            <Popup>
              {gym.name}<br />
              {gym.address}<br />
              {gym.distance ? `${gym.distance} km from your location` : 'Calculating distance...'}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="map-sidebar">
        <GymList gyms={gymsWithDistance} />
      </div>
    </div>
    </Layout>
  );
};

export default GymMap;
