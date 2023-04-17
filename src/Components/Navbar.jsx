import React, { useEffect, useState } from "react";
import "./css/Navbar.css";

export default function Navbar() {
    const[theme,setTheme]=useState("light-theme");

    const toggleMode=()=>{
        if(theme==="light-theme"){
            setTheme('light-theme')
        }else{
            setTheme('dark-theme')
        }
    };
        useEffect(()=>{
            document.body.className=theme;
        },[theme]);
    
  return (
    <>
      <div className="navwraper">
        <div className="n-left">
          <div className="n-name">Polu</div>
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
            <input
              type="checkbox"
              onClick={toggleMode}
            />
            <span className="slider round"></span>
          </label>
          <button className="button">Hire Me</button>
        </div>
      </div>
    </>
  );
}
