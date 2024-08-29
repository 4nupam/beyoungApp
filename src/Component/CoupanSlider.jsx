import React, { useState, useEffect } from 'react';

const CouponSlider = () => {
  const images = [
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktopview-freecharge.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-hdfc.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-cred.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktopview-freecharge.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-hdfc.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-cred.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktopview-freecharge.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-hdfc.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-cred.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktopview-freecharge.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-hdfc.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-cred.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktopview-freecharge.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-hdfc.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-cred.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktopview-freecharge.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-hdfc.jpg",
    "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-cred.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds

    // Cleanup function to clear interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden  w-3/4 p-4 m-auto rounded-sm">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 50}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full md:w-4/5 mr-8">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CouponSlider;
