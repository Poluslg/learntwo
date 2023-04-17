import React from 'react'
import "./css/Navbar.css"




export default function Navbar() {
    return (
        <>
            <div className="navwraper">
                <div className="n-left">
                    <div className="n-name">
                        Polu
                    </div>
                </div>
                <div className="n-right">
                    <div className="n-lists">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <label className="switch">
                        <input type="checkbox" onClick={() => { console.log(event)}} />
                        <span className="slider round"></span>
                    </label>
                    <button className='nav-button'>Hire Me</button>
                </div>
            </div>
        </>
    )
}
