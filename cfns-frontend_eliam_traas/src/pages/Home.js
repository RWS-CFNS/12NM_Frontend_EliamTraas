// Home.js
import React from "react";
import MapComponent from "../features/MapComponent";
import Sidebar from "../features/Sidebar";

const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <MapComponent />
      <Sidebar />
    </div>
  );
};

export default Home;
