import { useState } from 'react';

import MostPopular from '../MostPopular/MostPopular';
import styles from './Categories.module.css'


export default function Categories() {

    const [show, setShow] = useState(false);

    const showContent = () => {
        setShow(!show)
    }
    return (
        <>
        <nav className={styles["categories"]}>
            <ul type="none">
                <li onClick={showContent}>Popular</li>
                <li>New</li>
                <li>Highest discount</li>
            </ul>

        </nav>
         {show && <MostPopular/>}
         </>
    )
}