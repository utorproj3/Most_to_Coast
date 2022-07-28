import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from '@apollo/client';
import "./Main.css";
import { QUERY_ALL_PLANS, QUERY_PLAN_BY_USER } from "../../utils/queries";

export default function Main() {
    const { loading, error, data: allUserData } = useQuery(QUERY_ALL_PLANS);
    const [getPlans, { data: userData }] = useLazyQuery(QUERY_PLAN_BY_USER);
    const { queryPlanData, setQueryPlanData } = useState([]);
    const [findUser, setFindUser] = useState();
    const [searched, setSearch] = useState(false);
    const [userPost, setUserPost] = useState({
        posts: [allUserData],
        filteredPosts: []
    })
    console.log(userData);
    const allTravelPlansData = allUserData?.allTravelPlans || [];

    useEffect(() => {
        if (allUserData) {
            console.log(allUserData.allTravelPlans);
        }
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleChange = (event) => {
        setFindUser(event.target.value);
    };

    const displayPosts = userPost.filteredPosts || [];

    if (error) return `Error! ${error}`;

    console.log(allTravelPlansData);

    return (
        <div className='main'>

            <img src="img/cloud1.png" className="cloud1" alt="cloud1" />
            <img src="img/cloud2.png" className="cloud2" alt="cloud2" />

            <form className='search-form'>
                <div className='search-wrap'>
                    <label className='search-input-text'>
                        Explore Plans
                    </label>
                    <br></br>
                    <input onChange={handleChange} value={findUser} type='text' required autoComplete="off" className='search-field' />
                    <br></br>
                    <button type='button' className='search-button' onClick={() => {
                        getPlans({ variables: { username: findUser } })
                        setSearch(true);
                    }}>search</button>
                </div>
            </form>
            <div className="container-fluid">
                {!searched?                 <div className='text-center'>
                    {allTravelPlansData ? allTravelPlansData.map((allUserData) => {
                        return (
                            <div className="text-left">
                                <h2>{allUserData.planTitle}</h2>
                                <p>{allUserData.descriptionText}</p>
                                <p>{allUserData.destination}</p>
                            </div>
                        )
                    }) : ('No Data yet')
                    }
                </div> :  
                <div className='text-center'>
                    {userData ? userData.searchPlansByUser.myPlans.map((plans) => {
                        return (
                            <div className="text-left">
                                <h2>{plans.planTitle}</h2>
                                <p>{plans.descriptionText}</p>
                                <p>{plans.destination}</p>
                            </div>
                        )
                    }) : ('No Data yet')
                    }
                </div> 
                }   
            </div>
        </div>
    )
}