import React, { useEffect, useState } from "react";
import axios from "node_modules/axios";

export default function Home() {
  const [specificValue, setSpecificValue] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8090/heatmap/h3data");
      const specificData = result.data["8a82c9a4230ffff"];
      setSpecificValue(specificData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <p>Specifieke waarde: {specificValue}</p>
    </div>
  );
}