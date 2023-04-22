import React, { useEffect, useRef, useState } from "react";
import "./css/Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [theme, setTheme] = useState("light-theme");

  const toggleMode = () => {
    if (theme === "dark-theme") {
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const navigation = [
    { name: 'Home', href: '#home', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Contact', href: '#contact', current: false },
  ]
  const navRef=useRef();
  const showNavbar=()=>{
    navRef.current.classlist.loggel("responsive_nav");

  }
  return (
    <>
      <div className="navwraper">
        <div className="n-left">
          <div className="n-name">Polu</div>
        </div>
        <div className="n-right">
          <div className="n-lists">
            <ul>
              {navigation.map((item) => (
                <a
                ref={navRef}
                  key={item.name}
                  href={item.href}
                  className="itemsnav"
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
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
          <div className="mobilebar">
            <MenuIcon className="nav-btn " onClick={showNavbar}/>
            <CloseIcon className="nav-btn nav-close-btn" onClick={showNavbar}/>
          </div>
        </div>

      </div>
    </>
  );
}