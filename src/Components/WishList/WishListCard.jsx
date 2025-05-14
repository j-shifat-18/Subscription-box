import React, { use } from "react";
import { WishListContext } from "../../Provider/WishListProvider";
import { Link } from "react-router";
import { toast } from "react-toastify";

const WishListCard = ({wish}) => {

    const {wishList , setWishList} = use(WishListContext);
    console.log(wishList)

    const handleRemove = (id)=>{
        const filteredCards = wishList.filter(box=>box.id != id);
        setWishList(filteredCards);
        toast.error('Box Removed!')
    }
    
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <img
        src={wish.thumbnail}
        alt={wish.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold">{wish.name}</h3>
        <p className="text-sm text-gray-500">{wish.tech_category}</p>
        <p className="font-medium text-gray-700">
          ${wish.price} / {wish.frequency}
        </p>

        <div className="flex justify-between items-center mt-4">
          <Link to={`/category/${wish.id}`}>
            <button className="btn bg-primary hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Details</button>
          </Link>
          <button
            onClick={() => handleRemove(wish.id)}
            className="btn btn-outline border-primary hover:bg-primary hover:text-white "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
