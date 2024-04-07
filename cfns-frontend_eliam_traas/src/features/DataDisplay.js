import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataDisplay() {
  const [data, setData] = useState({});

  // useEffect hook die de fetchData functie aanroept
  useEffect(() => {
    fetchData();
  }, []);

  // Functie om data op te halen van de array
  const fetchData = async () => {
    try {
      // Maak een GET request naar de array
      const result = await axios.get("http://localhost:8090/heatmap/h3data");
      setData(result.data);
    } catch (error) {
      console.error("Error bij het ophalen van data:", error);
    }
  };

  return (
    <div>
      <ul>
        {/* Loop langs elke index om de waarde op te halen */}
        {Object.keys(data).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {data[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}