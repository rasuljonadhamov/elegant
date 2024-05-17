import { useDispatch } from "react-redux";
import {
  setCategoryFilter,
  setPriceRangeFilter,
} from "../features/products/productsSlice";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";

function Filter() {
  const dispatch = useDispatch();

  const handleCategoryChange = (event) => {
    dispatch(setCategoryFilter(event.target.value));
  };

  const handlePriceRangeChange = (event) => {
    dispatch(setPriceRangeFilter(event.target.value));
  };

  return (
    <div className="flex justify-between mb-4">
      <FormControl variant="outlined" className="mr-4">
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          onChange={handleCategoryChange}
          defaultValue="All rooms"
        >
          <MenuItem value="All rooms">All rooms</MenuItem>
          <MenuItem value="Living Room">Living Room</MenuItem>
          <MenuItem value="Bedroom">Bedroom</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined">
        <InputLabel>Price</InputLabel>
        <Select
          label="Price"
          onChange={handlePriceRangeChange}
          defaultValue="All"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="0-99$">0-99$</MenuItem>
          <MenuItem value="100-199$">100-199$</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filter;
