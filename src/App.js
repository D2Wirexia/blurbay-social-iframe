import styles from './App.module.css';
import {NavBar, Form} from "./widget";
import React, {useContext} from "react";
import {StoreContext} from "./ProviderStore";
import {ReactComponent as ArrowIcon} from "./assets/icon/arrow.svg";

const App = () => {
    const {showAdvancedForm, setShowAdvancedForm} = useContext(StoreContext)

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Social media earnings calculator</h3>
            <div className={styles.mainContainer}>
                <NavBar/>
                <Form/>
            </div>
            {showAdvancedForm && (
                <div className={styles.collapse} onClick={() => setShowAdvancedForm(false)}>
                    <div>Collapse</div>
                    <ArrowIcon className={styles.arrowIcon}/>
                </div>
            )}
        </div>
    );
}

export default App;
