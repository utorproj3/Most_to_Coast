import React, { useEffect, useState }from "react";
import "./Main.css";

export default function Main() {
    const [userPost, setUserPost] = useState({
        posts: [],
        filteredPosts: []
    })

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

    const displayPosts = userPost.filteredPosts || [];

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
                    <input onChange={handleFilter}type='text' required autoComplete="off" className='search-field' />
                    <br></br>
                    <button className='search-button'>search</button>
                </div>
            </form>

            <div>
                {displayPosts.map((post)=>{
                    return(
                    //<div>{post.title}</div>
                    <div></div>
                    )
                })}
                Place to show stuff from db
            </div>
        </div>
    )
}