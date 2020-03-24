import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

class AboutMe extends Component {
  
    render () {
        return (
            <section className="megan-wade">
                <img className="logo" src={logo} alt="logo"/>
                <div className="about">
                    <h1>Hello, my name is Megan. I’m a <span>web developer</span> located in Chicago, IL. </h1>
                    <p>I’m a web developer and current student in Thinkful’s Full Stack Flex program. 
                    I have experience with HTML, CSS, JavaScript, JQuery, React, Node.js, Express, and PostgreSQL. I love continually learning and appreciate that coding 
                    keeps me on my toes. I am particularly passionate about improving the user experience and take joy in 
                    creating beautiful, user-friendly web pages. I look forward to working on a team of developers that’s going to push me to create the best products.</p>
                    <p>In my spare time, I’m likely found reading up on minimalist design, browsing the web, scuba diving, or spending 
                    time with my family. I have a degree in ecology and environmental science, fueling my love for all things nature. </p>
                    <Link to='/contact' onClick={this.props.onClick} className="lets-talk-link"><div className="lets-talk-button">Let's Talk!</div></Link>
                </div>
            </section>
          )
    }
}

export default AboutMe;