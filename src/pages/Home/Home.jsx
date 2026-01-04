import { useState } from "react";
import Navbar from "./components/Navbar";

const Home = () => {
  const [first, setfirst] = useState();

  return (
    <div className="mt-6 m-6">
      <Navbar />
    </div>
  );
};

export default Home;
