import './Map.scss';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {AiOutlineCopy} from 'react-icons/ai';

export const Map = () => 
(
    <div className="map-container">
        <MapContainer center={[51.614617355188194, 0.5223806173352443]} zoom={20} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.614617355188194, 0.5223806173352443]}>
                <Popup>
                    <button onClick={() => navigator.clipboard.writeText("Ivy's Nails, 15 The Broadway, Wickford SS11 7AD")}><AiOutlineCopy className="icon"/> Ivy's Nails, 15 The Broadway, Wickford, SS11 7AD</button>
                </Popup>
            </Marker>
        </MapContainer>
    </div>
)


export default Map
