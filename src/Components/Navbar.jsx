// import React, { useEffect, useState, Fragment } from "react";
// import "./css/Navbar.css";


// export default function Navbar() {
//   const [theme, setTheme] = useState("light-theme");

//   const toggleMode = () => {
//     if (theme === "dark-theme") {
//       setTheme("light-theme");
//     } else {
//       setTheme("dark-theme");
//     }
//   };

//   useEffect(() => {
//     document.body.classList = theme;
//   }, [theme]);

//   const navigation = [
//     { name: "Home", href: "#home", current: true },
//     { name: "About", href: "#about", current: false },
//     { name: "Projects", href: "#projects", current: false },
//     { name: "Contact", href: "#contact", current: false },
//   ];
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     const content = document.getElementById("content");
//     if (content.classList.contains("blur-[5px]")) {
//       content.classList.remove("blur-[5px]");
//     } else {
//       content.classList.add("blur-[5px]");
//     }
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <Fragment>
//       <div className="navwrapper">
//         <div className="n-left">
//           <div className="n-name">
//             <img src="./imgs/favicon.png" alt="Pmusiclogo" className="n-logo" />
//           </div>
//           <div className="n-right">
//             <div className="n-lists">
//               <ul>
//                 {navigation.map((item) => (
//                   <li key={item.name}>
//                     <a
//                       href={item.href}
//                       className={item.current ? "active" : ""}
//                       aria-current={item.current ? "page" : undefined}
//                     >
//                       {item.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <label className="switch">
//               <input type="checkbox" onClick={toggleMode} />
//               <span className="slider round"></span>
//             </label>
//             <button className="button" onClick={()=>{console.log(event)}}>Hire Me</button>
//           </div>
//           {/* <div className="mobile">
//             <img
//               src="./imgs/bars-solid.svg"
//               alt="menubar"
//               className="menubar"
//             />
//             <img
//               src="./imgs/xmark-solid.svg"
//               alt="menubar"
//               className="closebar"
//             />
//           </div> */}
//         </div>
//       </div>
//     </Fragment>
//   );
// }

import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Navbar
