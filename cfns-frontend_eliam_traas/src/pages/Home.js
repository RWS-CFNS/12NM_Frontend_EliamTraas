// Home.js
import React from "react";
import MapComponent from "../features/MapComponent";
import CustomSidebar from "../features/Sidebar"; // Import your Sidebar component

const Home = () => {
  return (
    <div id="mapContainer">
      <MapComponent />
      <CustomSidebar />
    </div>
  );
};

export default Home;
