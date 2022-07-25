import React from "react";
import "./Main.css";

export default function Main() {
    return (
        <div className='main'>

            <form className='search-form'>
                <div className='search-wrap'>
                    <label className='search-input-text'>
                        Explore Plans
                    </label>
                    <br></br>
                    <input type='text' required autocomplete="off" className='search-field' />
                    <button className='search-button'></button>
                </div>
            </form>

        </div>
    )
}