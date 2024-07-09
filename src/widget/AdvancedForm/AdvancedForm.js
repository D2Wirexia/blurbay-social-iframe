import React, {useCallback, useContext} from "react";
import styles from './AdvancedForm.module.css'
import {StoreContext} from "../../ProviderStore";
import * as CONTENT_CATEGORY from "../../constant/content-category";
import * as SOCIALS from "../../constant/socials";
import {Input, DropDown} from "../../shared";
import Checkbox from "../../shared/Checkbox/Checkbox";

const AdvancedForm = () => {
    const {
        social,
        contentCategory,
        changeContentCategory,
        accountLink,
        changeAccountLink,
        email,
        changeEmail,
        isSendEdc,
        changeIsSendEdc,
    } = useContext(StoreContext)

    const handleSend = useCallback((e) => {
        e.stopPropagation()
    }, [])

    return (
        <div className={styles.advancedForm}>
            <div className={styles.line}/>
            <DropDown label='Content category' value={contentCategory} onChange={changeContentCategory}
                      options={CONTENT_CATEGORY.ContentCategory}/>
            <Input label='Link to your account' placeholder={`https://${SOCIALS.SocialLink[social]}/account`}
                   value={accountLink} onChange={changeAccountLink}/>
            <div className={styles.mailContainer}>
                <Input label='Enter your email to get a detailed report' placeholder='your@email.com' type='email'
                       value={email}
                       onChange={changeEmail}
                       action={<button onClick={handleSend} className={styles.buttonSend}>Send</button>}/>
                <Checkbox label='Send me an educational newsletter about monetizing my content' checked={isSendEdc}
                          onChange={(e) => changeIsSendEdc(e.target.checked)}/>

            </div>
        </div>
    )
}

export default AdvancedForm