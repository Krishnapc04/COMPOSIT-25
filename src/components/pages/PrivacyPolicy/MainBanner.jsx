import React from "react";
import { Link } from "react-router-dom";

class MainBanner extends React.Component {
  render() {
    return (
      <div className="page-title-area item-bg1">
        <div className="container">
          <h1>Privacy Policy</h1>
          <span style={{textAlign: "left"}}>
            This privacy policy sets out how COMPOSIT uses and protects any
            information that you give COMPOSIT when you visit their website
            and/or agree to purchase from them.
          </span>
          <span style={{textAlign: "left"}}>
            COMPOSIT is committed to ensuring that your privacy is protected.
            Should we ask you to provide certain information by which you can be
            identified when using this website, and then you can be assured that
            it will only be used in accordance with this privacy statement.
          </span>
          <span style={{textAlign: "left"}}>
            COMPOSIT may change this policy from time to time by updating this
            page. You should check this page from time to time to ensure that
            you adhere to these changes.
          </span>
          <span style={{textAlign: "left"}}>We may collect the following information:</span>
          <ul style={{textAlign: "left"}}>
            <li>Name</li>
          </ul>
          <ul style={{textAlign: "left"}}>
            <li>Contact information including email address</li>
          </ul>
          <ul style={{textAlign: "left"}}>
            <li>
              Demographic information such as postcode, preferences and
              interests, if required
            </li>
          </ul>
          <ul style={{textAlign: "left"}}>
            <li>
              Other information relevant to customer surveys and/or offers
            </li>
          </ul>
          <span style={{textAlign: "left"}}>
            <b>What we do with the information we gather</b>
          </span>
          <span style={{textAlign: "left"}}>
            We require this information to understand your needs and provide you
            with a better service, and in particular for the following reasons:
          </span>
          <ul style={{textAlign: "left"}}>
            <li> Internal record keeping.</li>
          </ul>
          <ul style={{textAlign: "left"}}>
            <li>
              {" "}
              We may use the information to improve our products and services.
            </li>
          </ul>
          <ul style={{textAlign: "left"}}>
            <li>
              {" "}
              We may periodically send promotional emails about new products,
              special offers or other information which we think you may find
              interesting using the email address which you have provided.
            </li>
          </ul>
          <ul style={{textAlign: "left"}}>
            <li>
              From time to time, we may also use your information to contact you
              for market research purposes. We may contact you by email, phone,
              fax or mail. We may use the information to customise the website
              according to your interests.
            </li>
          </ul>
          <span style={{textAlign: "left"}}>
            We are committed to ensuring that your information is secure. In
            order to prevent unauthorised access or disclosure we have put in
            suitable measures.
          </span>
          <span style={{textAlign: "left"}}>
            <b>How we use cookies</b>
          </span>
          <span style={{textAlign: "left"}}>
            A cookie is a small file which asks permission to be placed on your
            computer's hard drive. Once you agree, the file is added and the
            cookie helps analyze web traffic or lets you know when you visit a
            particular site. Cookies allow web applications to respond to you as
            an individual. The web application can tailor its operations to your
            needs, likes and dislikes by gathering and remembering information
            about your preferences.
          </span>
          <span style={{textAlign: "left"}}>
            We use traffic log cookies to identify which pages are being used.
            This helps us analyze data about webpage traffic and improve our
            website in order to tailor it to customer needs. We only use this
            information for statistical analysis purposes and then the data is
            removed from the system.
          </span>
          <span style={{textAlign: "left"}}>
            Overall, cookies help us provide you with a better website, by
            enabling us to monitor which pages you find useful and which you do
            not. A cookie in no way gives us access to your computer or any
            information about you, other than the data you choose to share with
            us.
          </span>
          <span style={{textAlign: "left"}}>
            You can choose to accept or decline cookies. Most web browsers
            automatically accept cookies, but you can usually modify your
            browser setting to decline cookies if you prefer. This may prevent
            you from taking full advantage of the website.
          </span>
          <span style={{textAlign: "left"}}>
            <b>Controlling your personal information</b>
          </span>
          <span style={{textAlign: "left"}}>
            You may choose to restrict the collection or use of your personal
            information in the following ways:
          </span>
          <ul style={{textAlign: "left"}}>
            <li>
              whenever you are asked to fill in a form on the website, look for
              the box that you can click to indicate that you do not want the
              information to be used by anybody for direct marketing purposes
            </li>
          </ul>
          <ul style={{textAlign: "left"}}>
            <li>
              if you have previously agreed to us using your personal
              information for direct marketing purposes, you may change your
              mind at any time by writing to or emailing us at
              composit2024.iitkgp@gmail.com
            </li>
          </ul>
          <span style={{textAlign: "left"}}>
            We will not sell, distribute or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties which we think you may
            find interesting if you tell us that you wish this to happen.
          </span>
          <span style={{textAlign: "left"}}>
            If you believe that any information we are holding on you is
            incorrect or incomplete, please write to Metallurgical and Materials
            Engineering Department, IIT Kharagpur West Midnapore WEST BENGAL
            721302. or contact us at <b>8171783377</b> or <b>composit2024.iitkgp@gmail.com</b>
            as soon as possible. We will promptly correct any information found
            to be incorrect.
          </span>
        </div>
      </div>
    );
  }
}

export default MainBanner;
