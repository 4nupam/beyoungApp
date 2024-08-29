import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import YellowMain from './Component/YellowMain';
import NavTrack from './Component/NavTrack';
import Nav from './Component/Nav';
import Footer from './Component/Footer/Footer';

// Lazy load the components
const Home = React.lazy(() => import('./Component/Home/Home'));
const MenPage = React.lazy(() => import('./Component/Men_Page/MenPage'));
const WomenPage = React.lazy(() => import('./Component/WomenPage/WomenPage'));
const ElectronicPage = React.lazy(() => import('./Component/ElectronicsPage/ElectronicPage'));
const JeweleryPage = React.lazy(() => import('./Component/JeweleryPage/JeweleryPage'));
const TrackyourId = React.lazy(() => import('./Component/TrackyourId'));
const NewArrivals = React.lazy(() => import('./Component/NewArrivals'));
const Cart = React.lazy(() => import('./Component/CartPage/Cart'));
const Liked = React.lazy(() => import('./Component/LikedPage/Liked'));



function App() {
  return (
    <div className="App">
      <Router>
        <YellowMain />
        <NavTrack />
        <Nav />
        <Suspense fallback={<div>Lazy Loading is going on...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Mens" element={<MenPage />} />
            <Route path="/Women" element={<WomenPage />} />
            <Route path="/Electronics" element={<ElectronicPage />} />
            <Route path="/Jewelery" element={<JeweleryPage />} />
            <Route path="/TrackingPackage" element={<TrackyourId />} />
            <Route path="/NewArrivals" element={<NewArrivals />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Liked" element={<Liked />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
