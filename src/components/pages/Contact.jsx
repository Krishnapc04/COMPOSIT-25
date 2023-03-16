import React from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import Footer from '../Common/Footer';
import axios from 'axios'

class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            submitted: false,
            buttonState: '',
            name: '',
            email: '',
            phone: '',
            text: '',
            displayMsg: ''
        };
    }
    

    handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_KEY}/contactUs`, this.state);
            this.setState({ displayMsg: res })
            console.log(res, "successfully contacted")
        } catch (err) {
            this.setState({ displayMsg: err })
            // console.log(err.response.data.message, "error")
            console.log(err, "error in contacting")
        }
    };

    
    onHideSuccess = () => {
        this.setState({ submitted: false });
    }

    successMessage = () => {
        if (this.state.submitted) {
            return (
                <div
                    className="alert alert-success alert-dismissible fade show"
                    style={{ marginTop: '14px' }}
                >
                    <strong>Thank you!</strong> Your message is send to the owner.
                    <button
                        type="button"
                        className="close"
                        onClick={this.onHideSuccess}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render() {
        const userData = JSON.parse(localStorage.getItem("COMPOSITuser"))
        const participantId = userData._id
        const a = process.env.REACT_APP_API_KEY
        console.log(process.env.REACT_APP_API_KEY)
        console.log(a, "api")
        // function openForm() {
        //     document.getElementById("popupForm").style.display = "block";
        // }
        // function closeForm() {
        //     document.getElementById("popupForm").style.display = "none";
        // }
        // window.onclick = function (event) {
        //     let modal = document.getElementById('loginPopup');
        //     let popupBtn = document.getElementById('popupBtn');
        //     if (event.target !== modal) {
        //         closeForm();
        //     }
        //     if (event.target === popupBtn) {
        //         openForm();
        //     }
        // }
        // const handleSubmit = async (e, eventName) => {
        //     e.preventDefault()
        //     try {
        //         const res = await axios.post(`/eventRegistration/${eventName}/${participantId}`, registerTechnovaData)
        //         setState({ displayMsg: `Dear ${userData.name}. You have Successfully registered for ${eventName}.` })
        //         openForm()
        //     }
        //     catch (error) {
        //         console.log(error)
        //         setState({ displayMsg: `Dear ${userData.name}. ${error.response.data} for ${eventName}` })
        //         openForm()
        //     }
        // };
        return (
            <React.Fragment>
                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <span>Send us your Message</span>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                <section className="contact-area ptb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-box">
                                    <div className="icon">
                                        <i className="icofont-phone"></i>
                                    </div>

                                    <div className="content">
                                        <h4>Phone</h4>
                                        <p><i className="icofont-phone"></i> Gourav Pathak : 6204935889</p>
                                        <p><i className="icofont-phone"></i> Alluri Hasitha : 9392703946</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-box">
                                    <div className="icon">
                                        <i className="icofont-email"></i>
                                    </div>

                                    <div className="content">
                                        <h4>E-mail</h4>
                                        <p>composit.iit@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="contact-box">
                                    <div className="icon">
                                        <i className="icofont-world"></i>
                                    </div>

                                    <div className="content">
                                        <h4>Location</h4>
                                        <p>Metallurgical and Materials Engineering Depatment, IIT Kharagpur</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row h-100 align-items-center contact-form">
                            <div className="col-lg-4 col-md-12">
                                <div className="leave-your-message">
                                    <h3>Leave Your Message</h3>
                                    <p>If you have any questions about the services we provide simply use the form below. We try and respond to all queries and comments within 24 hours.</p>

                                    <div className="stay-connected">
                                        <h3>Stay Connected</h3>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/composit.iitkgp/" target="_blank">
                                                    <i className="icofont-facebook"></i>
                                                    <span>Facebook</span>
                                                </a>
                                            </li>

                                            {/* <li>
                                                <Link to="#" target="_blank">
                                                    <i className="icofont-twitter"></i>
                                                    <span>Twitter</span>
                                                </Link>
                                            </li> */}

                                            <li>
                                                <a href="https://www.instagram.com/composit_iitkgp/?utm_medium=copy_link" target="_blank">
                                                    <i className="icofont-instagram"></i>
                                                    <span>Instagram</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www.linkedin.com/company/composit-iit-kharagpur/?originalSubdomain=in" target="_blank">
                                                    <i className="icofont-linkedin"></i>
                                                    <span>Linkedin</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <form onSubmit={this.onSubmit} id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Name*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    required={true}
                                                    data-error="Please enter your name"
                                                    value={this.state.name}
                                                    onChange={ e => this.setState({ name: e.target.value }) }
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email*</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    required={true}
                                                    data-error="Please enter your email"
                                                    value={this.state.email}
                                                    onChange={ e => this.setState({ email: e.target.value }) }
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="number">Phone Number*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="number"
                                                    id="number"
                                                    required={true}
                                                    data-error="Please enter your number"
                                                    value={this.state.phone}
                                                    onChange={ e => this.setState({ phone: e.target.value }) }
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Message*</label>
                                                <textarea
                                                    name="message"
                                                    className="form-control"
                                                    id="message"
                                                    cols="30"
                                                    rows="4"
                                                    required={true}
                                                    data-error="Write your message"
                                                    value={this.state.text}
                                                    onChange={ e => this.setState({ text: e.target.value }) }
                                                />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Send Message</button>
                                            <div id="msgSubmit" className="h3 text-center hidden">
                                                {this.successMessage()}
                                                
                                {this.state.displayMsg && <p>{this.state.displayMsg}</p>}
                             
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div className="loginPopup" id='loginPopup'>
                        <div className="formPopup" id="popupForm">
                            <h2>{this.state.displayMsg}</h2>
                            <Link to="/events" className='popupTextLink'>Register for other events.</Link>
                        </div>
                    </div> */}
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;