import  { useState } from "react";
import { Layout, Menu, Row, Col, Button, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryFilter,
  setPriceRangeFilter,
  setSortBy,
  selectProducts,
} from "../features/products/productsSlice";
import ProductCard from "./ProductCard";

const { Header, Content, Sider } = Layout;
const { Option } = Select;

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const { category, priceRange, sortBy } = useSelector(
    (state) => state.products.filters
  );
  const [visibleProducts, setVisibleProducts] = useState(8);

  const categories = [
    "All rooms",
    "Living Room",
    "Bedroom",
    "Dining",
    "Kitchen",
    "Bathroom",
    "Outdoor",
  ];
  const priceRanges = [
    "All",
    "0-99.99$",
    "100-199.99$",
    "200-299.99$",
    "300-399.99$",
    "400$+",
  ];

  const handleCategoryChange = (value) => {
    dispatch(setCategoryFilter(value));
  };

  const handlePriceChange = (value) => {
    dispatch(setPriceRangeFilter(value));
  };

  const handleSortChange = (value) => {
    dispatch(setSortBy(value));
  };

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        width={250}
        className="bg-white p-4 hidden lg:block"
        style={{ backgroundColor: "white" }}
      >
        <h3 className="text-xl font-semibold mb-4">Filter</h3>
        <div>
          <h4 className="text-lg mb-2">Categories</h4>
          <Menu
            mode="inline"
            defaultSelectedKeys={[category]}
            onClick={(e) => handleCategoryChange(e.key)}
          >
            {categories.map((cat) => (
              <Menu.Item key={cat}>{cat}</Menu.Item>
            ))}
          </Menu>
        </div>
        <div className="mt-4">
          <h4 className="text-lg mb-2">Price</h4>
          <Menu
            mode="inline"
            defaultSelectedKeys={[priceRange]}
            onClick={(e) => handlePriceChange(e.key)}
          >
            {priceRanges.map((range) => (
              <Menu.Item key={range}>{range}</Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header className="bg-white shadow-sm px-4 py-2 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Living Room</h1>
          <div className="flex items-center">
            <span className="mr-2">Sort by:</span>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              style={{ width: 120 }}
            >
              <Option value="default">Default</Option>
              <Option value="price">Price</Option>
              <Option value="rating">Rating</Option>
            </Select>
          </div>
        </Header>
        <Content className="p-4">
          <div className="lg:hidden mb-4">
            <Select
              value={category}
              onChange={handleCategoryChange}
              className="w-full mb-2"
              placeholder="Select Category"
            >
              {categories.map((cat) => (
                <Option key={cat} value={cat}>
                  {cat}
                </Option>
              ))}
            </Select>
            <Select
              value={priceRange}
              onChange={handlePriceChange}
              className="w-full"
              placeholder="Select Price Range"
            >
              {priceRanges.map((range) => (
                <Option key={range} value={range}>
                  {range}
                </Option>
              ))}
            </Select>
          </div>
          <Row gutter={[16, 16]}>
            {products.slice(0, visibleProducts).map((product) => (
              <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          {visibleProducts < products.length && (
            <div className="flex justify-center mt-4">
              <Button type="primary" onClick={handleShowMore}>
                Show more
              </Button>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProductListing;
