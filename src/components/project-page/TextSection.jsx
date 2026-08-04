import styles from '../../styles/ProjectPage.module.css';
import FadeInText from '../general/FadeInText';

function TextSection({heading, images, paragraphs, type}) {
    return (
        <section className={`${styles.section} ${styles[type]}`}>
            <h2 className={styles.h2}><FadeInText text={heading}/></h2>
            
            <div className={styles['section-images']}>
                {images && images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className={styles['section-image']}/>
                ))}
            </div>

            {paragraphs && paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </section>
    )
}

export default TextSection;