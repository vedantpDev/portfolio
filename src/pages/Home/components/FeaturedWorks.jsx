import React from "react";
import FeaturedWorkCard from "./FeaturedWorkCard";

const FeaturedWorks = () => {
  return (
    <div className="bg-[#21243D] text-white pb-5">
      <div className="mx-3">
        <p className="text-center pt-3 font-extrabold text-2xl">
          Featured Works
        </p>
        <div className="mt-3">
          <FeaturedWorkCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
