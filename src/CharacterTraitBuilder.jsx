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

import Gif from './assets/basics/ctb-gif.gif';
import Home from './assets/basics/ctb-filled-dark.png';
import HomeLight from './assets/ctb/ctb-filled.png';
import Empty from './assets/ctb/ctb-home-dark.png';
import EmptyLight from './assets/ctb/ctb-home.png';



function CharacterTraitBuilder() {
    return(
        <main>
            <Nav extra="Character Trait Builder"/>

            <h1 className={styles.h1}><FadeInText text="Character Trait Builder"/></h1>

            <CarouselScroll 
                images={[
                    {src: Gif, alt: "A gif showing a user utilizing the various screens of the Character Trait Builder in light mode."},
                    {src: Home, alt: "A screenshot showing the Character Trait Builder in dark mode, with a list of character traits on the left and a user dashboard on the right."},
                    {src: HomeLight, alt: "The homepage in light mode."},
                    {src: Empty, alt: "A screenshot showing the homepage in dark mode with an empty dashboard on the right - the first thing a user will see upon opening the app."},
                    {src: EmptyLight, alt: "The empty homepage in light mode."}
                ]}    
            />

            <ProjectInformation 
                date="April 2025"
                technologies={[
                    {type: 'programming', name: 'Vue'},
                    {type: 'programming', name: 'JavaScript'},
                    {type: 'data', name: 'Custom JSON'},
                    {type: 'data', name: 'API Integration'},
                    {type: 'markup', name: 'HTML'},
                    {type: 'markup', name: 'CSS'}
                ]}
                link="https://salemango.github.io/character-trait-builder/"
            />

            <TextSection 
                heading="Overview"
                paragraphs={[
                    "This Character Trait Builder was designed to help writers, game masters, and other creatives quickly develop unique and compelling personalities for their projects. Built with Vue and powered by a custom JSON dataset, the application allows users to select from a wide range of character traits and instantly generate personality profiles that can serve as inspiration for stories, tabletop role-playing games, worldbuilding projects, and more.",
                    "By organizing large amounts of character data into an intuitive interface, I was able to create a solution that saves time while supporting creative workflows. The random generation feature further expands the tool's usefulness by helping users discover and explore personality combinations they may not have considered on their own."
                ]}
                type="overview"
            />

            <BulletedSection 
                heading="Features"
                bullets={[
                    "Personalize the experience with built-in light and dark themes, including automatic detection of the user's system preferences for a seamless and accessible viewing experience.",
                    "Navigate character traits through a color-coded interface that visually distinguishes positive, neutral, and negative personality characteristics, making information easier to understand at a glance.",
                    "Leverage custom JSON datasets and API integration to deliver dynamic, data-driven functionality without the complexity of a traditional backend, resulting in a lightweight and efficient application.",
                    "Track character development in real time through a dedicated dashboard that displays all currently selected personality traits in a clear, organized layout.",
                    "Generate instant inspiration with a one-click random personality generator that creates unique trait combinations for writing, worldbuilding, and tabletop role-playing projects.",
                    "Maintain full control over the creative process with tools to add, remove, or completely clear selected traits, allowing users to refine and iterate on character concepts quickly."
                ]}
                type="features"
            />

            <TextSection 
                heading="Retrospective"
                paragraphs={[
                    "This project was one of the more challenging applications I’ve built, since many of its aspects were new to me. Despite the complexity, I genuinely enjoyed the process of problem-solving and figuring out how each component fit within the larger system. The project strengthened both my development and design skills, and it remains one of the portfolio pieces I’m most proud of today. Looking ahead, I’m excited to revisit the concept, redesign portions of the experience, and expand its features into an even more robust tool for creators."
                ]}
                type="retrospective"
            />

            <NextProjectButton 
            url={"/portfolio/artconnect"}
            nextName={'Artconnect'}
            />

            <Footer />
        </main>
    )
}

export default CharacterTraitBuilder;