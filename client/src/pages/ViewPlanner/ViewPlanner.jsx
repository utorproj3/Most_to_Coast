import React, { useEffect, useState }from "react";
import "./ViewPlanner.css";
import {useNavigate} from "react-router-dom"

export default function ViewPlanner() {

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
            {time : '7pm',
            activity : ''},
            {time : '11pm',
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
                        <button onClick={viewplan} className="user-plans">First Plan</button>
                        <button className="user-plans">Second PLan</button>
                        <button className="user-plans">Third plan</button>
                        <button className="user-plans">Fourth plan</button>
                        <button className="user-plans">Fifth plan</button>
                        <button className="user-plans">Sixth plan</button>
                        
                    </div>
                </div>

                <div className="col-6 col-md-3">

                <br></br>

                    <textarea id="story" name="story" rows="11" cols="60">
                                    Description...
                    </textarea>
                </div>

                <br></br>

                <div className="col-6 col-md-7">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Day 1</th>
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