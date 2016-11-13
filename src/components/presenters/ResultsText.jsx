import React                                    from 'react';
import { render }                               from 'react-dom';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';


class ResultsText extends React.Component {

  constructor(props){

     super(props)

  }

  render () {


      return <div>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Results Text</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Results to go here" rows="30" style={{border: 'none', width: '100%', height: 'calc(100% - 32px)', resize: 'none' }}  defaultValue={
``  
}>
      </FormControl>
    </FormGroup>

      </div>
  }

}

ResultsText.propTypes = {
}

ResultsText.defaultProps = {  
}

export { ResultsText }  
