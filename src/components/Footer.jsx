import React from "react"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

function Footer() {
    return (
        <div className="footer-logos">
            <a href="https://x.com/StephXue" width="40px">
                <img src={twitter} alt="twitter-logo" />
            </a>
            <a href="https://www.facebook.com/totorosteph" >
                <img src={facebook} alt="facebook-logo" />
            </a>
            <a href="https://www.instagram.com/stephxue_/">
                <img src={instagram} alt="instagram-logo" />
            </a>
            <a href="https://github.com/steph-xue/">
                <img src={github} alt="github-logo" />
            </a>
        </div>
    );
}

export default Footer;
