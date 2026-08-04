import './styles/App.css';
import styles from './styles/Portfolio.module.css';

import Nav from './components/general/Nav';
import Footer from './components/general/Footer'
import ProjectCard from './components/portfolio/ProjectCard';

import WDAPhone from './assets/wda/wda-phone.png';
import CTBPhone from './assets/ctb/ctb-phone.png';
import ACPhone from './assets/ac/ac-phone.png';

import WDATablet from './assets/wda/wda-ipad.png';
import CTBTablet from './assets/ctb/ctb-ipad.png';
import ACTablet from './assets/ac/ac-tablet.png';

import WDAHome from './assets/basics/wda-home.png';
import CTBHome from './assets/basics/ctb-filled-dark.png';
import ACSpread from './assets/basics/ac-spread.webp';

function Portfolio() {
    return(
        <main>
            
            <header className={styles.header}>
                <Nav />
                <h1>Portfolio</h1>
            </header>

            <ProjectCard 
                question="a weather webapp that displays important information and updates based on the user's location"
                image={[WDAPhone, WDATablet, WDAHome]}
                alt="A preview of the Weather Discovery App's homepage"
                title="The Weather Discovery App" 
                description="an interactive, data-driven web app that uses Vue and the OpenWeather API to display weather information by location, including temperature, precipitation over time, and the week's upcoming forecast."
                url="/portfolio/weather-discovery-app"
            />

            <ProjectCard 
                question="a webapp that enables the user to quickly and easily generate a list of character traits"
                image={[CTBPhone, CTBTablet, CTBHome]} 
                title="The Character Trait Builder" 
                description="an interactive web app built with Vue and custom JSON data that provides a data set of character traits for users to select from, enabling rapid ideation for writing and story building purposes."
                url="/portfolio/character-trait-builder"
            />

            <ProjectCard 
                question="a prototype for an app that connects local artists with the community around them"
                image={[ACPhone, ACTablet, ACSpread]} 
                title="Artconnect" 
                description="the Figma prototype for a mobile app that displays local artists and their artwork so that users can support artists in their community and connect with creatives near them."
                url="/portfolio/artconnect"
            />

            <p className={styles.disclaimer}>
                This collection represents only a selection of my projects, chosen to best represent and summarize my skills. If you want to see more, <a href="#">find me on GitHub</a>.
            </p>

            <Footer />

        </main>
    )
}

export default Portfolio;