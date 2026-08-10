import { Link } from "@tanstack/react-router";
import Typewriter from "../general/Typewriter";
import FadeInText from "../general/FadeInText";

import styles from '../../styles/Homepage.module.css';

import Nav from '../general/Nav';
import WDAHome from '../../assets/basics/wda-home.png';
import CTBHome from '../../assets/basics/ctb-filled-dark.png'
import ACSpread from '../../assets/basics/ac-spread.webp';


function Hero() {    
    
    return(
        <section className={styles.hero}>       
            <div className={styles['hero-grid']}>
                <header>
                    <Nav />
                    <h1><FadeInText text="Sarah Mangum"/></h1>
                    <p><Typewriter 
                        text={[
                            "Web developer",
                            "Web designer",
                            "Graphic designer",
                            "Artist"
                        ]}
                    /> from Wake Forest, NC</p>
                </header>
                
                <img src={WDAHome} alt="Homepage of the Weather Discovery App, designed by me"></img>
                <img src={CTBHome} alt="Homepage of the Character Builder App, designed by me"></img>
                <img src={ACSpread} alt="A spread of Artconnect app screens, designed by me"></img>

                <button className={styles['portfolio-button']}><Link to="/portfolio">My Portfolio →</Link></button>
            </div>                   
            
        </section>
    )
}

export default Hero;