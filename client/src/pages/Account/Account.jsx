import React from "react";
import "./Account.css";

export default function Account() {
    return (
        <body>
            <div className="row">
                <div className="col-1">
                    <label>
                        Profile picture (click to change)
                    </label>
                </div>
                <div className="col-2">
                    <label>
                        Username
                    </label>
                    <br></br>
                    <label>
                        Bio
                    </label>
                </div>
                <div className="col-3">
                    <label>
                        My Plans
                    </label>
                    <br></br>
                    <label>
                        __plans from backend__
                    </label>
                </div>
            </div>
        </body>
    )
}