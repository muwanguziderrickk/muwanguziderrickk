
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoogleMap.css';

const GoogleMap = ({hostels}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyArib-Vz2YYlTURfx-KJQapEEhrf4wv95A&libraries=places&v=weekly&callback=initAutocomplete`;
      script.defer = true;
      script.async = true;

      script.onload = () => {
        window.initAutocomplete = initAutocomplete;
      };

      script.onerror = () => {
        console.error("Error loading Google Maps script");
        // Handle the error here, such as displaying an error message to the user
      };

      document.body.appendChild(script);
    };

    const initAutocomplete = () => {
      try {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 1.3733, lng: 32.2903 },
          zoom: 13,
          mapTypeId: "roadmap",
        });

        const input = document.getElementById("pac-input");
        const searchBox = new window.google.maps.places.SearchBox(input);

        map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

        map.addListener("bounds_changed", () => {
          searchBox.setBounds(map.getBounds());
        });

        let markers = [];

        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();

          if (places.length === 0) {
            return;
          }

          markers.forEach((marker) => {
            marker.setMap(null);
          });
          markers = [];

          const bounds = new window.google.maps.LatLngBounds();

          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry");
              return;
            }

            const icon = {
              url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
              size: new window.google.maps.Size(71, 71),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(17, 34),
              scaledSize: new window.google.maps.Size(25, 25),
            };

            markers.push(
              new window.google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
              })
            );

            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });

          map.fitBounds(bounds);
        });
      } catch (error) {
        console.error("Error initializing Google Maps:", error);
      }
    };

    loadGoogleMapsScript();
  }, [hostels]);

// Navigate back to the home page
  const handleExit = () => {
    navigate('/home');
  };

  return (
    <div>
      <input id="pac-input" className="searchbox" type="text" placeholder="Search your hostel here" />
      <button onClick={handleExit} className="exit-button">
        Exit Map
      </button>
      <div id="map" className="map"></div>
    </div>
  );
};

export default GoogleMap;