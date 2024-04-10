import Nav from 'react-bootstrap/Nav'
import React from "react"
import styles from "./Footer.module.css";

const FooterTopNav = () => {
    return(
        <div className={'d-flex column-gap-5'}>
            <Nav className={'d-flex flex-column align-items-start'} >
                <h3 className={styles['footer__title']}>Prometheus</h3>
                <Nav.Item >
                    <Nav.Link   href="/home">Про нас</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav className={'d-flex flex-column align-items-start'}>
                <h3 className={styles['footer__title']}>Prometheus+</h3>
                <Nav.Item >
                    <Nav.Link   href="/home">Корпоративне навчання</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/home">Співпраця</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default FooterTopNav
