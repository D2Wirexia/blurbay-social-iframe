import React, { useId } from 'react'
import {ReactComponent as CheckmarkIcon} from "../../assets/icon/chackmark.svg";
import styles from './Checkbox.module.css'

const Checkbox = ({ label, ...props }) => {
  const id = useId()

  return (
    <div className={styles.container}>
      <input className={styles.input} type="checkbox" {...props} id={id} />
      <label className={styles.label} htmlFor={id}>
        <CheckmarkIcon className={styles.checkmark} />
        {label && <span className={styles.name}>{label}</span>}
      </label>
    </div>
  )
}

export default Checkbox
