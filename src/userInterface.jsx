import React                 from 'react';
import {render}              from 'react-dom';
import Immutable             from 'immutable';
import ReactBootstrapSlider  from 'react-bootstrap-slider';

import { Checkbox, Radio, Panel, ListGroup, ListGroupItem, Label, Grid, Row, Col, MenuItem, ControlLabel, FormControl, NavDropdown, NavItem, Nav, Navbar, ButtonGroup, Button, Tabs, Tab, FormGroup, ButtonToolbar, Glyphicon } from 'react-bootstrap';

import { RoverInstructions } from './components/presenters/RoverInstructions.jsx'
import { TextInstructions } from './components/presenters/TextInstructions.jsx'
import { ResultsText } from './components/presenters/ResultsText.jsx'

class App extends React.Component {

  constructor(props){

     super(props)

  }

  render () {

    const tabStyle = {borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd', height: 'calc(100% - 38px)', padding: '8px'};  

    const worldDisplayStyle = { height: '100%', width: '100%', position: 'relative' };

    const worldGridStyle      = { display: 'inline-block', clear: 'none', position: 'absolute',                           top: 32,  left: 32, border: '1px solid #ddd', height: 'calc(100% - 32px)', width: 'calc(100% - 32px)'};
    
    const verticalSizeStyle   = { display: 'inline-block', clear: 'none', position: 'absolute', verticalAlign: 'bottom', top: 32,             height: 'auto',              width: '32px' };
    const horizontalSizeStyle = { display: 'inline-block', clear: 'none', position: 'absolute', verticalAlign: 'bottom',            left: 32, height: '32px',              width: 'calc(100% - 32px)' };

    
    return (
        <div className="container-fluid">
        
            <Navbar fluid fixedTop>
                <Navbar.Header >
                <Navbar.Brand>
                    <a href="#">Mars Rover</a>  
                             
                </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight >
                    <NavItem>
                      <Button bsSize="xsmall"  >Run Simulation</Button>
                    </NavItem>
                </Nav>
            </Navbar>    
 
            <Grid fluid style={{marginTop: '58px', height: 'calc(100% - 78px)'}}>
                <Row className="show-grid">
                <Col md={4}> 
                
                    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Rovers" style={tabStyle} >
                          <RoverInstructions></RoverInstructions>              
                        </Tab>
                        <Tab eventKey={2} title="Instructions" style={tabStyle} >
                           <TextInstructions></TextInstructions>
                        </Tab>
                        <Tab eventKey={3} title="Results" style={tabStyle} >
                           <ResultsText></ResultsText>
                        </Tab>
                    </Tabs>
              
                </Col>


                <Col md={8}>

                   <div style={worldDisplayStyle}>

                       <div style={verticalSizeStyle}>
                         <ReactBootstrapSlider value={10} max={50} min={0} orientation="vertical" reverse={true} ></ReactBootstrapSlider>
                       </div>
                       <div style={horizontalSizeStyle}>
                         <ReactBootstrapSlider value={10} max={50} min={0} orientation="horizontal"   ></ReactBootstrapSlider>
                       </div>
                       <div style={worldGridStyle}> </div>
                       
                   </div>
                   
                </Col>


                </Row>
            </Grid>   
        
        </div>
    )
  }
}

App.propTypes = {
}

App.defaultProps = {  
}

window.addEventListener('load', function(){
   render(<App />, document.getElementById('renderTarget'));
})



 


 


 
