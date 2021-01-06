import React from 'react';
import GoogleMaps from "simple-react-google-maps";


const MapContact = () => {
    return (
        <div>
            <GoogleMaps
                apiKey={"AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As"}
                style={{ height: "50vh", width: "100%" }}
                zoom={18}
                center={{ lat: 35.6990688, lng: 51.3774808 }}
                markers={{lat: 35.6990688, lng: 51.3774808 }}
            />
        </div>
    );
};

export default MapContact;
