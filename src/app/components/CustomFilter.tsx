import { Combobox } from '@headlessui/react'
import React, { useState } from 'react'

const CustomFilter = () => {
 

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const colors = ['All Colors', 'Black', 'Green', 'Blue', 'Pink', 'Orange' , 'Violet'];
const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <div className="my-4">
      <select
        className="py-2 px-4 border border-gray-300 rounded-md"
        value={selectedColor}
        onChange={handleColorChange}
      >
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomFilter