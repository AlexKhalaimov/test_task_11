import React from 'react';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'
import BottomNav from './bottom.nav'
import FooterSocial from "./footer.social.jsx"
import FooterPayments from "./footer.payments.jsx"
import FooterApps from "./footer.apps.jsx";
import FooterTopNav from "./footer.topnav"
import Col from 'react-bootstrap/Col'

const FooterGrid = () => {
  return (
    <Container>
        <Row className={'py-4'}>
            <Col md={9}>
                <FooterTopNav></FooterTopNav>
            </Col>
            <Col md={3}>
                <FooterApps></FooterApps>
            </Col>
        </Row>
     <Row className={'py-4'}>
        <Col md={9}>
            <BottomNav></BottomNav>
        </Col>
         <Col md={3} className={'flex-row d-flex align-items-center column-gap-4'}>
             <FooterPayments></FooterPayments>
             <FooterSocial></FooterSocial>
         </Col>
     </Row>
    </Container>
  );
}

export default FooterGrid;
