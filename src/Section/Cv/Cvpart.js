import React from 'react';
import hire from '../../img/workingbrand.jpg'
import { Parallax } from 'react-parallax';

const Cvpart = () => {
    return (
        <div>
            <Parallax className='img lg:w-full md:w-32' strength={-800} bgImage={hire}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Download CV</h2>
                        <p>Thank you for taking the time to visit my profile. If you are interested in learning more about my qualifications, skills, and experience, I would be happy to share my resume with you.

                            My resume highlights my professional background and showcases my abilities in areas such as project management, communication, and problem-solving. It also outlines my educational background, certifications, and achievements.

                            If you would like to download my resume, please click the download button below. I am confident that my skills and experience make me a strong candidate for any relevant positions or opportunities.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Resume</button>
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Cvpart;