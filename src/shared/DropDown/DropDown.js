import React, {useCallback} from "react";
import styles from './DropDown.module.css';
import {Label} from "../Label";
import Select from "react-dropdown-select";
import { ReactComponent as DownArrowIcon } from "../../assets/icon/down-arrow.svg";

const DropDown = ({ label, onChange, value, options }) => {

    const handleChange = (values) => {
        onChange(values.map((v) => v.value))
    }

    const customContentRenderer = useCallback(() => {
        return <div className={styles.content}>{value}</div>
    }, [value])

    const customItemRender = useCallback(({item, methods}) => {
        return <div className={styles.option} onClick={() => methods.addItem(item)}>{item.label}</div>
    }, [])

    const customClearRenderer = useCallback(() => {
        return <></>
    }, [])

    const customDropdownHandleRenderer = useCallback(({state}) => {
        return state.dropdown ? <DownArrowIcon className={styles.topIcon} /> : <DownArrowIcon className={styles.downIcon} />
    }, [])

    return (
        <div className={styles.container}>
            <Label>{label}</Label>
            <Select
                values={[value]}
                options={options}
                onChange={handleChange}
                contentRenderer={customContentRenderer}
                itemRenderer={customItemRender}
                clearRenderer={customClearRenderer}
                dropdownHandleRenderer={customDropdownHandleRenderer}
                clearable
            />
        </div>
    )
}

export default DropDown