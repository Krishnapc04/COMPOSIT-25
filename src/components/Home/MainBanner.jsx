import React from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import './home.css'
 
class MainBanner extends React.Component {
    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        isOpen: false
    };
    userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
    openModal = () => {
        this.setState({isOpen: true})
    }

    makeTimer = () => {
        let endTime = new Date("March 21, 2025 17:00:00 PDT");			
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        setInterval(() => { 
            this.makeTimer();
        }, 1000);
    }
    render(){
        return (
            <React.Fragment>
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='cRXm1p-CNyk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            
                <div className="main-banner item-bg2">
                    
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                {/* <div className='notifSuccess'>Registrations are open for Enigma, Techtoon, Technova, Ideathon, Metaclix, Metallomania. </div>
                                <div className='notifRed'>Registrations for CAD, School Quiz, Excavate and Case Study will begin tomorrow.</div> */}
                                
                                <div className="main-banner-content">
                                    <p>Are you <span>ready</span> to attend?</p>
                                    <h1>COMPOSIT <b>2</b><b>0</b><b>2</b><b>5</b></h1>
                                    <ul>
                                        <li><i className="icofont-compass"></i> IIT Kharagpur</li>
                                        <li><i className="icofont-calendar"></i> 21th March - 23rd March, 2025</li>
                                    </ul>
                                    <div className="button-box">
                                    {this.userData ?
                                    <Link to="/events" className="btn btn-primary home-pg-btn">Go to Events</Link>
                                    :
                                    <div className='btn-container'>
                                    <Link to="/signup" className="btn btn-primary home-pg-btn">Sign Up</Link> <br />
                                    {/* <Link to="https://ca.composit.in" target='_blank' className="btn btn-primary home-pg-btn">Register for Campus Ambassador</Link> <br /> */}
                                    {/* <Link to="https://ca.composit.in" className='mt-5'  target='_blank' ><h5 className=' text-white'> Click here to Register as Campus Ambassador</h5></Link> */}
                                    </div>
                                }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="event-countdown">
                        <div id="timer">
                            <div id="days">{this.state.days} <span>Days</span></div>
                            <div id="hours">{24-this.state.hours} <span>Hours</span></div>
                            <div id="minutes">{this.state.minutes} <span>Minutes</span></div>
                            <div id="seconds">{this.state.seconds} <span>Seconds</span></div>
                        </div>
                    </div>

                    <div className="shape1">
                        <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
                    </div>
                    <div className="shape2 rotateme">
                        <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
                    </div>
                    <div className="shape3 rotateme">
                        <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
                    </div>
                    <div className="shape4">
                        <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MainBanner;