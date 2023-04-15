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
            <span>Toggle</span>
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
            <button>Hire Me</button>
        </div>
    </div>
    </>
  )
}
