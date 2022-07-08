import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

class AboutMe extends Component {
  
    render () {
        return (
            <section className="megan-summers">
                <img className="logo" src={logo} alt="logo"/>
                <div className="about">
                    <h1>Hello, my name is Megan. I’m a <span>software engineer</span> located in Salt Lake City, UT. </h1>
                    <p>I'm a full-stack developer with a passion for creative problem-solving. I have experience
                        working with Ruby, Ruby on Rails, JavaScript, React, jQuery, HTML, CSS, Node.js, Express, and
                        PostgreSQL to build web apps. I pride myself on being a quick and willing learner with an eye for details.</p>
                    <p>In my spare time, I’m likely found hiking, snowboarding, paddleboarding, or having picnics at the park. I
                        have a degree in ecology and environmental science, fueling my love for all things nature. </p>
                    <Link to='/contact' onClick={this.props.onClick} className="lets-talk-link"><div className="lets-talk-button">Let's Talk!</div></Link>
                </div>
            </section>
          )
    }
}

export default AboutMe;