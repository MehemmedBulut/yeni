import React from 'react'

//CSS
import '../components/About.css'

//photo
import profilephoto from '../assets/images/profile.JPG'

const About = () => {
  return (
    <>
    <div className="about">
        <h1>About Me</h1>
        <div className="head">
        <div className="leftside">
            <img src={profilephoto} alt="" />
        </div>
        <div className="rightside">
            <h2>Mahammad Bulut</h2>
                <p>
                Hi there! My name is Mahammad Bulut and I am a dynamic and driven full-stack developer based in Azerbaijan.I am looking for new and exciting projects as I am skilled at creating user-friendly and dynamic websites.I am looking for new and exciting projects as I am skilled at creating user-friendly and dynamic websites.
                On this path, which I started with the front-end, along with my passion for technology, I became interested in the back-end, and in the end, I participate in active projects as an experienced full-stack developer.
                I am a quick learner, and I have a track record of adapting to new technologies and programming languages with ease.In my free time, I am a voracious learner who enjoys staying up-to-date with the latest advancements in technology. I am particularly interested in artificial intelligence and machine learning, and I am eager to apply my skills in these areas to make a positive impact in the world. Overall, I am a dedicated and motivated individual with a passion for technology and a drive to always improve. If you're looking for a talented front-end developer with a strong work ethic and a commitment to excellence, I would love the opportunity to work with you!
                </p>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default About