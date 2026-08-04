import styles from '../../styles/ProjectPage.module.css';
import { useSnapCarousel } from 'react-snap-carousel';


function CarouselScroll( {images} ) {
    const { scrollRef, snapPointIndexes, prev, next, pages, goTo, activePageIndex } = useSnapCarousel();
    
    return (
        <section className={styles['carousel-wrapper']} aria-label="Project image carousel" >

            <div className={styles['carousel-inner']} ref={scrollRef}>
                {images.map((image, index) => (
                    <img 
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        id={`image-${index + 1}`}
                        style={{scrollSnapAlign: snapPointIndexes.has(index) ? "start" : " "}}
                    />
                ))}
            </div>

            <div className={styles['carousel-nav-buttons']}>
                <button 
                    className={`${styles['left-button']} ${styles['carousel-button']}`}
                    onClick={() => prev()}
                >&larr;</button>

                {pages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={
                            activePageIndex === index ? 
                            `${styles['carousel-button-active']} ${styles['carousel-button']} ${styles['carousel-number-button']}`
                            : `${styles['carousel-button']} ${styles['carousel-number-button']}`
                        }
                    >{index + 1}</button> 
                ))}

                <button 
                    className={`${styles['right-button']} ${styles['carousel-button']}`}
                    onClick={() => next()}
                >&rarr;</button>
            </div>          
        </section>
    )
}

export default CarouselScroll;