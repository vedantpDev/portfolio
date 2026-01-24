import React from "react";

const FeaturedWorkCard = () => {
  return (
    <div className="bg-gray-400 p-3 rounded-md space-y-3">
      <img src="featuredWork.png" alt="featuredWork" className="rounded-md" />
      <p className="font-bold text-2xl ">Designing Dashboards</p>
      <div className="flex items-center">
        <span className="bg-[#21243D] rounded-2xl px-3 py-1">2026</span>
        <p className="ml-10">Dashboard</p>
      </div>
      <p className="text-[#21243D] font-bold">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
};

export default FeaturedWorkCard;
