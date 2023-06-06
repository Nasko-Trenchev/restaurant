import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { CatchingPokemon } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './MostPopular.module.css'

export default function MostPopular() {

    return (
        
        <div className={styles["mostPopularContainer"]}>
            <div>
            <h3>Happy ресторанти</h3>
            <img src="https://rezzo.bg/assets/images/happy_bar_and_grill.jpg" alt="asd" />
            <div className={styles["rating"]}>Rating</div>
            <p>International</p>
            <p>Place</p>
            <p>Prize range</p>
            </div>
            <div>
            <h3>Burrata Italiana ресторанти</h3>
            <img src="https://rezzo.bg/assets/images/happy_bar_and_grill.jpg" alt="asd" />
            <p>International</p>
            <p>Place</p>
            <p>Prize range</p>
            </div>
            <div>
            <h3>Name</h3>
            <img src="https://rezzo.bg/assets/images/happy_bar_and_grill.jpg" alt="asd" />
            <p>International</p>
            <p>Place</p>
            <p>Prize range</p>
            </div>
            <div>
            <h3>Name</h3>
            <img src="https://rezzo.bg/assets/images/happy_bar_and_grill.jpg" alt="asd" />
            <p>International</p>
            <p>Place</p>
            <p>Prize range</p>
            </div>
            <div>
            <h3>Name</h3>
            <img src="https://rezzo.bg/assets/images/happy_bar_and_grill.jpg" alt="asd" />
            <p>International</p>
            <p>Place</p>
            <p>Prize range</p>
            </div>
            <div>
            <h3>Name</h3>
            <img src="https://rezzo.bg/assets/images/happy_bar_and_grill.jpg" alt="asd" />
            <p>International</p>
            <p>Place</p>
            <p>Prize range</p>
            </div>
        </div>
    )
}