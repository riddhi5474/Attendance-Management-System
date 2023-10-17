import React, { useState } from 'react';
import './Today.css';
function Today() {
    return (
        <div class="table-horizontal-container">
          <table class="unfixed-table">
            <thead class="gradient-text">
              <tr>
                <th>Photo</th>
                <th>Roll No</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src="./profile.png"/>
                </td>
                <td>220002063</td>
                <td>Riddhi Chandekar</td>
              </tr>
              <tr>
                <td>
                  <img src="./profile.png"/>
                </td>
                <td>220002063</td>
                <td>Riddhi Chandekar</td>
              </tr>
              <tr>
                <td>
                  <img src="./profile.png"/>
                </td>
                <td>220002063</td>
                <td>Riddhi Chandekar</td>
              </tr>
              <tr>
                <td>
                  <img src="./profile.png"/>
                </td>
                <td>220002063</td>
                <td>Riddhi Chandekar</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
}
export default Today;