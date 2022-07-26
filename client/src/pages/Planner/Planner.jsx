import React from "react";
import "./Planner.css";

export default function Planner() {
    return (
        <div className="container-fluid">
            <div className='planner'>
                <div className='planner-form'>
                    <div className='planner-tab-content'>
                        <div className='row'>
                            <div className="col-lg-12">

                                <h1>Create Plan</h1>

                                <form action="/" method="post">

                                    <div className="row">
                                        <div className="col-4">
                                            <label>
                                                Plan Title<span className='req'></span>
                                            </label>
                                        </div>
                                        <div className="col-4">
                                            <label>
                                                Plan Nickname<span className='req'></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-4">
                                            <input type='text' required autocomplete="off" className='input-field' />
                                        </div>
                                        <div className="col-4">
                                            <input type='text' required autocomplete="off" className='input-field' />
                                        </div>

                                        <div className="col-4">
                                            <button className="btn btn-outline">Private</button>
                                            <button className="btn">Public</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="row col-6">
                                <label>
                                    Plan Description...<span className='req'></span>
                                </label>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <textarea type='text' required autocomplete="off" className=''></textarea>
                                </div>
                                <div className="col-6">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="col-lg-12 text-center">
                    <div className="row">
                        <div className='col-6'>
                            <button className='planner-button'>Upload Image</button>
                        </div>
                        <div className='col-6'>
                            <button type='submit' className='planner-button'>Save Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}