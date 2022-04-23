import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="aside">
                <div className="asideLogo">
                    <a href="#"><span>I</span>kkrit</a>
                </div>
                <div className="navToggler">
                    <span></span>
                </div>
                <ul className="navBar">
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">
                            <span><i className="fa fa-home"></i> Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/contact">
                            <span><i className="fa fa-user"></i> About</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/competences">
                            <span><i className="fa fa-list"></i> Services</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/portefolio">
                            <span><i className="fa fa-briefcase"></i> Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/contact">
                            <span><i className="fa fa-comment"></i> Contact</span>
                        </NavLink>
                    </li>
                </ul>
        </div>

    );
};

export default Navigation;