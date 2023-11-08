
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const hostels = [
  { id: 1, name: 'Hostel A', location: 'City Center', price: '$50/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 2, name: 'Hostel B', location: 'Near Beach', price: '$45/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 3, name: 'Hostel C', location: 'Downtown', price: '$55/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 4, name: 'Hostel D', location: 'Mountain View', price: '$60/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 5, name: 'Hostel E', location: 'Riverside', price: '$48/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 6, name: 'Hostel F', location: 'Old Town', price: '$52/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 7, name: 'Hostel G', location: 'Lakefront', price: '$58/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 8, name: 'Hostel H', location: 'Countryside', price: '$56/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 9, name: 'Hostel I', location: 'Seaside', price: '$62/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 10, name: 'Hostel J', location: 'Historic District', price: '$49/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 11, name: 'Hostel K', location: 'Central Park', price: '$54/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 12, name: 'Hostel L', location: 'Beachfront', price: '$65/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 13, name: 'Hostel M', location: 'Downtown Square', price: '$57/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 14, name: 'Hostel N', location: 'Riverwalk', price: '$53/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 15, name: 'Hostel O', location: 'Skyscraper View', price: '$68/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 16, name: 'Hostel P', location: 'Botanic Gardens', price: '$63/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 17, name: 'Hostel Q', location: 'Amusement Park', price: '$47/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 18, name: 'Hostel R', location: 'Museum District', price: '$59/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 19, name: 'Hostel S', location: 'Farmstay', price: '$51/night', images: ['image1.png', 'image2.png', 'image3.png'] },
  { id: 20, name: 'Hostel T', location: 'Winery', price: '$67/night', images: ['image1.png', 'image2.png', 'image3.png'] }
];

const HomePage = () => {
  const [currentImageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % 3); // Assuming each hostel has 3 images
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <Header />
      <div className="card-grid">
        {hostels.map(hostel => (
          <div className='card' key={hostel.id}>
            <img src={process.env.PUBLIC_URL + '/' + hostel.images[currentImageIndex]} alt={`Hostel ${hostel.name}`} className='card-img-top' />
            <div className="card-body">
              <h5 className='card-title'>{hostel.name}</h5>
              <p className='card-text'>Easy Easy Easy Easy Easy!</p>
              <p><span className="locate">Location:</span> <Link to={`/${hostel.location}`}> {hostel.location}</Link></p>
              <p className='card-title'>Price: {hostel.price}</p>
              <div className='row'>
                <div className='col-6'>
                  <Link to="/viewHostel">
                    <button className='viewHostelButton'>View Hostel</button>
                  </Link>
                </div>
                <div className='col-6'>
                  <div className='rating'>
                    <span className="star1">&#9733;</span>
                    <span className="star1">&#9733;</span>
                    <span className="star1">&#9733;</span>
                    <span className="star1">&#9733;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
