import React from "react";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Events from "./components/pages/Events";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/pages/About";
import OurTeam from "./components/pages/Ourteam";
import Schedule from "./components/pages/Schedule";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";
import Faq from "./components/pages/Faq";
import Contact from "./components/pages/Contact";
import Sponsor from "./components/pages/Sponsor";
import Profile from "./components/pages/Profile";
import EditProfile from "./components/pages/EditProfile";
import EventCadPage from "./components/pages/EventDetails/EventCad";
import EventCasestudyPage from "./components/pages/EventDetails/EventCasestudy";
// import EventEnigmaPage from "./components/pages/EventDetails/";
import Success from "./components/pages/Success/Success";
import Cancel from "./components/pages/Cancel/Cancel";
import ContactUs from "./components/pages/ContactUs/ContactUs";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./components/pages/TermsCondition/TermsCondition";
import CancellationRefund from "./components/pages/CancellationRefund/CancellationRefund";
import ShippingDelivery from "./components/pages/ShippingDelivery/ShippingDelivery";
import SpeakersOne from "./components/Speakers/SpeakersOne";
import HandleEvents from "./components/pages/HandleEvents"
import EventRegistrationForm from "./components/EventRegistrationForm";
import JoinForm from "./components/JoinTeamForm";
import GuestLectures from "./components/GuestLecture/GuestLecture";
import Professor from "./components/Teams/professor";
import Accomodation from "./components/Accomodation/Accomodation";
// import HandleEvents from "./components/pages/EventDetails/HandleEvents";
const AppRouter = () => {
    const renderNavigation = () => {
        const excludedRoutes = ['/login', '/signup', '/error-404'];
        if (!excludedRoutes.includes(window.location.pathname)) {
            return <Navigation />;
        }
    };

    return (
        // <BrowserRouter>
        <Router>
            {/* {renderNavigation()} */}
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route  path="/events/:name" element={<HandleEvents />}  />
                {/* <Route path="/events/:id" element={<Events />} /> */}
                {/* <Route path="/event_cad" element={<EventCadPage />} />
                <Route path="/event_casestudy" element={<EventCasestudyPage />} />
                <Route path="/event_enigma" element={<EventEnigmaPage />} /> */}
                <Route path="/createTeam/:eventName" element={<EventRegistrationForm />} />
                <Route path="/joinTeam/:eventName" element={<JoinForm />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/termscondition" element={<TermsCondition />} />
                <Route path="/cancellationrefund" element={<CancellationRefund />} />
                <Route path="/shippingdelivery" element={<ShippingDelivery />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sponsors" element={<Sponsor />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/guestlecture" element={<GuestLectures />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/ourteam" element={<SpeakersOne />} />
                <Route path="/teams" element={<Professor />} />
                <Route path="/accommodation" element={<Accomodation />} />

                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
        // </BrowserRouter>

    );
};

export default AppRouter;
