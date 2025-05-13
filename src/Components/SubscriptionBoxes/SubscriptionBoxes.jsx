import React from "react";
import { useLoaderData } from "react-router";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";

const SubscriptionBoxes = () => {
  const data = useLoaderData();

  return (
    <div className="mb-24">
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl mb-4">Unbox Your Passions</h2>
        <p className="text-accent text-xl">Fuel your hobbies and passions with our exciting subscription boxes</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {
          data.map(cardData=><SubscriptionCard cardData={cardData}></SubscriptionCard>)
        }
      </div>
    </div>
  );
};

export default SubscriptionBoxes;
