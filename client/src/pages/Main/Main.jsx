import React from "react";
import "./Main.css";

export default function Main() {
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
                    <input type='text' required autocomplete="off" className='search-field' />
                    <br></br>
                    <button className='search-button'>search</button>
                </div>
            </form>

        </div>
    )
}