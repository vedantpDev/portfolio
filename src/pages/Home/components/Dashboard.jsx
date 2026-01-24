import React from "react";
import Navbar from "./Navbar";
import { Button } from "@mui/material";

const Dashboard = () => {
  return (
    <div className="h-screen bg-[#21243D] text-white">
      <Navbar />
      <div className="mt-8">
        <div className="flex justify-center">
          <img
            src="/bg.jpg"
            alt="img"
            className="object-cover h-75 w-75 rounded-full"
          />
        </div>
        <div className="text-5xl text-center mt-8">
          <p>Hi, I am John,</p>
          <p>Creative</p>
          <p>Technologist</p>
        </div>
        <div className="mx-15 text-center mt-8">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div className="mt-8 text-center">
          <Button className="bg-[#FF6464]!" variant="contained">
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
