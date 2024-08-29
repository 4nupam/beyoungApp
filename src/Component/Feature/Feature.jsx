import React from 'react';
import './Feature.css'
const Feature = () => {
  const images = [
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/ET-Retail.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/Deccan-Herald.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/VCCircle.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/1.png",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/ET-Retail.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/Deccan-Herald.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/VCCircle.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/1.png",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/ET-Retail.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/Deccan-Herald.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/VCCircle.jpg",
    "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/1.png",
  ];

  return (
    <div>
      <div className="header flex items-center justify-between ml-8 mr-8">
        <span className="flex-grow h-1 bg-yellow-500"></span>
        <h2 className="mx-4 bg-white font-semibold pl-6 pr-6">FEATURED ON</h2>
        <span className="flex-grow h-1 bg-yellow-500"></span>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex gap-10 animate-marquee mt-10 mb-10">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Feature ${index}`} className="w-48 h-10  flex-shrink-1" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
