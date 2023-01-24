import React from 'react';

const AboutMe = () => {
    return (
        <div style={{ minHeight: '60vh', textAlign: 'center' }} className="container about-myself">
            <div>
                <img class="flex-item about-image"src="rainbow-smoke.jpeg" alt="Katie smiling" height="300px" width="300px"></img>
            </div>
            <div>
                <p className="flex-item about-info">Future Full Stack Web Developer leveraging background in Education to provide insight into how users will interact with software programs and websites as well as how these programs will be perceived by the user. Extensive experience in learning systems within the School Board coupled with the knowledge of Full Stack Web Development in order to successfully work within the technical realm of an institution. Effective at combining creativity and problem solving to develop user-friendly applications. Known among peers and colleagues for being a dedicated worker, a quick-learner and for paying attention to detail no matter the complexity of the project. </p>
            </div>
        </div>
    )
}

export default AboutMe