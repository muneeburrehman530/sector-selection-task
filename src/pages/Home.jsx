import { useEffect, useState } from "react";
import { fetchData } from "../services/userService";

const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData("/selectedOptions");
        console.log("Data:", data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchDataAsync();
  }, []);
  return (
    <>
      <div>
        {user.map((item) => (
          <li>
            <span>{item.name}</span>

            {/* <span>{item.selectedOptions.label}</span> */}
          </li>
        ))}
      </div>
    </>
  );
};

export default Home;
