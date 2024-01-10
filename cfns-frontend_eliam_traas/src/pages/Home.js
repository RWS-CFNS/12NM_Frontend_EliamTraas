// Home.js

import React from "react";
import MapComponent from "../features/MapComponent";
import Sidebar from "../features/Sidebar"; // Import the Sidebar component

const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Sidebar /> 
      <MapComponent />
    </div>
  );
};

export default Home;
