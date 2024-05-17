import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import { Typography } from "antd";

const { Title } = Typography;

const Filter = ({ filters, setFilters }) => {
  const handleCategoryChange = (event) => {
    setFilters({ ...filters, category: event.target.value });
  };

  const handlePriceChange = (event) => {
    setFilters({ ...filters, priceRange: event.target.value });
  };

  return (
    <div style={{ padding: "20px", borderRight: "1px solid #ccc" }}>
      <Title level={4}>Categories</Title>
      <RadioGroup value={filters.category} onChange={handleCategoryChange}>
        <FormControlLabel
          value="All rooms"
          control={<Radio />}
          label="All Rooms"
        />
        <FormControlLabel
          value="Living Room"
          control={<Radio />}
          label="Living Room"
        />
        <FormControlLabel value="Bedroom" control={<Radio />} label="Bedroom" />
        <FormControlLabel value="Kitchen" control={<Radio />} label="Kitchen" />
        <FormControlLabel
          value="Bathroom"
          control={<Radio />}
          label="Bathroom"
        />
        <FormControlLabel value="Dinning" control={<Radio />} label="Dinning" />
        <FormControlLabel value="Outdoor" control={<Radio />} label="Outdoor" />
      </RadioGroup>
      <Title level={4} style={{ marginTop: "20px" }}>
        Price
      </Title>
      <FormControl component="fieldset">
        <RadioGroup value={filters.priceRange} onChange={handlePriceChange}>
          <FormControlLabel value="All" control={<Radio />} label="All Price" />
          <FormControlLabel
            value="0-99.99"
            control={<Radio />}
            label="$0.00 - $99.99"
          />
          <FormControlLabel
            value="100-199.99"
            control={<Radio />}
            label="$100.00 - $199.99"
          />
          <FormControlLabel
            value="200-299.99"
            control={<Radio />}
            label="$200.00 - $299.99"
          />
          <FormControlLabel
            value="300-399.99"
            control={<Radio />}
            label="$300.00 - $399.99"
          />
          <FormControlLabel value="400+" control={<Radio />} label="$400.00+" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
