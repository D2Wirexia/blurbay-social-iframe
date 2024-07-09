import React, {useContext} from 'react'
import styles from './Form.module.css'
import Input from "../../shared/Input/Input";
import {StoreContext} from "../../ProviderStore";
import DropDown from "../../shared/DropDown/DropDown";
import * as ENGAGEMENT_RATE from "../../constant/engagement-rate";
import * as SOCIALS from "../../constant/socials";
import {Label} from "../../shared";
import {ReactComponent as ArrowIcon} from "../../assets/icon/arrow.svg";
import {AdvancedForm} from "../AdvancedForm";

const Form = () => {
    const {
        social,
        changeSocial,
        contentViews,
        changeContentViews,
        engagementRate,
        changeEngagementRate,
        showAdvancedForm,
        setShowAdvancedForm,
    } = useContext(StoreContext)

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.socialContainer}>
                    <DropDown label='Platform' value={social} onChange={changeSocial}
                              options={SOCIALS.Socials}/>
                </div>
                <Input label='Content views' type='number' min={1} step={1} value={contentViews}
                       onChange={changeContentViews}/>
                <DropDown label='Engagement rate' value={engagementRate} onChange={changeEngagementRate}
                          options={[ENGAGEMENT_RATE.Low, ENGAGEMENT_RATE.Average, ENGAGEMENT_RATE.High]}/>
            </div>
            <div className={styles.earningContainer}>
                <Label>You should be earning:</Label>
                <div className={styles.price}>
                    <h4>$2,500-$3,000</h4>
                    <span>/ month</span>
                </div>
            </div>
            <Label>This is a rough estimate. However, we can give you a more detailed report, if you give us some
                additional details below.</Label>
            {!showAdvancedForm && (
                <div className={styles.btn} onClick={() => setShowAdvancedForm(true)}>
                    <div>Advanced reporting</div>
                    <ArrowIcon/>
                </div>
            )}
            {showAdvancedForm && <AdvancedForm/>}
        </div>
    )
}

export default Form