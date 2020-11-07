import React from 'react'
import './Home.css';

export const Home = () => {
    return (
        <div className="main">
            <img className="main__blob" src={require('../assets/blob.svg')}></img>
            <div className="main__intro">
                <h1>Hi There</h1>
                <h4>I'm Peshal Agarwal and I'm a Data Scientist</h4>
            </div>
            <div className="main__image">
                <img alt="background" src={require('../assets/peshal_final.png')}></img>
            </div>
        </div>
    )
}
