import React from "react";
import { useLoaderData } from "react-router";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";
import { Helmet } from "react-helmet";

const SubscriptionBoxes = () => {
  const data = useLoaderData();

  return (
    <div className="mb-24">
      <Helmet>
        <title>Home | Subscription Box</title>
      </Helmet>
      <div className="text-center mb-10">
        <h2 className="font-bold text-4xl mb-4">Unbox Your Passions</h2>
        <p className="text-accent text-xl">Fuel your hobbies and passions with our exciting subscription boxes</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          data.map(cardData=><SubscriptionCard cardData={cardData}></SubscriptionCard>)
        }
      </div>
    </div>
  );
};

export default SubscriptionBoxes;
