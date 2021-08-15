import React from "react";
import { BiChevronRight } from "react-icons/bi";

const NavSm = () => {
    return <>
        <div>
            <div>
                <h3>It all starts here</h3>
                <span>
                    Bengaluru <BiChevronRight /> 
                </span>
            </div>
        </div>
    </>;
};

const NavMd = () => {

};

const Navlg = () => {

}

const Navbar = () => {
    return <>
        <nav>
            <div className="md:hidden">
                <NavSm />
            </div>
            <div className="hidden md:flex lg:hidden"></div>
            <div className="hidden lg:flex"></div>
        </nav>
    </>;
};

export default Navbar;