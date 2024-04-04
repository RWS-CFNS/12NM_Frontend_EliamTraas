import React from "react";
import MapComponent from "../features/MapComponent";
import Sidebar from "../features/Sidebar";
import DataDisplay from "../features/DataDisplay";

const Home = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Sidebar /> 
      <MapComponent />
      {/* <DataDisplay /> */}
    </div>
  );
};

export default Home;
