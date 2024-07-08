import React, {useContext} from 'react'
import styles from './Form.module.css'
import Input from "../../shared/Input/Input";
import {StoreContext} from "../../ProviderStore";

const Form = () => {
    const {
        contentViews,
        changeContentViews,
        engagementRate,
        changeEngagementRate,
    } = useContext(StoreContext)

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <Input label='Content views' type='number' min={1} step={1} value={contentViews} onChange={changeContentViews} />
                <Input label='Engagement rate' value={engagementRate} onChange={changeEngagementRate} />
                {/*<Input label='Engagement rate' onChange={() => {}} action={<button onClick={(e) => {*/}
                {/*    e.stopPropagation()*/}
                {/*}*/}
                {/*}>Send</button>} />*/}
            </div>
        </div>
    )
}

export default Form