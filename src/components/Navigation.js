import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img className="imgSidebar" src="./media/laharl.jpg" alt="" />
                    <h3>Johan Carrion</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/competences">
                            <i className='fas fa-mountain'></i>
                            <span>Competences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/portefolio">
                            <i className='fas fa-image'></i>
                            <span>Portefolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/contact">
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="http://google.com" target="_blank" rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="http://google.com" target="_blank" rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href="http://google.com" target="_blank" rel='noopener noreferrer'><i className='fab fa-twitter'></i></a>
                    </li>
                    <li>
                        <a href="http://google.com" target="_blank" rel='noopener noreferrer'><i className='fab fa-codepen'></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Johan - 2022 - BTS-SIO</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;