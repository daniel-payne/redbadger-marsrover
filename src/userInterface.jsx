import React                 from 'react';
import { createStore }       from 'redux'
import { Provider }          from 'react-redux'
import { render }            from 'react-dom';
import Immutable             from 'immutable';

import { 
    Grid, 
    Row, 
    Col, 
    Nav, 
    Navbar, 
    Button 
}                               from 'react-bootstrap';

import { worldReducer }         from './data/worldReducer.es6'

import { SimulationManager }    from './components/containers/SimulationManager.jsx'
import { InstructionManager }   from './components/containers/InstructionManager.jsx'
import { VisualisationManager } from './components/containers/VisualisationManager.jsx'

class App extends React.Component {

  constructor(props){

     super(props)

     this.store = window.devToolsExtension ? window.devToolsExtension(worldReducer) : createStore(worldReducer)
  }

  render () {    

    return (
        <Provider store={this.store}>
          <div className="container-fluid">

            <Navbar fluid fixedTop>
                <Navbar.Header >
                  <Navbar.Brand>
                    <a href="#">Mars Rover</a>                    
                  </Navbar.Brand>
                </Navbar.Header>
                <SimulationManager></SimulationManager>
            </Navbar>    
 
            <Grid fluid style={{marginTop: '58px', height: 'calc(100% - 78px)'}}>
                <Row className="show-grid">
                  <Col md={4}> 
                     <InstructionManager></InstructionManager>
                  </Col>
                  <Col md={8}>
                    <VisualisationManager></VisualisationManager>        
                  </Col>
                </Row>
            </Grid>   
          
          </div>    
        </Provider> 

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



 


 


 
