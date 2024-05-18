import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { Badge, Card, Button } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { addToCart } from "../features/products/cartActions";

const { Meta } = Card;

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full cursor-pointer z-10 shadow-lg"
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

const NewArrivals = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <Badge.Ribbon text="New" color="green">
              <Card
                hoverable
                cover={<img alt={product.name} src={product.image} />}
                actions={[
                  <Button
                    key={product.id}
                    type="primary"
                    onClick={() => handleAddToCart(product)}
                    className="w-full"
                  >
                    Add to Cart
                  </Button>,
                ]}
              >
                <Meta title={product.name} description={`${product.price} $`} />
              </Card>
            </Badge.Ribbon>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
