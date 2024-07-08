import React, {useCallback, useRef} from "react";
import styles from './Input.module.css';
import {Label} from "../Label";

const Input = ({ label, action, onChange, ...props }) => {
    const inputRef = useRef(null)

    const handleChange = useCallback((e) => {
        onChange(e.target.value)
    }, [onChange])

    const handleFocus = useCallback(() => {
        inputRef.current?.focus()
    }, [inputRef.current])

    return (
        <div className={styles.container}>
            <Label>{label}</Label>
            <div className={styles.inputContainer} onClick={handleFocus}>
                <input ref={inputRef} className={styles.input} onChange={handleChange} {...props} />
                {!!action && (
                    <div className={styles.actionContainer}>{action}</div>
                )}
            </div>
        </div>
    )
}

export default Input