import React, { use } from "react";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading/Loading";
import { WishListContext } from "../Provider/WishListProvider";
import WishListCard from "../Components/WishList/WishListCard";
import { Link } from "react-router";
import emptyBox from "../assets/empty-box.jpg";
import { ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
const WishListLayout = () => {
  const { wishList } = use(WishListContext);

  const { loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
        <Helmet>
        <title>Wish List | Subscription Box</title>
      </Helmet>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-11/12 mx-auto my-24">
        <div>
          {wishList.length > 0 ? (
            <div className="flex flex-col gap-8">
              {wishList.map((wish) => <WishListCard wish={wish}></WishListCard>)}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-96 text-center bg-white rounded-xl border-2 border-slate-300 p-8">
              <img
                src={emptyBox}
                alt="Empty Wishlist"
                className="w-40 mb-6 opacity-70"
              />
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mb-4">
                Looks like you haven't saved any subscription boxes yet.
              </p>
              <Link to="/">
                <button className="btn bg-primary font-medium text-white">
                  Explore Boxes
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default WishListLayout;
