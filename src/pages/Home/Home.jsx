import { Button } from "@mui/material";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import LinkedInPosts from "./components/LinkedInPosts";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="">
      <Dashboard />
      <LinkedInPosts />
      <FeaturedWorks />
      <Footer />
    </div>
  );
};

export default Home;
