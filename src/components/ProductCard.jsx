import { Card, Rate, Badge, Button } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/products/cartActions";

const ProductCard = ({ product }) => {
  // const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Badge.Ribbon text="50% OFF" color="green">
      <Card
        hoverable
        cover={
          <img
            alt={product.name}
            src={product.image}
            className="w-full h-48 object-cover"
          />
        }
        className="shadow-sm"
      >
        <Card.Meta
          title={<div className="text-lg font-semibold">{product.name}</div>}
          description={
            <>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="line-through text-gray-400">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <Rate disabled defaultValue={product.rating} />
              <Button
                key={product.id}
                type="primary"
                onClick={() => handleAddToCart(product)}
                className="w-full mt-4"
              >
                Add to Cart
              </Button>
            </>
          }
        />
      </Card>
    </Badge.Ribbon>
  );
};

export default ProductCard;
