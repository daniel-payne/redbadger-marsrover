import React                                    from 'react';
import { render }                               from 'react-dom';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


class TextInstructions extends React.Component {

  constructor(props){

     super(props)

  }

  render () {

      let update = (event) => {
        this.props.onUpdateInstructions(event.target.value) 
      };

      return <div>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Instruction Text</ControlLabel>
          <FormControl componentClass="textarea" value={this.props.instructions} onChange={update}  placeholder="Instructions to go here" rows="30" style={{border: 'none', width: '100%', height: 'calc(100% - 32px)', resize: 'none' }} >
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
