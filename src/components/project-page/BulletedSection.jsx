import styles from '../../styles/ProjectPage.module.css';
import FadeInText from '../general/FadeInText';

function BulletedSection({heading, images, bullets, type}) {
    return (
        <section className={`${styles.section} ${styles[type]}`}>
            <h2 className={styles.h2}><FadeInText text={heading}/></h2>

            <div className={styles['section-images']}>
                {images && images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className={styles['section-image']}/>
                ))}
            </div>

            {bullets && 
                <ul className={styles['bullet-section']}>
                    {bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                    ))}
                </ul>
            }
            
        </section>
    )
}

export default BulletedSection;