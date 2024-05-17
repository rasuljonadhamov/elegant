import { useState } from "react";
import { useSelector } from "react-redux";
import Filter from "../components/Filter";
import ProductsList from "../components/ProductsList";
import { Button } from "@mui/material";
import { selectProducts } from "../features/products/productsSlice";

function ShopPage() {
  const products = useSelector(selectProducts);
  const [visibleProducts, setVisibleProducts] = useState(6);

  const showMoreProducts = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  return (
    <div>
      <h1 className="mb-10">Shop Page</h1>
      <Filter />
      <ProductsList products={products.slice(0, visibleProducts)} />
      {visibleProducts < products.length && (
        <Button variant="contained" onClick={showMoreProducts}>
          Show More
        </Button>
      )}
    </div>
  );
}

export default ShopPage;
