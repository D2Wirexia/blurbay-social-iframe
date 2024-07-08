import React from "react";
import styles from './NavBar.module.css'
import {Socials} from "../../constant/socials";
import {SocialButton} from "../../shared";

const NavBar = () => {

    return (
        <div className={styles.nav}>
            {Socials.map(social => (
                <SocialButton key={social} type={social} />
            ))}
        </div>
    )
}

export default NavBar