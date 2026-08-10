import { useState, useEffect } from 'react';
import styles from '../../styles/Homepage.module.css';
import styles2 from '../../styles/Portfolio.module.css';

function Typewriter({ text, backspace = true }) {
        
    // state variables
    const [ index, setIndex ] = useState(0);
    const [ displayedText, setDisplayedText] = useState("");
    const [ isDeleting, setIsDeleting ] = useState(false);

    useEffect(() => {
        const textCycle = text;
        const currentPhrase = textCycle[index];

        let timeout;

        if (!isDeleting) { // text is being typed out
            if (displayedText.length < currentPhrase.length) { // actively typing
                const timer = setTimeout(() => {
                    setDisplayedText(
                        currentPhrase.slice(0, displayedText.length + 1)
                    );
                }, 80);

                return () => clearTimeout(timer);
            } else { // reached the end of the phrase, short pause before backspacing
                timeout = setTimeout(() => {
                    if (backspace) {
                        setIsDeleting(true);
                    }
                }, 1500);
            }
        } else { // text is being deleted
            if (displayedText.length > 0 ) { // text is actively being deleted
                timeout = setTimeout(() => {
                    setDisplayedText(
                        currentPhrase.slice(0, displayedText.length - 1)
                    )
                }, 40);
            } else { // text is fully gone, short pause before typing it out
                timeout = setTimeout(() => {
                    setIndex(
                        (prev) => (prev + 1) % textCycle.length
                    );
                    setIsDeleting(false);
                }, 250);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, text, backspace]);

    return(
        <span className={styles2['animated-text']} aria-live="polite" aria-atomic="true">
            {displayedText}
            <span className={styles.cursor} aria-hidden="true"></span>
        </span>
    )
}

export default Typewriter;
