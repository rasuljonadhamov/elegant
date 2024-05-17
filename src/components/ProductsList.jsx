import { useSelector } from "react-redux";
import { selectProducts } from "../features/products/productsSlice";
import { Card } from "antd";
// import "antd/dist/antd.css";
import "antd/dist/antd";

function ProductsList() {
  const products = useSelector(selectProducts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          cover={<img alt={product.name} src={product.image} />}
        >
          <p>{product.description}</p>
          <p>{product.price}</p>
        </Card>
      ))}
    </div>
  );
}

export default ProductsList;
