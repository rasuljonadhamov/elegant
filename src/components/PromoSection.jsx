import React from "react";

const PromoSection = () => {
  return (
    <div className="container mx-auto my-8 flex flex-col md:flex-row items-center gap-16 bg-gray-100 p-4">
      <img src="/public/hero.png" alt="Promo" className="w-full md:w-1/2" />
      <div className="md:w-1/2 p-4">
        <p className="uppercase text-indigo-700 mb-5 font-bold">
          SALE UP TO 35% OFF
        </p>
        <h2 className="text-4xl font-semibold">
          HUNDREDS of <br /> New Lower Prices!
        </h2>
        <p className="my-4">
          It’s more affordable than ever to give every <br /> room in your home
          a stylish makeover
        </p>
        <a href="/shop" className="text-blue-500 mt-2">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default PromoSection;
