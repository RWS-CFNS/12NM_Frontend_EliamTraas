import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://localhost:8090/heatmap/h3data");
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <ul>
        {Object.keys(data).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {data[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}
