import React from "react";
import LinkedInPOstCard from "./LinkedInPOstCard";

const LinkedInPosts = () => {
  let arr = [0, 1, 2];
  return (
    <div className={`bg-[#EDF7FA]! pb-5`}>
      <div className="mx-3">
        <p className="text-center pt-3 font-extrabold text-2xl">Recent Posts</p>
        <div>
          {arr.map((ele, i) => (
            <LinkedInPOstCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkedInPosts;
