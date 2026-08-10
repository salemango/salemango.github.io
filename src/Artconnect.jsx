import './styles/App.css';
import styles from './styles/ProjectPage.module.css';

import Nav from './components/general/Nav';
import CarouselScroll from './components/project-page/CarouselScroll';
import ProjectInformation from './components/project-page/ProjectInformation';
import TextSection from './components/project-page/TextSection';
import BulletedSection from './components/project-page/BulletedSection';
import NextProjectButton from './components/project-page/NextProjectButton';
import Footer from './components/general/Footer';
import FadeInText from './components/general/FadeInText';

import Spread1 from './assets/basics/ac-spread-1.png';
import Spread2 from './assets/ac/ac-spread-2.png';
import Spread3 from './assets/ac/ac-spread-3.png';

function Artconnect() {
    return(
        <main>
            <Nav extra="Artconnect"/>

            <h1 className={styles.h1}><FadeInText text="Artconnect"/></h1>

            <CarouselScroll 
                images={[
                    {src: Spread1, alt: "Second image"},
                    {src: Spread2, alt: "Third image"},
                    {src: Spread3, alt: "Fourth image"},
                ]}    
            />

            <ProjectInformation 
                date="November 2024"
                technologies={[
                    {type: 'design', name: 'Figma Prototyping'},
                    {type: 'design', name: 'Figma'}
                ]}
                link="https://www.figma.com/proto/i5xG5iO3fktWPGotFBDmSN/Artconnect-HiFi-Prototype?node-id=3001-265&starting-point-node-id=3001%3A265&t=hVfzIYuz8V4JXA8d-1"
            />

            <TextSection 
                heading="Overview"
                paragraphs={[
                    "This project is a high-fidelity mobile app prototype created in Figma to support local artists through networking, community building, and art sales. Users can browse nearby artwork and exhibitions, discover artists within their area, commission creative work, and build connections through personalized profiles and chat functionality. Interactive navigation between screens provides a realistic representation of the final product experience."
                ]}
                type="overview"
            />

            <BulletedSection 
                heading="Features"
                bullets={[
                    "Create and access accounts through dedicated sign-up and login screens designed to support a seamless onboarding experience for both artists and community members.",
                    "Explore detailed user profiles showcasing artist information, including name, location, artwork collections, biography, contact options, and creative specialties.",
                    "Discover artwork available for sale or on display nearby with powerful browsing and filtering tools that allow users to search by distance, title, creator, medium, and other relevant criteria.",
                    "Save favorite pieces to personalized galleries, enabling users to build inspiration boards, curate collections, or create shopping lists for future purchases and commissions.",
                    "View comprehensive artwork pages featuring important details such as title, description, artist information, creation date, pricing, media type, and availability status.",
                    "Support multiple sales models through built-in marketplace functionality, allowing artists to offer work through direct flat-price purchases or competitive auction-based listings."
                ]}
                type="features"
            />

            <TextSection 
                heading="Retrospective"
                paragraphs={[
                    "Creating a high-fidelity mobile prototype entirely in Figma was a new experience for me and pushed me to think differently about user flows, interface design, and interactive experiences. While there was a learning curve, I thoroughly enjoyed the process of bringing an idea to life through detailed screens and realistic navigation. The project strengthened my understanding of user-centered design and demonstrated how thoughtful planning can shape a cohesive product experience before development even begins."
                ]}
                type="retrospective"
            />

            <NextProjectButton 
            url={"/portfolio/weather-discovery-app"}
            nextName={'Weather Discovery App'}
            />

            <Footer />
        </main>
    )
}

export default Artconnect;