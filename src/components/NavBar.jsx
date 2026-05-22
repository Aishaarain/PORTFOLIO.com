// import { useState, useEffect } from "react";

// import { navLinks } from "../constants";

// const NavBar = () => {
//   // track if the user has scrolled down the page
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     // create an event listener for when the user scrolls
//     const handleScroll = () => {
//       // check if the user has scrolled down at least 10px
//       // if so, set the state to true
//       const isScrolled = window.scrollY > 10;
//       setScrolled(isScrolled);
//     };

//     // add the event listener to the window
//     window.addEventListener("scroll", handleScroll);

//     // cleanup the event listener when the component is unmounted
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
//       <div className="inner">
//         <a href="#hero" className="logo">
//           Adrian JSM
//         </a>

//         <nav className="desktop">
//           <ul>
//             {navLinks.map(({ link, name }) => (
//               <li key={name} className="group">
//                 <a href={link}>
//                   <span>{name}</span>
//                   <span className="underline" />
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <a href="#contact" className="contact-btn group">
//           <div className="inner">
//             <span>Contact me</span>
//           </div>
//         </a>
//       </div>
//     </header>
//   );
// }

// export default NavBar;
import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "bg-[#02010a] shadow-[0_0_20px_rgba(0,255,255,0.2)]" : "bg-[#02010a]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-[#f9fcfc] font-bold text-xl md:text-2xl drop-shadow-[0_0_10px_#00ffff] hover:drop-shadow-[0_0_20px_#ff00ff]"
        >
         Aisha Arain
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="relative group">
                <a
                  href={link}
                  className="text-[#00ffff] font-medium text-lg relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#00ffff] after:via-[#ff00ff] after:to-[#00ffff] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 drop-shadow-[0_0_6px_#00ffff] hover:drop-shadow-[0_0_15px_#ff00ff]"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="relative group px-6 py-2 rounded-full border border-cyan-500 text-[#00ffff] font-semibold bg-gradient-to-br from-[#02010a] to-[#000] drop-shadow-[0_0_8px_#00ffff] transition-transform duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_#00ffff,0_0_40px_#ff00ff]"
        >
          <span>Contact me</span>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
