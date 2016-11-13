import React                 from 'react';
import {render}              from 'react-dom';
import { ButtonGroup, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

class RoverMovement extends React.Component {

  constructor(props){

     super(props)

  }

  render () {

      const instructionStyle = { border: '1px solid #EEE', padding: 8 };

      return <div>

        <div>
            <Glyphicon glyph="chevron-left" style={instructionStyle} />
            <Glyphicon glyph="chevron-left" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
            <Glyphicon glyph="chevron-right" style={instructionStyle} />
            <Glyphicon glyph="chevron-left" style={instructionStyle} />
            <Glyphicon glyph="chevron-right" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
            <Glyphicon glyph="chevron-left" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
            <Glyphicon glyph="chevron-right" style={instructionStyle} />
            <Glyphicon glyph="chevron-left" style={instructionStyle} />
            <Glyphicon glyph="chevron-right" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
            <Glyphicon glyph="chevron-left" style={instructionStyle} />
            <Glyphicon glyph="arrow-up" style={instructionStyle} />
        </div>
        &nbsp;
        <ButtonToolbar>
        <ButtonGroup>
            <Button><Glyphicon glyph="chevron-left" /></Button>
            <Button><Glyphicon glyph="arrow-up" /></Button>
            <Button><Glyphicon glyph="chevron-right" /></Button>
            <Button><Glyphicon glyph="remove" /></Button>
        </ButtonGroup>
        </ButtonToolbar> 
        <hr/>

      </div>
  }

}

RoverMovement.propTypes = {
}

RoverMovement.defaultProps = {  
}

export { RoverMovement }  
