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
        <FormControl componentClass="textarea" value={this.props.results} readOnly placeholder="Results to go here" rows="30" style={{border: 'none', width: '100%', height: 'calc(100% - 32px)', resize: 'none' }}  >
        </FormControl>
      </FormGroup>

      </div>
  }

}

ResultsText.propTypes = {
  results: React.PropTypes.string.isRequired
}

ResultsText.defaultProps = {  
}

export { ResultsText }  
