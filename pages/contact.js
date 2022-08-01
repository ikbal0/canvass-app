import Navbar from "../component/nav";
import styles from "../styles/Contact.module.css"

export default function ContactPage() {
    return(
        <div className={styles.highlight}>
            <Navbar/>
            <h1>This is a Contact Page!</h1>
        </div>
    )
}