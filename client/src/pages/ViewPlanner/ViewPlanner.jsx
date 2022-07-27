import React, { useEffect, useState }from "react";
import "./ViewPlanner.css";
import {useNavigate} from "react-router-dom"

import { QUERY_PLAN_BY_USER } from '../../utils/queries';
// import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';

export default function ViewPlanner() {
    const { loading, data } = useQuery(QUERY_PLAN_BY_USER, {
        variables: { username: 'Garth_Lueilwitz' }
    });

    const plans = data?.searchPlansByUser.myPlans || {};
    console.log(plans);

    if (loading) {
        return <div>Loading...</div>;
    }

    // if (!user?.username) {
    //     return (
    //       <h4>
    //         You need to be logged in to see this page. Please login or sign up from the navigation link!
    //       </h4>
    //     );
    // }
    

    const navigate = useNavigate();

    const [userPost, setUserPost] = useState(
        [{
            time : '9am', 
            activity : ''
        },
            {time : '12pm',
            activity : ''},
            {time : '3pm',
            activity : ''},
    ] 
    )

    useEffect(()=>{

        // here grab all of the data from the backend and set it to state
        // setUserPost({posts: data from backend})
    }, [userPost])

    const handleFilter = (event) => {
        // check out event.target.value and .filter method.
        // youre going to need to filter and set event.target.value to filteredPosts
        // filteredPosts is what youre going to want to display and map over down below
        console.log(event.target.value)

    }

    function viewplan(){
        setUserPost(
            [{
                time : '10am', 
                activity : ''
            },]
        )
    }

    return (
        <div className="viewplan" >
            <div className="row">
                <div className="col-12 col-md-8">

                    <div className='parent'>
                        <div className="plan-title">Plan Title</div>

                        <button onClick={function(){
                            navigate("/Planner")
                        }} className="plan-nickname">Edit Plan</button>
                    </div>

                </div>
                
                <div className="col-6 col-md-4">
                    <div className="plan-details">Plan Details</div>
                </div>
            </div>
        

            <div className="row">
                <div className="col-6 col-md-2">
                    <div className="vstack gap-3">
                        <br></br>
                        <button onClick={viewplan} className="user-plans">First Plan</button>
                        <br></br>
                        <div className="user-plans">Second PLan</div>
                        <br></br>
                        <div className="user-plans">Third plan</div>
                        <br></br>
                        <div className="user-plans">Fourth plan</div>
                        <br></br>
                        <div className="user-plans">Fifth plan</div>
                        <br></br>
                        <div className="user-plans">Sixth plan</div>
                        <br></br>
                        {plans.map(plan => {
                            return (
                                <div key={plan._id}>
                                    <div className="user-plans">{plan.planTitle}</div>
                                    <br></br>
                                </div>
                            );
                        })};
                    </div>
                </div>

                <div className="col-6 col-md-3">

                <br></br>

                    <textarea id="story" name="story" rows="11" cols="45">
                                    Description...
                    </textarea>
                </div>

                <br></br>

                <div className="col-6 col-md-7">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Day 2</th>
                            <th scope="col">Day 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userPost.map(element => {
                                    return <tr key={element.time}>                    
                                    <th scope="row">{element.time}</th>
                                    <td>Activity</td>
                                    <td>Activity</td>
                                    <td>Activity</td>
                                    </tr>
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="row">
                <div className="col-12">
                    <div className='grandparent'>

                        <div className='plan-title'>Plan Created by:  user123</div>

                        <div className='plan-nickname'>
                            <div className="vote roundrect">
                                <div className="increment up"></div>
                                <div className="increment down"></div>
                                <div className="count">Template for Likes : 105 Likes</div>
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