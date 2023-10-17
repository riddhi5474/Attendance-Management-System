import React, { useState } from "react";
import "./Students.css";

function Students() {
  return (
    <div class="table-horizontal-container">
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
              <img src="prof"/>
            </td>
            <td>220002063</td>
            <td>Riddhi Chandekar</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>
              <img></img>
            </td>
            <td>220002063</td>
            <td>Riddhi Chandekar</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>
              <img></img>
            </td>
            <td>220002063</td>
            <td>Riddhi Chandekar</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>
              <img></img>
            </td>
            <td>220002063</td>
            <td>Riddhi Chandekar</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>
              <img></img>
            </td>
            <td>220002063</td>
            <td>Riddhi Chandekar</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>
              <img></img>
            </td>
            <td>220002063</td>
            <td>Riddhi Chandekar</td>
            <td>90%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Students;
