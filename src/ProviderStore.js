import React, {createContext, useCallback, useEffect, useState} from "react";
import * as SOCIAL from './constant/socials'
import * as CONTENT_CATEGORY from './constant/content-category'
import * as ENGAGEMENT_RATE from './constant/engagement-rate'
import api from "./api";

export const StoreContext = createContext({})

const ProviderStore = ({children}) => {
    const [social, changeSocial] = useState(SOCIAL.Facebook)
    const [contentViews, changeContentViews] = useState('1000')
    const [engagementRate, changeEngagementRate] = useState(ENGAGEMENT_RATE.Average)
    const [showAdvancedForm, setShowAdvancedForm] = useState(false)
    const [contentCategory, changeContentCategory] = useState(CONTENT_CATEGORY.MakingMoneyOnline)
    const [accountLink, changeAccountLink] = useState('')
    const [email, changeEmail] = useState('')
    const [isSendEdc, changeIsSendEdc] = useState(true)
    const [isSending, setIsSending] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const { accountLink, ...rest } = errors
        setErrors(rest)
    }, [accountLink])

    useEffect(() => {
        const { email, ...rest } = errors
        setErrors(rest)
    }, [email])

    const resetForm = useCallback(() => {
        changeSocial(SOCIAL.Facebook)
        changeContentViews('1000')
        changeEngagementRate(ENGAGEMENT_RATE.Average)
        changeContentCategory(CONTENT_CATEGORY.MakingMoneyOnline)
        changeAccountLink('')
        changeEmail('')
        changeIsSendEdc(true)
    }, [])

    const handleSubmit = useCallback(async () => {
        setIsSending(true)
        try {
            const res = await api.sendMail({
                social,
                contentViews,
                engagementRate,
                contentCategory,
                accountLink,
                email,
                isSendEdc,
            })
            if (res.status === 204) {
                resetForm()
                alert('Your data has been sent successfully!')
                return
            }
            if (res.status === 422) {
                const body = await res.json()
                setErrors(body.errors)
            } else {
                throw new Error()
            }
        } catch (e) {
            alert('Something went wrong\n' +
                'Sorry but we couldn\'t receive a correct response from the server')
        } finally {
            setIsSending(false)
        }
    }, [social, contentViews, engagementRate, contentCategory, accountLink, email, isSendEdc, resetForm])

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
            isSendEdc,
            changeIsSendEdc,
            handleSubmit,
            isSending,
            errors,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default ProviderStore