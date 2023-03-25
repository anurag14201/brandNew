import React from 'react';
import anurag from '../../img/ageer.jpg'
import Cvpart from '../Cv/Cvpart';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={anurag} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">I'M ANURAG DATTA.</h1>
                        <p className="py-6">UX/UI DESIGNER & WEB DEVELOPER</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Cvpart></Cvpart>
        </div>
    );
};

export default Home;