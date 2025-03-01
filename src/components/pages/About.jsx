import React from 'react';
import MainBanner from '../About/MainBanner';
import About from '../About/About';
import Footer from '../Common/Footer';
import lax from 'lax.js';
import GoTop from '../Shared/GoTop';
 
class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        lax.setup();

        document.addEventListener('scroll', this.handleScroll, false);

        lax.update(window.scrollY);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        lax.update(window.scrollY);
    }

    render(){
        return (
            <React.Fragment>
                {/* Main Banner */}
                {/* <MainBanner /> */}
                {/* About Area */}
                <About />

                <Footer />

                {/* Back Top top */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default AboutPage;