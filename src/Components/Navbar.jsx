import React, { useEffect, useState } from "react";
import "./css/Navbar.css";

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
        </div>
      </div>
    </>
  );
}
