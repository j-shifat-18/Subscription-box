import React from "react";
import { Link } from "react-router";

const SubscriptionCard = ({ cardData }) => {
  const {id, thumbnail, name, tech_category, price, frequency } = cardData;
  return (
    <div data-aos="fade-up" className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-red-200 transition-shadow duration-300">
      <img src={thumbnail} alt="[Box Name]" className="w-[350px] h-[250px] mx-auto rounded-2xl " ></img>
      <div className="mx-6 py-4 border-b border-slate-400 border-dashed">
        <span className="bg-yellow-300 text-black font-medium px-2 py-2 rounded-2xl text-base ">{tech_category}</span>
        <div className="font-bold text-xl mt-2 mb-2">{name}</div>
        <p className="text-gray-700 font-semibold text-xl">${price}/<span className="text-sm font-medium text-accent">{frequency}</span></p>
      </div>
      <div class="px-6 py-4">
        <Link to={`/category/${id}`} class="btn bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          View More
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionCard;
