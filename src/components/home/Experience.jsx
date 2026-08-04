import styles from '../../styles/Homepage.module.css';
import FadeInText from '../general/FadeInText';

function Experience() {
    return(
        <section className={styles.section}>
            <h2>📖 <FadeInText text="Experience"/></h2>

            <ul>
                <li>Currently completing an Applied Science of Web Development degree at Wake Technical Community College. </li>
                <li>Developed interactive applications utilizing fundamental technologies like HTML, CSS, and JavaScript, as well as modern JavaScript frameworks such as React and Vue.</li>
                <li>Built and tested server-side applications, APIs, and database driven solutions using modern development frameworks including REST and the MERN stack.</li>
                <li>Developed and maintained databases using SQL and relational database design principles.</li>
                <li>Solved technical and creative challenges through research, iteration, and user centered thinking with the help of industry standard tools such as Figma.</li>
                <li>Studied the fundamentals of graphic design and utilized industry standard design tools to create digital graphics, marketing materials, and UI assets.</li>
            </ul>
        </section>
    )
}

export default Experience;