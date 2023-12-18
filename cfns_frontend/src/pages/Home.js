import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:8090/heatmap/h3data");
      console.log(result.data);
    };
}