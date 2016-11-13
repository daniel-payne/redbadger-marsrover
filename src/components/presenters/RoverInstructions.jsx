import React                  from 'react';
import { render }              from 'react-dom';
import { Button }              from 'react-bootstrap';

import { RoverMovement } from './RoverMovement.jsx'


class RoverInstructions extends React.Component {

  constructor(props){

     super(props)

  }

  render () {

      const instructionStyle = { border: '1px solid #EEE', padding: 8 };

      return <div>

        <RoverMovement></RoverMovement>
        <RoverMovement></RoverMovement>
        <RoverMovement></RoverMovement>

        <Button>Add Rover</Button>

      </div>
  }

}

RoverInstructions.propTypes = {
}

RoverInstructions.defaultProps = {  
}

export { RoverInstructions }  
