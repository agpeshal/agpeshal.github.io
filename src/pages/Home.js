import React from 'react'
import './Home.css';

export const Home = () => {
    return (
        <div className="main">
            <div className="main__intro">
                <h1>Hi There</h1>
                <h4>I'm Peshal Agarwal and I am an aspiring Data Scientist. I am currently studying Statistics at ETH Zurich</h4>
            </div>
            <div className="main__image">
                <img alt="background" src={require('../assets/peshal_final.png')}></img>
            </div>
        </div>
    )
}
