import { Link } from "@tanstack/react-router";
import { motion } from 'motion/react';
import styles from '../../styles/Portfolio.module.css';

function ProjectCard({question, image, alt, title, description, url}) {
    let responsiveImage;
  
    if (window.visualViewport.width < 720) {
        responsiveImage = image[0];
    } else if (window.visualViewport.width < 1200) {
        responsiveImage = image[1];
    } else if (window.visualViewport.width >= 1200) {
        responsiveImage = image[2];
    }
    
    return (
        <motion.section 
            className={styles.section}
            initial={{opacity: .5, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
        >
            <p className={styles['project-card-question']}>“<span>Can I build </span>{question}?”</p>

            <div className={styles["project-card-grid"]}>
                <img
                    src={responsiveImage}
                    alt={alt}
                    className={styles['project-image']}
                />
                <div className={styles["project-information"]}>
                    <p><span>{title}</span> is {description}</p>
                    <button className={styles["project-writeup-button"]}><Link to={url}>Project Write-Up</Link></button>
                </div>
            </div>
        </motion.section>
    )
}

export default ProjectCard;