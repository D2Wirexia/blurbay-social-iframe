import React from 'react'
import styles from './Form.module.css'
import Input from "../../shared/Input/Input";

const Form = () => {

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <Input label='Mark' onChange={() => {}} />
                <Input label='Mark' onChange={() => {}} action={<button onClick={(e) => {
                    e.stopPropagation()
                }
                }>Send</button>} />
            </div>
        </div>
    )
}

export default Form