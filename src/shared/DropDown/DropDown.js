import React, {useCallback, useMemo} from "react";
import styles from './DropDown.module.css';
import {Label} from "../Label";
import Select from "react-dropdown-select";
import {ReactComponent as DownArrowIcon} from "../../assets/icon/down-arrow.svg";
import * as ENGAGEMENT_RATE from '../../constant/engagement-rate'
import SocialButton from "../SocialButton/SocialButton";

const DropDown = ({label, onChange, value, options}) => {

    const handleChange = useCallback((values) => {
        if (values.length && typeof values[0].value === 'string') {
            onChange(values[0].value)
        }
    }, [onChange])

    const transformedOptions = useMemo(() => {
        return options.map(opt => ({
            value: opt,
            label: opt,
        }))
    }, [options])

    const customContentRenderer = useCallback(() => {
        if (label === 'Engagement rate') {
            return <div className={styles.content}>{ENGAGEMENT_RATE.Rate[value]} <span>({value})</span></div>
        }
        return <div className={styles.content}>{value}</div>
    }, [value, label])

    const customClearRenderer = useCallback(() => {
        return <></>
    }, [])

    const customDropdownHandleRenderer = useCallback(() => {
        return <DownArrowIcon className={styles.arrowIcon}/>
    }, [])

    const customDropdownRenderer = useCallback(({props, methods}) => {
        return <div className={styles.list}>
            {props.options.map(opt => {
                if (label === 'Platform') {
                    return <SocialButton key={opt.value}
                                         type={opt.value}
                                         onClick={() => methods.addItem(opt)}/>
                }
                return (
                    <div key={opt.value}
                         className={styles.option}
                         onClick={() => methods.addItem(opt)}>{opt.label}</div>
                )
            })}
        </div>
    }, [label])

    return (
        <div className={styles.container}>
            <Label>{label}</Label>
            <Select
                className={styles.blurbaySelect}
                values={[value]}
                options={transformedOptions}
                onChange={handleChange}
                contentRenderer={customContentRenderer}
                clearRenderer={customClearRenderer}
                dropdownHandleRenderer={customDropdownHandleRenderer}
                dropdownRenderer={customDropdownRenderer}
                clearable
            />
        </div>
    )
}

export default DropDown