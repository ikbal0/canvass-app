import Navbar from "../../component/nav";
import styles from "../../styles/Contact.module.scss"

export default function ContactPage() {
    return(
        <div className={styles.highlightscss}>
            <Navbar/>
            <h1>This is a Contact Page!</h1>
        </div>
    )
}