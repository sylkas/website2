import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

class About extends Component {
    render() {
        return (
            <div>
                <Header
                    title="About us"
                    subtitle="It's a really a great story"
                    buttonText="Tell Me More"
                    showButton={false}
                    image={image}
                />
                <Timeline />
                <Team />

            </div>

        )
    }
}

export default About;