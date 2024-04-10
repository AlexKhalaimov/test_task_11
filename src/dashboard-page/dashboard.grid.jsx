import React from 'react'
import Header from './dashboard-header/header.grid'
import Footer from '../shared/footer/footer'
import CourseList from './courses.list.jsx'
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {CourseSearch} from "./course.search.jsx";
const DashboardGrid = ({user}) => {
    return (
        <>
            <Header user = {user}></Header>
            <main>
                <Container>
                    <Row className={'flex-column-reverse flex-lg-row row-gap-4 py-4'}>
                        <Col xs={12} lg={9}>
                            <CourseList></CourseList>
                        </Col>
                        <Col lg={3} xs={12}>
                            <CourseSearch></CourseSearch>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer></Footer>
        </>
    );
  }

  export default DashboardGrid;
