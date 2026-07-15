import React from "react"
import profile from "../images/profile-steph.jpg"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"  

function Info() {
    return (
        <div className="info">
            <img className="profilepic" src={profile} alt="profile-steph" />
            <p className="name">Stephanie Xue</p>
            <p className="role">Software Developer | PharmD </p>
            <p className="website">www.github.com/steph-xue</p>
            <div className="buttons">
                <a role="button" className="btn btn-light" href="mailto:stephaniexue3@gmail.com">
                    <img className="email-logo" src={email} alt="email-logo" />
                    Email
                </a>
                <a role="button" className="btn btn-linkedin" href="https://www.linkedin.com/in/stephxue/">
                    <img className="linkedin-logo" src={linkedin} alt="linkedin-logo" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Info;