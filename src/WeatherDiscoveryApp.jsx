import './styles/App.css';
import styles from './styles/ProjectPage.module.css';

import Nav from './components/general/Nav';
import CarouselScroll from './components/project-page/CarouselScroll';
import ProjectInformation from './components/project-page/ProjectInformation';
import TextSection from './components/project-page/TextSection';
import BulletedSection from './components/project-page/BulletedSection';
import NextProjectButton from './components/project-page/NextProjectButton';
import Footer from './components/general/Footer'
import FadeInText from './components/general/FadeInText';


import Home from './assets/basics/wda-home.png';
import HomeDark from './assets/wda/home-alt.png';
import Precip from './assets/wda/precip-graph.png';
import Temp from './assets/wda/temp-graph.png';
import Overview from './assets/wda/7dayprediction.png';

function WeatherDiscoveryApp() {
    return(
        <main>
            <Nav extra="Weather Discovery App"/>

            <h1 className={styles.h1}><FadeInText text="Weather Discovery App"/></h1>

            <CarouselScroll 
                images={[                    
                    {src: Home, alt: "The Weather Discovery App's homepage, showing the time, date, temperature, and more information."},
                    {src: HomeDark, alt: "A dark mode version of the homepage, visible at night or when a user toggles it on."},
                    {src: Precip, alt: "A graph of recent precipitation in the location."},
                    {src: Temp, alt: "A graph of recent temperature changes in the location."},
                    {src: Overview, alt: "A short overview of the forecasts for the next 7 days in the location."}
                ]}    
            />
      
            <ProjectInformation 
                date="May 2025"
                technologies={[
                    {type: 'programming', name: 'Vue'},
                    {type: 'programming', name: 'JavaScript'},
                    {type: 'data', name: 'OpenWeatherAPI'},
                    {type: 'data', name: 'API Integration'},
                    {type: 'markup', name: 'HTML'},
                    {type: 'markup', name: 'CSS'},
                    {type: 'design', name: 'Figma'}
                ]}
                link="https://salemango.github.io/weather-discovery-app/"
            />

            <TextSection 
                heading="Overview"
                paragraphs={[
                    "This weather application was developed as a capstone project for a college course focused on JavaScript frameworks. Built with Vue and integrated with the OpenWeather API, the project allows users to quickly access accurate weather information for locations around the world through a clean, intuitive interface. The application emphasizes responsive design, efficient performance, and a seamless user experience."
                ]}
                type="overview"
            />

            <BulletedSection 
                heading="Features"
                bullets={[
                    "Search for current weather conditions in any city or region through an intuitive search interface powered by OpenWeather API integration.",
                    "View key weather metrics at a glance, including temperature, humidity, wind conditions, sunrise and sunset times, and other essential forecasting data.",
                    "Analyze temperature trends and precipitation forecasts through interactive, easy-to-read data visualizations and graphs.",
                    "Save previously searched locations for quick access, making it easy to revisit frequently monitored destinations without repeated searches.",
                    "Experience a dynamic user interface that automatically adapts to daytime and nighttime conditions, creating a more immersive and context-aware experience.",
                    "Access a comprehensive 7-day forecast overview to help plan ahead with upcoming weather conditions, temperature changes, and precipitation expectations."
                ]}
                type="features"
            />

            <TextSection 
                heading="Retrospective"
                paragraphs={[
                    "This weather application combined several areas that I am passionate about: problem-solving, user-centered design, and learning new technologies. As one of my first experiences working with API integration, the project introduced me to the challenge of retrieving, processing, and presenting real-world data in a meaningful way."
                ]}
                type="retrospective"
            />

            <NextProjectButton 
            url={"/portfolio/character-trait-builder"}
            nextName={'Character Trait Builder'}
            />

            <Footer />
        </main>
    )
}

export default WeatherDiscoveryApp;