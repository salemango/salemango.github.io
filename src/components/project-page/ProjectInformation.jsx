import styles from '../../styles/ProjectPage.module.css';

function ProjectInformation({ date, technologies, link}) {
    return (
        <section className={styles['project-information']}>
            <p><span>Date of Creation:</span> {date}</p>
            <p><span>Technologies Used:</span></p>
            
            <ul className={styles['technologies-list']}>
                {technologies.map((technology, index) => (
                    <li key={index} className={styles[technology.type]}>{technology.name}</li>
                ))}
            </ul>

            <p><a href={link}><span>Project Link</span></a></p>
        </section>
    )
}

export default ProjectInformation;