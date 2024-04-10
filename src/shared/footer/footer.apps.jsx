import Nav from 'react-bootstrap/Nav'
import React from "react";
import appstore_icon from '../../assets/app-store.svg'
import playmarket_icon from '../../assets/google-play.svg'
import styles from './Footer.module.css'
const FooterApps = () => {
    return (
        <Nav className={styles['footer__apps']}>
            <h3>Мобільні застосунки</h3>
            <Nav.Item className={styles['footer__app']}>
                <Nav.Link className={styles['footer__app-link']}  href="/home">
                    <img src={playmarket_icon} alt="playmarket logo"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles['footer__app']}>
                <Nav.Link className={styles['footer__app-link']} href="/home">
                    <img src={appstore_icon} alt="appstore logo"/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default FooterApps
