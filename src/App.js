import './apps.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour'
import LastPage from './LastPage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  return (
    <div className="App">
     <div className="Uns">
     <FontAwesomeIcon icon={faMobileScreen} />
     <FontAwesomeIcon icon={faMobileScreen} rotation={90} className='px-5 mx-2'/>
      </div>
      <Container>
      <Row>
        <Col className="unsu"> 
       Rotate your phone    (˵ •̀ ᴗ - ˵ ) ✧.... 
        </Col>
      </Row>
    </Container>
      <div className='all'>
        <div className="apps">
    <h1 className="d-flex justify-content-start fs-3 mx-2 p-3 fw-bolder">HangwelaniN</h1>
     <div className='contain'>
    <h2 className="head pb-3">Tell your story</h2>
    <p className='para'>
      Create a beautiful blog to share your passionate 
      with the world. Start your free trial today.
      No credit card required.
      </p>
      <br />
      <Button variant="dark" className='p-3 m-3'>GET STARTED</Button>
      <br />
      <br />
      <FontAwesomeIcon icon={faAngleDown} size="2xl" className='m-5' />
      <br />
      <br />
      </div>
      </div>
      < PageTwo />
      <PageThree />
      <PageFour />
      <LastPage />
      </div>
      </div>
     
  );
}

export default App;
