import React from "react";
import HeroCarousal from "../components/HeroCarousel/HeroCarousel.component";

import Navbar from "../components/Navbar/Navbar.component";

 const DefaultLayout = (props) => {
     return (
         <>
         <Navbar />
         <HeroCarousal />
         
         {props.children}
         </>
     )
 } 

export default DefaultLayout;
