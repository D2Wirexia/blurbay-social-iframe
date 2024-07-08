import React, {useCallback, useRef} from "react";
import styles from './Input.module.css';
import {Label} from "../Label";

const Input = ({ label, action, onChange, type, ...props }) => {
    const inputRef = useRef(null)

    const handleChange = useCallback((e) => {
        if (type === 'number') {
            e.target.value = e.target.value.replace(/\D/g, '')
            if (+e.target.value === 0) {
                e.target.value = ''
            }
        }
        onChange(e.target.value)
    }, [onChange, type])

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