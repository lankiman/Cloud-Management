import AllInoneCard from "./AllInoneCard";
import React from "react";

const AllInOne = () => {
  return (
    <div id="platfforms" className="w-full my-32 p-4">
      <div className="max-w-[1240] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platfform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni
          velit tempora, quaerat consequatur blanditiis in cumque ad fugiat
          impedit?
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {React.Children.toArray(
            [0, 0, 0, 0, 0, 0, 0, 0].map(() => <AllInoneCard />)
          )}
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
