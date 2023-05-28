
import styles from './NavigationHeader.module.css'

export default function NavigationHeader(){

    return (

        <header className={styles["navigationHeader"]}>
            <p>Title</p>
            <nav>
                <ul type='none'>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Register</li>
                </ul>
            </nav>
        </header>
    )
}