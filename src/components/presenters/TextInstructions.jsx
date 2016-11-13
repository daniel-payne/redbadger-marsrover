import React                                    from 'react';
import { render }                               from 'react-dom';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


class TextInstructions extends React.Component {

  constructor(props){

     super(props)

  }

  render () {


      return <div>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Instruction Text</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" rows="30" style={{border: 'none', width: '100%', height: 'calc(100% - 32px)', resize: 'none' }}  defaultValue={
`5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`  
}>
      </FormControl>
    </FormGroup>

      </div>
  }

}

TextInstructions.propTypes = {
}

TextInstructions.defaultProps = {  
}

export { TextInstructions }  
