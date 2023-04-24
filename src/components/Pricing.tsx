import React from "react";

import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div id="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay" />
      <div className="max-w-[1240] mx-auto py-12">
        <div className="text-center py-8 text-salte-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The Right price for your research
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            quia voluptatum sunt magni aut aliquam voluptas animi perferendis in
            unde!
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          <PricingCard heading="standard" tittle="$49" />
          <PricingCard heading="premium" tittle="99" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
