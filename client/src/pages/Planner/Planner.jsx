import React from "react";
import "./Planner.css";

export default function Planner() {
    return (
        <div className='planner'>
            <div className='planner-inputs'>
                <div className='planner-form'>
                    <div className='planner-tab-content'>
                        <div className='planner-section-1'>

                            <h1>Create Plan</h1>

                            <form action="/" method="post">

                                <div className='planner1-top-row'>
                                    <div className='planner1-field-wrap'>
                                        <label>
                                            Plan Title<span className='req'></span>
                                        </label>
                                        <input type='text' required autocomplete="off" className='input-field' />
                                    </div>
                                    <div className='planner1-field-wrap'>
                                        <label>
                                            Plan Nickname<span className='req'></span>
                                        </label>
                                        <input type='text' required autocomplete="off" className='input-field' />
                                    </div>
                                </div>

                                <div className='planner1-field-wrap'>
                                    <label>
                                        Plan Description...<span className='req'></span>
                                    </label>
                                    <input type='email' required autocomplete="off" className='input-field' />
                                </div>

                            </form>
                            
                        </div>
                    </div>
                </div>

                <table className='planner-table'>
                    <tr className='top-row'>
                        <th>Time</th>
                        <th>Day 1</th>
                        <th>Day 2</th>
                        <th>Day 3</th>
                        <th>Add Day</th>
                    </tr>
                    <tr className='row1'>
                        <td>9am</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                        <td className='add-day'>Add Day</td>
                    </tr>
                    <tr className='row2'>
                        <td>12pm</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                    </tr>
                    <tr className='row3'>
                        <td>3pm</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                    </tr>
                    <tr className='row4'>
                        <td>7pm</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                    </tr>
                    <tr className='row-5'>
                        <td>11pm</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                        <td>Add Item</td>
                    </tr>
                </table>
            </div>

            <div className='planner-button-div'>
                <button type='submit' className='planner-button'>Save Plan</button>
            </div>

        </div>
    )
}