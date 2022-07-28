import React, { useEffect, useState }from "react";
import "./ViewPlanner.css";
import {useNavigate} from "react-router-dom"
import { QUERY_PLAN_BY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';

export default function ViewPlanner() {
    const navigate = useNavigate();
    // const [timeState, setTimePost] = useState(
    //     [{
    //         time : '9am', 
    //         activity : ''},
    //         {time : '12pm',
    //         activity : ''},
    //         {time : '3pm',
    //         activity : ''},
    //         {time : '7pm',
    //         activity : ''},
    //         {time : '11pm',
    //         activity : ''},
    //     ] 
    // );
    const [planState, setPlanState] = useState({});
    const time = ['9am', '12pm', '3pm', '6pm'];

    // useEffect(()=>{

    //     // here grab all of the data from the backend and set it to state
    //     // setUserPost({posts: data from backend})
    // }, [planState])

    const { loading, data } = useQuery(QUERY_PLAN_BY_USER, {
        // variables: { username: Auth.getProfile().data.username }
        variables: { username: 'Steve.Ruecker52' }
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
        // check out event.target.value and .filter method.
        // youre going to need to filter and set event.target.value to filteredPosts
        // filteredPosts is what youre going to want to display and map over down below
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

        // setUserPost(
        //     [{
        //         time : '10am', 
        //         activity : ''
        //     },]
        // )
    }

    // const days = planState[1]
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
                                {/* <table className="table">
                                    <thead>
                                        <tr>
                                            {day.dayNumber === 'Day 1' && 
                                                <th scope="col">Time</th>
                                            }
                                            <th scope="col">{day.dayNumber}</th>
                                            {/* <th scope='row'>9:00am</th>
                                            <th scope='row'>10:00am</th>
                                            <th scope='row'>11:00am</th>
                                            <th scope='row'>12:00am</th> */}
                                        {/* </tr>
                                    </thead>
                                    <tbody>
                                        {time.map(element => {
                                            return (
                                                <tr key={element}>                    
                                                    {day.dayNumber === 'Day 1' && 
                                                        <th scope="row">{element}</th>
                                                    }
                                                    {day.activities && day.activities.map(activity => {
                                                        if (activity.time === element) {
                                                            return <td>{activity.name}</td>;
                                                        }
                                                    })}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table> */}
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

// when user comes to page, they see list of plans, when they click the it populates - this will fetch plan
// when edit button is clicked, you go to create plan 
//  make component for pop up 
// activity has unuqie id, the relationahip is that the base of the plan has the days array, which is day model which has day activity , activity must know whuch activity and at 9am the days 
// is the master relationship
// implement the back end to make the buttons work 