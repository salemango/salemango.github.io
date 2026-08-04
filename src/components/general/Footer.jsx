import GithubLogo from '../../assets/icons/github.svg';
import LinkedInLogo from '../../assets/icons/linked-in.png';
import HandshakeLogo from '../../assets/icons/handshake.webp' 

import FadeInText from './FadeInText';

function Footer() {

    const date = "7/31/2026";

    return(
        <footer>
            <div className="contact-info">
                <h2>👋 <FadeInText text="Contact Me"/></h2>
                <div className="footer-grid">
                    <a href="https://github.com/salemango"><img src={GithubLogo} alt="GitHub logo"></img></a>
                    <a href="https://www.linkedin.com/in/salem-mangum/"><img src={LinkedInLogo} alt="LinkedIn logo"></img></a>
                    <a href="https://app.joinhandshake.com/profiles/sarahmangum"><img src={HandshakeLogo} alt="Handshake logo"></img></a>
                </div>
                <button className="email-button">
                    <a href="mailto:salemmangum@gmail.com">Send me an email!</a>
                </button>
            </div>

            <div className='copyright-info'>
                <p>&#169; Sarah Mangum, 2026</p>
                <p>This site was last updated on {date}.</p>
            </div>
        </footer>
    )
}

export default Footer;