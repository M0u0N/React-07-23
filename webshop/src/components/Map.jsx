import L from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import config from '../Data/config.json'



let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 
  const [shops, setShops] = useState([])


  useEffect(() => {
    fetch(config.shops)
    .then(res => res.json())
    .then(json => setShops(json || []))
  }, []);


  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shops.map(shop =>
        <Marker position={[shop.latitude, shop.longitude]}> 
          <Popup>
            {shop.name} <br/> avatud {shop.open} <br/>
            <a
            target='_blank'
            rel="noreferrer"
            href={shop.url}>{shop.address}</a>
          </Popup>
        </Marker>
        )}
      {/* <Marker position={[59.4212, 24.7927]}>
        <Popup>
          Ülemiste keskus. <br /> Avatud 9-20
        </Popup>
      </Marker>
      <Marker position={[59.4271, 24.7229]}>
        <Popup>
          Kristiine keskus. <br /> Avatud 10-21
        </Popup>
      </Marker>
      <Marker position={[58.3778, 26.7308]}>
        <Popup>
          Tasku keskus. <br /> Avatud 10-21 <br />
          <a
            target='_blank'
            rel="noreferrer"
            href="https://www.google.com/maps/place/Tasku+Centre/@58.3778929,26.7282776,17z/data=!3m1!4b1!4m6!3m5!1s0x46eb36de8f30aa61:0xac1894becb0a4ccc!8m2!3d58.3778901!4d26.7308525!16s%2Fg%2F125_j5pv_?authuser=0&entry=ttu">Turu 2, Tartu</a>
        </Popup> */}
    </MapContainer>
  </div>)
}

export default Map; 