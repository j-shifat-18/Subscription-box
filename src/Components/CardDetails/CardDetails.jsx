import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { WishListContext } from "../../Provider/WishListProvider";
import { toast, ToastContainer } from "react-toastify";

const CardDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const cardData = data.find((card) => card.id == id);

  const {
    name,
    thumbnail,
    tech_category,
    price,
    frequency,
    description,
    features,
    subscription_benefits,
    ratings,
    number_of_reviews,
  } = cardData;

  const { wishList, setWishList } = use(WishListContext);

  const addToWishList = () => {
    setWishList([...wishList, cardData]);
    toast.success("Box added to wish list.");
  };

  return (
    <div className=" mx-auto p-6 grid md:grid-cols-2 gap-10 border-2 border-slate-400 rounded-2xl bg-gradient-to-bl from-rose-100 via-secondary to-white ">
      {/* Left: Banner/Thumbnail */}
      <div className="flex items-center">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-96 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Right: Details */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <span className="bg-yellow-300 text-black font-medium px-2 py-2 rounded-2xl text-base ">
          {tech_category}
        </span>
        <p className="text-xl text-green-600 font-semibold mt-5">
          ${price} / {frequency}
        </p>
        <p className="text-gray-700">{description}</p>

        <div>
          <p className="font-semibold">
            ⭐ {ratings} ({number_of_reviews} reviews)
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-bold mt-4">What's Inside:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="text-lg font-bold mt-4">Membership Benefits:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {subscription_benefits.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={addToWishList}
          className="btn bg-primary text-white font-medium text-lg rounded-md hover:bg-red-600"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
