import React, {useContext} from 'react'
import styles from './Form.module.css'
import Input from "../../shared/Input/Input";
import {StoreContext} from "../../ProviderStore";
import DropDown from "../../shared/DropDown/DropDown";
import * as ENGAGEMENT_RATE from "../../constant/engagement-rate";

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
                <Input label='Content views' type='number' min={1} step={1} value={contentViews}
                       onChange={changeContentViews}/>
                <DropDown label='Engagement rate' value={engagementRate} onChange={changeEngagementRate}
                          options={[{
                              value: ENGAGEMENT_RATE.Low,
                              label: ENGAGEMENT_RATE.Low,
                          }, {
                              value: ENGAGEMENT_RATE.Average,
                              label: ENGAGEMENT_RATE.Average,
                          }, {
                              value: ENGAGEMENT_RATE.High,
                              label: ENGAGEMENT_RATE.High,
                          }]}/>
                {/*<DropDown label='Engagement rate' onChange={() => {}} action={<button onClick={(e) => {*/}
                {/*    e.stopPropagation()*/}
                {/*}*/}
                {/*}>Send</button>} />*/}
            </div>
        </div>
    )
}

export default Form