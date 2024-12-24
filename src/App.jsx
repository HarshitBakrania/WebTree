import axios from "axios";
import "./App.css";
import { Card } from "./components/Card";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
    console.log(data);
  }, []);

  return (
    <div className="flex justify-center">
      {data.map((user) => {
        return (
          <Card
            key={user.email}
            image={user.picture.large}
            firstName={user.name.first}
            lastName={user.name.last}
            gender={user.gender}
            phoneNumber={user.phone}
          />
        );
      })}
    </div>
  );
}
export default App;
