import styles from "./contactCard.module.css"
import 'primeicons/primeicons.css';

        

export default function ContactCard(props) {
    return (
        <div className={styles.contactCardContainer}>
            <p>{props.contactType}: <a href={props.contactLink}>{props.contactText}</a></p>
        </div>
    )
}