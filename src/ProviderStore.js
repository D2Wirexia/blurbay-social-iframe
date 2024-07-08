import React, {createContext, useState} from "react";
import * as SOCIAL from './constant/socials'
import * as CONTENT_CATEGORY from './constant/content-category'
import * as ENGAGEMENT_RATE from './constant/engagement-rate'

export const StoreContext = createContext({})

const ProviderStore = ({children}) => {
    const [social, changeSocial] = useState(SOCIAL.Facebook)
    const [contentViews, changeContentViews] = useState('1000')
    const [engagementRate, changeEngagementRate] = useState(ENGAGEMENT_RATE.Average)
    const [showAdvancedForm, setShowAdvancedForm] = useState(false)
    const [contentCategory, changeContentCategory] = useState(CONTENT_CATEGORY.MakingMoneyOnline)
    const [accountLink, changeAccountLink] = useState('')
    const [email, changeEmail] = useState('')

    return (
        <StoreContext.Provider value={{
            social,
            changeSocial,
            contentViews,
            changeContentViews,
            engagementRate,
            changeEngagementRate,
            showAdvancedForm,
            setShowAdvancedForm,
            contentCategory,
            changeContentCategory,
            accountLink,
            changeAccountLink,
            email,
            changeEmail,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default ProviderStore