import React from "react";
import "./PageThree.css"

export default function PageFour() {
    return (
        <div className="pageFour">
            <div className="six wrap">
            <img src={require ('./img/pic11.jpg')} alt="girl and guy"  className="photo" />
            <div className="sup">
                24/7 SUPPORT
            </div>
            <h6 className="head">Award-Winning,<div>Expert Customer </div>Care</h6>
            <p>
            Get personalized support from our Customer Care Team via email or live chat. 
            Customer Care Advisors are highly trained and work with Designers and
            Engineers in our New York City, Dublin, and Portland offices. They have deep 
            Squarespace knowledge and are ready to help whenever you need it.
             Reach out any time — we’re here 24/7.
            </p>
            <br />
            <div className="end"><div>Visit Our Help Center</div></div>
            <br />
            <div className="endd"><div>Contact Customer Care</div></div>
            <br />
            <div className="enddd"><div>Join a Webinar</div></div>
            </div>
        </div>
    )
}