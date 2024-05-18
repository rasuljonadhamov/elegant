import { useSelector, useDispatch } from "react-redux";
import { Card, Button, InputNumber, Empty } from "antd";
import {
  removeFromCart,
  updateCartQuantity,
} from "../features/products/cartActions";
// import { removeFromCart, updateCartQuantity } from "../actions/cartActions";

const { Meta } = Card;

const ProductPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateCartQuantity(productId, quantity));
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <Empty description="Your cart is empty. Go to shopping!" />
          <Button type="primary" href="/shop">
            Go to Shopping
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <Card
              key={item.id}
              hoverable
              cover={<img alt={item.name} src={item.image} />}
              actions={[
                <Button
                  key={item.id}
                  onClick={() => handleRemove(item.id)}
                  danger
                >
                  Remove
                </Button>,
              ]}
            >
              <Meta title={item.name} description={`${item.price} $`} />
              <div className="mt-4 flex items-center justify-between">
                <span>Quantity: </span>
                <InputNumber
                  min={1}
                  value={item.quantity}
                  onChange={(value) => handleQuantityChange(item.id, value)}
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
