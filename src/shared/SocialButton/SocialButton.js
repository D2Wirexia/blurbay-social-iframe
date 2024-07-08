import React, {useCallback, useContext} from "react";
import styles from './SocialButton.module.css';
import * as SOCIAL from '../../constant/socials';
import {StoreContext} from "../../ProviderStore";
import { ReactComponent as SparkIcon } from "../../assets/icon/spark.svg";

const SocialButton = ({type}) => {
    const { social, changeSocial } = useContext(StoreContext)

    const handleClick = useCallback(() => {
        changeSocial(type)
    }, [type, changeSocial])

    if (type === SOCIAL.Blurbay) {
        return (
            <button className={styles.sparkContainer}
                    onClick={handleClick}
                    disabled={social === type}>
                <div className={styles.gradientLabel}>{type}</div>
                <SparkIcon className={styles.sparkIcon1} />
                <SparkIcon className={styles.sparkIcon2} />
                <SparkIcon className={styles.sparkIcon3} />
            </button>
        )
    }
    return (
        <button className={styles.container}
                onClick={handleClick}
                disabled={social === type}>
            {type}
        </button>
    )
}

export default SocialButton