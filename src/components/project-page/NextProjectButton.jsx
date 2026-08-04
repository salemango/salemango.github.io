import styles from '../../styles/ProjectPage.module.css'

function NextProjectButton({url, nextName}) {
    return (
        <button className={styles['project-button']}>
            <a href={url}>Next Project - {nextName} &rarr;</a>
        </button>
    )
}

export default NextProjectButton;