import React                                    from 'react';
import { render }                               from 'react-dom';
import { Button }                               from 'react-bootstrap';


class SimulationInstructions extends React.Component {

  constructor(props){

     super(props)

  }

  render () {

      return <Button bsSize="xsmall"  onClick={ () => this.props.onRunSimulation('Simulation Manager - To be completed') } >Run Simulation</Button>

  }

}

SimulationInstructions.propTypes = {
    onRunSimulation: React.PropTypes.func.isRequired
}

SimulationInstructions.defaultProps = {  
}

export { SimulationInstructions }  
