
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const sylhetCoordinates = [24.895379, 91.866501]; 

  return (
   <div className='my-28 max-w-[1480px] mx-auto px-[40px]'>
     <MapContainer center={sylhetCoordinates} zoom={13} style={{ width: '100%', maxHeight: '500px', overflow:'hidden' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={sylhetCoordinates}>
        <Popup>
          Sylhet, Bangladesh
        </Popup>
      </Marker>
    </MapContainer>
   </div>
  );
}

export default Map;
