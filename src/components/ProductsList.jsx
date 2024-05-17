import { Card, Rate } from "antd";

function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          cover={<img alt={product.name} src={product.image} />}
        >
          <Rate disabled defaultValue={product.rating} />
          <p>{product.desc}</p>
          <p>{product.price} $</p>
        </Card> 
      ))}
    </div>
  );
}

export default ProductsList;
