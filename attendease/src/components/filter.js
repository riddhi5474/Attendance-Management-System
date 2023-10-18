import React from 'react';
import './filter.css'; 

 

function Filter() {
  return (
    <div class="flex"><div class="filter-box">
    <label for="months-select">Select by Months:</label>
    <select id="months-select">
      <option value="january">January</option>
      <option value="february">February</option>
      <option value="march">March</option>
      <option value="april">April</option>

    </select>
  </div></div>
    
  );
}




export default Filter;
