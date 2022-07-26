import React from "react";
import "./ViewPlanner.css";

export default function ViewPlanner() {
    return (
        <div className="viewplan" >
            <div class="row">
                <div class="col-12 col-md-8">

                    <div class='parent'>
                        <div className="plan-title">Plan Title</div>

                        <div className="plan-nickname">Plan Nickname</div>
                    </div>

                </div>
                
                <div class="col-6 col-md-4">
                    <div className="plan-details">Plan Details</div>
                </div>
            </div>
        

            <div class="row">
                <div class="col-6 col-md-2">
                    <div class="vstack gap-3">
                        <br></br>
                        <div className="user-plans">First Plan</div>
                        <br></br>
                        <div class="user-plans">Second PLan</div>
                        <br></br>
                        <div class="user-plans">Third plan</div>
                        <br></br>
                        <div class="user-plans">Fourth plan</div>
                        <br></br>
                        <div class="user-plans">Fifth plan</div>
                        <br></br>
                        <div class="user-plans">Sixth plan</div>
                        <br></br>
                        
                    </div>
                </div>

                <div class="col-6 col-md-3">

                <br></br>

                    <textarea id="story" name="story" rows="11" cols="45">
                                    Description...
                    </textarea>
                </div>

                <br></br>

                <div class="col-6 col-md-7">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Day 1</th>
                            <th scope="col">Day 2</th>
                            <th scope="col">Day 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">9 am</th>
                            <td>Activity</td>
                            <td>Activity</td>
                            <td>Activity</td>
                            </tr>
                            <tr>
                            <th scope="row">12 pm</th>
                            <td>Activity</td>
                            <td>Activity</td>
                            <td>Activity</td>
                            </tr>
                            <tr>
                            <th scope="row">3 pm</th>
                            <td>Activityy</td>
                            <td>Activity</td>
                            <td>Activity</td>
                            </tr>
                            <tr>
                            <th scope="row">7 pm</th>
                            <td>Activity</td>
                            <td>Activity</td>
                            <td>Activity</td>
                            </tr>
                            <tr>
                            <th scope="row">11 pm</th>
                            <td>Activity</td>
                            <td>Activity</td>
                            <td>Activity</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>


            <div class="row">
                <div class="col-12">
                    <div class='grandparent'>

                        <div class='plan-title'>Plan Created by:  user123</div>

                        <div class='plan-nickname'>
                            <div class="vote roundrect">
                                <div class="increment up"></div>
                                <div class="increment down"></div>
                                <div class="count">Template for Likes : 105 Likes</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>

    )
}

// when user comes to page, they see list of plans, when they click the it populates - this will fetch plan
// when edit button is clicked, you go to create plan 
//  make component for pop up 
// activity has unuqie id, the relationahip is that the base of the plan has the days array, which is day model which has day activity , activity must know whuch activity and at 9am the days 
// is the master relationship
// implement the back end to make the buttons work 