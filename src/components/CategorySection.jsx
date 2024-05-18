import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 flex flex-col items-center">
          <img src="/shop.svg" alt="Living Room" className="w-full" />
          <h2 className="text-xl font-semibold mt-4">Living Room</h2>
          <Link to="/shop" className="text-blue-500 mt-2">
            Shop Now
          </Link>
        </div>
        <div className="bg-gray-200 p-4 flex flex-col items-center">
          <img src="/shop.svg" alt="Bedroom" className="w-full" />
          <h2 className="text-xl font-semibold mt-4">Bedroom</h2>
          <Link to="/shop" className="text-blue-500 mt-2">
            Shop Now
          </Link>
        </div>
        <div className="bg-gray-200 p-4 flex flex-col items-center">
          <img src="/shop.svg" alt="Kitchen" className="w-full" />
          <h2 className="text-xl font-semibold mt-4">Kitchen</h2>
          <Link to="/shop" className="text-blue-500 mt-2">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
