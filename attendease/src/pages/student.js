import React, { useState } from "react";
import "../components/Students.css";


function Student() {
  return (
    <div class="yay"><div class="table-horizontal-container">
    <table class="unfixed-table">
      <thead class="gradient-text">
        <tr>
          <th>Photo</th>
          <th>Roll No</th>
          <th>Name</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="./profile.png"/>
          </td>
          <td>220002063</td>
          <td>Riddhi Chandekar</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>
            <img src="./profile.png"/>
          </td>
          <td>220002063</td>
          <td>Riddhi Chandekar</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>
            <img src="./profile.png"/>
          </td>
          <td>220002063</td>
          <td>Riddhi Chandekar</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>
            <img src="./profile.png"/>
          </td>
          <td>220002063</td>
          <td>Riddhi Chandekar</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>
            <img src="./profile.png"/>
          </td>
          <td>220002063</td>
          <td>Riddhi Chandekar</td>
          <td>90%</td>
        </tr>
      </tbody>
    </table>
  </div></div>
    
  );
}
export default Student;
