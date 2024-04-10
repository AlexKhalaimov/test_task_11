import React from "react"
import styles from './Footer.module.css'
import mastercard_icon from '../../assets/mastercard-logo.svg'
import visa_icon from '../../assets/visa-logo.svg'

const FooterPayments = () => {
    return (
        <ul className={styles['footer__payments']}>
            <li>
                <img src={mastercard_icon} alt="mastercard logo"/>
            </li>
            <li>
                <img src={visa_icon} alt="visa logo"/>
            </li>
        </ul>
    )
}
export default FooterPayments
