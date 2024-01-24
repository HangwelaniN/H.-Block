import React from "react";
import "./PageTwo.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVimeo } from '@fortawesome/free-brands-svg-icons'


export default function LastPage(){
    return(
        <div className="LastPage">
    <Container>
      <Row >
        <Col className="m-5">
        PRODUCTS
        <div><FontAwesomeIcon icon={faAngleDown} size="2xl" className="ice" /></div>
        </Col>
        <Col className="m-3">
        CUSTOMERS
         <div><FontAwesomeIcon icon={faAngleDown} size="2xl" className="ice" /></div>
        </Col>
        <Col className="m-5">
        COMPANY
         <div><FontAwesomeIcon icon={faAngleDown} size="2xl" className="ice" /></div>
        </Col>
        <Row>
        <Col>
        COMMUNITY
         <div><FontAwesomeIcon icon={faAngleDown} size="2xl" className="ice" /></div>
        </Col>
        <Col className="m-5">
        <FontAwesomeIcon icon={faFacebook}  size="xl"   className="ic m-1 mx-3"/>
        <FontAwesomeIcon icon={faInstagram}   size="xl" className="ic m-1 mx-3" />
        <FontAwesomeIcon icon={faTwitter}   size="xl"  className="ic m-1 mx-3"/>
        <FontAwesomeIcon icon={faVimeo}   size="xl"  className=" ic m-1  mx-3"/>
        </Col>
      </Row>
      </Row>
    </Container>
        </div>
    )

};