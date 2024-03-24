import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo"> EventEaze </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="HeroSection" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="Services" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="Aboutus" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="Contacts" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;