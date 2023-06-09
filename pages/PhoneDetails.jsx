import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function PhoneDetails() {
  const [onePhone, setOnePhone] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const fetchOnePhone = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/phones/${id}`);
      if (response.status === 200) {
        setOnePhone(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOnePhone();
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Link to={"/phones"}>Back to the list</Link>
      <h1>Name: {onePhone[0].name}</h1>
      <h2>Manufacturer: {onePhone[0].manufacturer}</h2>
      <p>{onePhone[0].description}</p>
    </div>
  );
}

export default PhoneDetails;
