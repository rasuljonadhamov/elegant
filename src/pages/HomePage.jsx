import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import CategorySection from "../components/CategorySection";
import FeaturesSection from "../components/FeaturesSection";
import PromoSection from "../components/PromoSection";
import NewArrivals from "../components/NewArrivals";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer z-10"
    onClick={onClick}
  >
    <RightOutlined style={{ color: "black" }} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer z-10 shadow-lg"
    onClick={onClick}
  >
    <LeftOutlined style={{ color: "black" }} />
  </div>
);

function HomePage() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-screen">
      <Slider {...settings}>
        <div className="w-screen bg-white">
          <div className="bg-[url('/public/hero.png')] h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center mb-28">
            <h1 className="text-5xl font-bold text-white">Elegant Sofa</h1>
          </div>
        </div>
        <div className="w-screen">
          <div className="bg-[url('/public/hero.png')] h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center mb-28">
            <h1 className="text-5xl font-bold text-white">
              Comfortable Living
            </h1>
          </div>
        </div>
        <div className="w-screen">
          <div className="bg-[url('/public/hero.png')] h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center mb-28">
            <h1 className="text-5xl font-bold text-white">Modern Design</h1>
          </div>
        </div>
      </Slider>
      <div className="container mx-auto text-center my-8">
        <header className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl font-bold">Simply Unique / Simply Better.</h1>
          <p className="text-lg">
            <span className="font-bold">3legant</span> is a gift & decorations
            store based in HCMC, Vietnam. Est. since 2019.
          </p>
        </header>
      </div>

      <CategorySection />
      <NewArrivals />
      <FeaturesSection />
      <PromoSection />
    </div>
  );
}

export default HomePage;

// import React from "react";
// import Slider from "react-slick";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Custom arrow components
// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full cursor-pointer z-10"
//     onClick={onClick}
//   >
//     <RightOutlined style={{ color: "white" }} />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full cursor-pointer z-10"
//     onClick={onClick}
//   >
//     <LeftOutlined style={{ color: "white" }} />
//   </div>
// );

// function HomePage() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <>
//       <Slider {...settings} className="w-full overflow-hidden">
//         <div className="w-screen slider-container ">
//           <div className="overflow-hidden mx-14 bg-[url('/hero.png')] h-screen bg-cover bg-center  flex flex-col gap-7 items-center justify-center mb-28"></div>
//           <div className="container  mx-16">
//             <header className="text-center my-8 flex flex-col md:flex-row gap-10 justify-between items-center">
//               <h1 className="text-4xl font-bold">
//                 Simply Unique/ <br /> Simply Better.
//               </h1>
//               <p className="text-lg mt-2">
//                 Elegant is a gift & decor store based in HCMC,
//                 <br /> Vietnam. Est. since 2014.
//               </p>
//             </header>
//           </div>
//         </div>
//         <div className="w-screen slider-container">
//           <div className="bg-[url('/hero.png')] mx-14 h-screen bg-cover bg-center  flex flex-col gap-7 items-center justify-center mb-28"></div>
//           <div className="container mx-16">
//             <header className="text-center my-8 flex flex-col md:flex-row gap-10 justify-between items-center">
//               <h1 className="text-4xl font-bold">
//                 Simply Unique/ <br /> Simply Better.
//               </h1>
//               <p className="text-lg mt-2">
//                 Elegant is a gift & decor store based in HCMC,
//                 <br /> Vietnam. Est. since 2014.
//               </p>
//             </header>
//           </div>
//         </div>
//       </Slider>
//     </>
//   );
// }

// export default HomePage;
