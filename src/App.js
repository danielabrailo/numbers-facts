import "./App.css";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { useEffect } from "react";
import Homepage from "./components/Homepage";

function App() {
  useEffect(() => {
    fetchFromAPI("random/trivia").then((data) => console.log(data));
  }, []);

  return <Homepage />;
}

export default App;
