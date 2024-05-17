import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/products/productsSlice";

function ProductPage() {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductPage;
