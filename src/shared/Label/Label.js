import React from 'react'
import styles from './Label.module.css'

const Label = ({children}) => {

    return (
        <div className={styles.label}>{children}</div>
    )
}

export default Label