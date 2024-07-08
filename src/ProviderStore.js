import React, {createContext, useState} from "react";
import * as SOCIAL from './constant/socials'

export const StoreContext = createContext({})

const ProviderStore = ({children}) => {
    const [social, changeSocial] = useState(SOCIAL.Facebook)

    return (
        <StoreContext.Provider value={{
            social,
            changeSocial,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default ProviderStore