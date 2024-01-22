import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="apps">
    <h1 className="d-flex justify-content-start fs-3 mx-2 p-3 fw-bolder">HangwelaniN</h1>
     <div className='contain'>
    <h2 className="head pb-3">Tell your story</h2>
    <p>
      Create a beautiful blog to share your passionate 
      with the world. Start your free trial today.
      No credit card required.
      </p>
      <br />
      <Button variant="dark" className='p-3 m-3'>GET STARTED</Button>
      <br />
      <br />
      <FontAwesomeIcon icon={faAngleDown} size="2xl" className='m-5' />
      </div>
      </div>
      </div>
     
  );
}

export default App;
