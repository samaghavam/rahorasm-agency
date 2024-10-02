import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { IoPricetag } from "react-icons/io5";
import "./PriceRange.css";

const PriceRange = () => {
  const [rangeValues, setRangeValues] = useState([13.8, 50]);

  const handleRangeChange = (newValues) => {
    setRangeValues(newValues);
  };

  return (
    <div className='my-3 card-style rounded p-3 bg-light' style={{ direction: 'rtl', margin: 'auto' }}>
      <h6>
        <span><IoPricetag /></span>
        <span className='ps-2'>قیمت از: {rangeValues[0]} تا {rangeValues[1]} میلیون تومان</span>
      </h6>
      <Slider
        min={13.8}
        max={50}
        range
        value={rangeValues}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default PriceRange;
