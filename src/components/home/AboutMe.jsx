import styles from '../../styles/Homepage.module.css';
import FadeInText from '../general/FadeInText';

function AboutMe() {
    return(
        <section className={styles.section}>
            <h2>👤 <FadeInText text="About Me"/></h2>
            <p>I'm a multidisclipinary creative and technologist whose specialties include full-stack web development, front-end web design, and graphic arts and design. Currently, I'm a student at Wake Technical Community College, using the learning opportunity to continuously building my skills and exploring new ways to merge design thinking with modern web technologies. I'm energized by challenges, inspired by puzzles, and motivated by the belief that great design should always put people first. Every project is an opportunity to solve a puzzle and communicate ideas through the language of design.</p>
            <p>My favorite part of the creative process is getting to know the people behind each project. I enjoy learning about their goals, understanding their challenges, and crafting solutions through a combination of design and programming. When I'm away from my computer, you'll often find me making art, baking something, or exploring environmental conservation in my area. I'm committed to sustainability and strive to stay connected to the communities and ecosystems - both digital and natural - that shape our future.</p>
        </section>
    )
}

export default AboutMe;