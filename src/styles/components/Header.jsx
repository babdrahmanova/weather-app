
import React from "react";
const Header = () => {
    return (
        <>
            <div className="app">
                <div className="container">
                    <div className="top">
                        <div className="location">
                            <p>Osh</p>
                        </div>
                        <div className="temp">
                            <h1>40 C°</h1>
                        </div>
                        <div className="description">
                            <p>Clouds</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="feels">
                            <p>42C°</p>
                        </div>
                        <div className="humidity">
                            <p>32%</p>
                        </div>
                        <div className="wind">
                            <p>12 MPH</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;