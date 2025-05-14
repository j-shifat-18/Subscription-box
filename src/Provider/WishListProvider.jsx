import React, { createContext } from "react";
import { useState } from "react";

export const WishListContext = createContext();

const WishListProvider = ({children}) => {
  const [wishList , setWishList] = useState([]);

    const wishListData = {
        wishList,
        setWishList,
    }
  return <WishListContext value={wishListData}>{children}</WishListContext>;
};

export default WishListProvider;
