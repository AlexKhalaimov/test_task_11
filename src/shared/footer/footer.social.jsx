import React from 'react';
import Nav from 'react-bootstrap/Nav'
import fb_icon from '../../assets/facebook_black.svg';
import tw_icon from '../../assets/twitter_black.svg';
import instagram_icon from '../../assets/instagram.svg';
import youtube_icon from '../../assets/youtube_black.svg';
import styles from './Footer.module.css'
const FooterSocial = () => {
    return (
        <Nav className='footer__social-nav column-gap-1'>
            <Nav.Item>
                <Nav.Link className={styles['footer__social-link']} href="/home">
                    <img src={fb_icon} alt="facebook logo" />
                </Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link className={styles['footer__social-link']} href="link-1">
                    <img src={tw_icon} alt="twitter logo"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link className={styles['footer__social-link']} href="link-2">
                    <img src={instagram_icon} alt="instagram logo"/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item >
                <Nav.Link className={styles['footer__social-link']} href="link-3">
                    <img src={youtube_icon} alt="youtube logo"/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default FooterSocial
