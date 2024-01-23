import React from "react";
import "./PageThree.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function PageThree() {
    return (
        <div className="PageThree">
            <div className="wrapp">
             <div className="five wrap">
            <h2>Blog with the Best</h2>
            <br />
            <p>
            Create a blog on Squarespace, home to the world's most 
            interesting and creative storytellers.
            </p>
            </div>
            <p4 ><div className="pt-5">CREATE A WEBSITE</div></p4>
            <br />
            <div >
         <Container>
            <Row>
            <Col>
             <img src={require ('./img/pic5.jpg')} alt="YASSMIN ABDEL-MAGIED" className="pic" />
             <div className="name">YASSMIN ABDEL-MAGIED</div>
            </Col>
            <Col>
             <img src={require ('./img/pic6.jpg')} alt="SHE DOES HIM"  className="pic" />
             <div className="name">SHE DOES HIM</div>
             </Col>
            <Col> 
            <img src={require ('./img/pic7.jpg')} alt="LEE FROM AMERICA"  className="pic" />
            <div className="name">LEE FROM AMERICA</div>
            </Col>
           </Row>
          
            <Row className="pt-5">
           <Col>
             <img src={require ('./img/pic8.jpg')} alt="SCANDINAVIALIST" className="pic" />
             <div className="name">SCANDINAVIALIST</div>
            </Col>
            <Col>
             <img src={require ('./img/pic9.jpg')} alt="BLACK GIRL IN OM"  className="pic" />
             <div className="name">BLACK GIRL IN OM</div>
             </Col>
            <Col> 
            <img src={require ('./img/pic10.jpg')} alt="HOTEL WEEKEND"  className="pic" />
            <div className="name">HOTEL WEEKEND</div>
            </Col>
           </Row>
         </Container>
         </div>
         </div>
         <br />
         <br />
         <br />
         </div>
        
         
    )
}