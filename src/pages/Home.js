import React from 'react';
import Navigation from '../components/layout/Navigation';

const Home = () => {
    return (
        <div className='homeMaster'>
            <Navigation />
            <div className="homeContent">
                <section className="home section hidden">
                    <div className="container">
                        <div className="row">
                            <div className="homeInfo padd15">
                                <h3 className="hello">Salut, mon nom est <span className='name'>Johan Carrion</span></h3>
                                <h3 className="myProfession">Je suis <span className='typing'>étudiant BTS-SIO</span></h3>
                                <p>Je suis en formation BTS-SIO, est ceci est ma presentation de mon années ainsi que mes autres projets Je suis en formation BTS-SIO, est ceci est ma presentation de mon années ainsi que mes autres projets</p>
                                <a href="#contact" className='btn hire-me'>En savoir plus</a>
                            </div>
                            <div className="homeImg padd15">
                                <img src="./IMG/laharl.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="aboutMaster">
                <section className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="sectionTitle padd15">
                                <h2>About me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="aboutContent padd15">
                                <div className="rom">
                                    <div className="aboutText">
                                        <h3>Je suis Johan et <span>étudiant BTS-SIO</span></h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum fugit recusandae minus quos, sit veritatis at, animi suscipit omnis amet. Tempora, soluta cupiditate eveniet repellat eos doloremque sit magnam.
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatum fugit recusandae minus quos, sit veritatis at, animi suscipit omnis amet. Tempora, soluta cupiditate eveniet repellat eos doloremque sit magnam.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="personalInfo">Info</div>
                                    <div className="skills">Skills</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;