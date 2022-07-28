import React, { useEffect, useState }from "react";
import "./ViewPlanner.css";
import {useNavigate} from "react-router-dom"
import { QUERY_PLAN_BY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';

export default function ViewPlanner() {
    const navigate = useNavigate();

    const [planState, setPlanState] = useState({});
    const time = ['9am', '12pm', '3pm', '6pm'];


    const { loading, data } = useQuery(QUERY_PLAN_BY_USER, {
        variables: { username: Auth.getProfile().data.username }

    });

    if (!Auth.loggedIn()) {
        navigate("/");
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const plans = data?.searchPlansByUser.myPlans;

    console.log(plans);
    console.log(planState[0]);

    const handleFilter = (event) => {

        console.log(event.target.value)

    }

    function viewPlan(plan){
        console.log(plan);
        const daysData = plan.days.map(day => {
            const activities = day.activities.map(activity => {
                return {
                    id: activity._id,
                    time: activity.startTime,
                    name: activity.name
                };
            });

            return {
                id: day._id,
                dayNumber: `Day ${day.dayNumber}`,
                activities: activities
            };
        });
        
        setPlanState({
            id: plan._id,
            title: plan.planTitle,
            description: plan.descriptionText,
            days: daysData
        });

    }


    console.log(planState.days && planState.days[0]);

    return (
        <div className="viewplan" >
            <div className="row">
                <div className="col-12 col-md-8">

                    <div className='parent'>
                        <div className="plan-title">My Plans</div>

                        <button className="plan-nickname" onClick={function(){
                            navigate("/Planner")
                        }} >Edit Plan</button>
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
                        {plans.length && plans.map(plan => {
                            return (
                                <button 
                                    key={plan._id} 
                                    onClick={() => {viewPlan(plan)}} 
                                    className="user-plans"
                                >
                                    {plan.planTitle}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="col-6 col-md-3">
                    <br></br>
                    <textarea 
                        id="story" 
                        name="story" 
                        rows="11" 
                        cols="60"
                        value={planState.description ? (planState.description) : 'Description...'}
                    >
                    </textarea>
                </div>
                <br></br>
                <div className="col-6 d-flex justify-content-between">
                    {planState.days && planState.days.map(day => {
                        return (
                            <div key={day.id}>
                                <p>{day.dayNumber}</p>
                                {day.activities && day.activities.map(activity => {
                                    return <p>{activity.time}: {activity.name}</p>;
                                })}
                               
                            </div>
                        )
                    })}
                </div>
            </div>

            <br></br>

            <div className="row">
                <div className="col-12">
                    <div className='grandparent'>

                        <div className='plan-title'>Plan Created by:  user123</div>

                        <div className='plan-likes'>
                            <div className="vote roundrect">
                                <div className="increment up"></div>
                                <div className="increment down"></div>
                                <button className="likes">This Travel Plan has been liked by  : 105 Travel Addicts</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>

    )
}
