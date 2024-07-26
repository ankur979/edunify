import React, { useEffect, useState } from "react";
import SchoolCard from "../components/SchoolCard";
import axios from "axios";

// Define or import the base URL
const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

const ShowSchools = () => {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${url}/api/schools`);
        setSchoolData(data);
      } catch (error) {
        console.log("Error fetching school data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="show-school">
      {schoolData.map((school) => (
        <SchoolCard school={school} key={school.id} />
      ))}
    </div>
  );
};

export default ShowSchools;
