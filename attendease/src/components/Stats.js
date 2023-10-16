import React, { useState } from 'react';
import './Stats.css';
function Stats() {
    return(
        <div class='statistics'>
            <div class='totalStudents statsdiv'>
                <h2>85</h2>
                <p>Total number of Students registered in DSA Course</p>
            </div>
            <div class='present statsdiv'>
                <h2>80</h2>
                <p>Total number of Students present Today</p>
            </div>
            <div class='present statsdiv'>
                <h2>85</h2>
                <p>Percenteage of Students present today</p>
            </div>
        </div>
    );
}
export default Stats;