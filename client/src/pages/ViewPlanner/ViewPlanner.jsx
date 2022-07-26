import React from "react";
import "./ViewPlanner.css";

export default function ViewPlanner() {
    return (
        <div className='viewplan'>

            <div class='parent'>
                <div class='plan-title'>Plan Title</div>

                <div class='plan-nickname'>Plan Nickname</div>
            </div>

            <br></br>

            <div className='planner-inputs'>
                <div className='planner-form'>
                    <div className='planner-tab-content'>

                        <div className='planner-section-1'>                    
                            <textarea id="story" name="story" rows="15" cols="35">
                            Description...
                            </textarea>
                        </div>
                    </div>
                </div>

                <table className='planner-table'>
                    <tr className='top-row'>
                        <th>Times</th>
                        <th>Day 1</th>
                        <th>Day 2</th>
                        <th>Day 3</th>
                    </tr>
                    <tr className='row1'>
                        <td>9am</td>
                        <td>Activity</td>
                        <td>Activity</td>
                        <td>Activity</td>

                    </tr>
                    <tr className='row2'>
                        <td>12pm</td>
                        <td>Activity</td>
                        <td>Activity</td>
                        <td>Activity</td>
                    </tr>
                    <tr className='row3'>
                        <td>3pm</td>
                        <td>Activity</td>
                        <td>Activity</td>
                        <td>Activity</td>
                    </tr>
                    <tr className='row4'>
                        <td>7pm</td>
                        <td>Activity</td>
                        <td>Activity</td>
                        <td>Activity</td>
                    </tr>
                    <tr className='row-5'>
                        <td>11pm</td>
                        <td>Activity</td>
                        <td>Activity</td>
                        <td>Activity</td>
                    </tr>
                </table>
            </div>

            <br></br>

            <div class='grandparent'>
                <div class='plan-title'>Plan Created by:  user123</div>

                <div class='plan-nickname'>
                    <div class="vote roundrect">
                        <div class="increment up"></div>
                        <div class="increment down"></div>
                        <div class="count">1053</div>
                    </div>
                </div>

            </div>

            

        </div>
    )
}

//  make component for pop up 