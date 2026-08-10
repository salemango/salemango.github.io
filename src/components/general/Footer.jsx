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
                    <a href="https://github.com/salemango" target="_blank" rel="noopener noreferrer"><img src={GithubLogo} alt="GitHub logo"></img></a>
                    <a href="https://www.linkedin.com/in/salem-mangum/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="LinkedIn logo"></img></a>
                    <a href="https://app.joinhandshake.com/profiles/sarahmangum" target="_blank" rel="noopener noreferrer"><img src={HandshakeLogo} alt="Handshake logo"></img></a>
                </div>
                
                <a className="email-button" href="mailto:salemmangum@gmail.com" target="_blank" rel="noopener noreferrer">Send me an email!</a>
            </div>

            <div className='copyright-info'>
                <p>&#169; Sarah Mangum, 2026</p>
                <p>This site was last updated on {date}.</p>
            </div>
        </footer>
    )
}

export default Footer;