import styles from '../../styles/Homepage.module.css';
import FadeInText from '../general/FadeInText';

function Skills() {
    const confident = ["HTML", "CSS", "JavaScript", "Figma", "JSON", "Relational databases", "API integration"];
    const developing = ["React", "Node.js", "MongoDB", "Express.js", "Non-relational databases", "Vue", "Adobe Photoshop", "Adobe Illustrator"];
    const learning = ["PHP", "ASP.NET", "C#", "WordPress", "Web CMS", "Network design"];
    
    return (        
        <section className={styles.section} id="skills">
            <h2>🧠 <FadeInText text="Skills"/></h2>

            <div className={styles['skill-group']}>
                <h3>🌻 Confident</h3>
                <ul>
                    {confident.map((confidentSkill) => (
                        <li key={confidentSkill}>{confidentSkill}</li>
                    ))}
                </ul>
            </div>

            <div className={styles['skill-group']}>
                <h3>🌿 Developing</h3>
                <ul>
                    {developing.map((developingSkill) => (
                        <li key={developingSkill}> {developingSkill} </li>
                    ))}
                </ul>
            </div>

            <div className={styles['skill-group']}>
                <h3>🌱 Learning</h3>
                <ul>
                    {learning.map((learningSkill) => (
                        <li key={learningSkill}>{learningSkill}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Skills;