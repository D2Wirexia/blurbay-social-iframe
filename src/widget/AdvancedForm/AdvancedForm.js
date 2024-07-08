import React, {useContext} from "react";
import styles from './AdvancedForm.module.css'
import {StoreContext} from "../../ProviderStore";
import * as CONTENT_CATEGORY from "../../constant/content-category";
import * as SOCIALS from "../../constant/socials";
import {Input, DropDown} from "../../shared";

const AdvancedForm = () => {
    const {
        social,
        contentCategory,
        changeContentCategory,
        accountLink,
        changeAccountLink,
        email,
        changeEmail,
    } = useContext(StoreContext)

    return (
        <>
            <div className={styles.line} />
            <DropDown label='Content category' value={contentCategory} onChange={changeContentCategory}
                      options={CONTENT_CATEGORY.ContentCategory}/>
            <Input label='Link to your account' placeholder={`https://${SOCIALS.SocialLink[social]}/account`} value={accountLink} onChange={changeAccountLink} />
            <Input label='Enter your email to get a detailed report' placeholder='your@email.com' type='email' value={email}
                   onChange={changeEmail}
                   action={<button onClick={() => {}} className={styles.buttonSend}>Send</button>} />
        </>
    )
}

export default AdvancedForm