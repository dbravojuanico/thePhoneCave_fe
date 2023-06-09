import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PhoneList() {
  const [allPhones, setAllPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPhones = async () => {
    try {
      const response = await axios.get("http://localhost:5005/phones");
      if (response.status === 200) {
        setAllPhones(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {allPhones.map((phone) => (
        <div key={phone.id}>
          <Link to={`/phones/${phone.id}`}>
            <h2>{phone.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PhoneList;
