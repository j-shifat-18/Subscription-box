import React from "react";

const Benifits = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 mb-24 rounded-2xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          We’re not just another subscription platform — here’s what makes us
          better.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6">
            <img
              src="https://i.ibb.co/0Vv07d9Y/tailor-to-you.jpg"
              alt="Personalized"
              className="w-full h-[200px] rounded-2xl mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Tailored to You</h3>
            <p className="text-sm text-gray-600">
              Each box is customized based on your preferences.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <img
              src="https://i.ibb.co/LzXpk600/support-local.jpg"
              alt="Support Local"
              className="w-full h-[200px] rounded-2xl mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Support Local</h3>
            <p className="text-sm text-gray-600">
              We partner with small businesses and local creators.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <img
              src="https://i.ibb.co/spcLzKst/cancel-subs.jpg"
              alt="Flexible"
              className="w-full h-[200px] rounded-2xl mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Flexible Plans</h3>
            <p className="text-sm text-gray-600">
              Pause, skip, or cancel anytime with ease.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <img
              src="https://i.ibb.co/mr31NBG8/delivery.jpg"
              alt="Fast Delivery"
              className="w-full h-[200px] rounded-2xl mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Your box is shipped quickly, safely, and reliably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
