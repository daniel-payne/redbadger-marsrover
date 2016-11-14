import React                                    from 'react';
import { render }                               from 'react-dom';
import { connect }                              from 'react-redux'

import { 
}                                               from 'react-bootstrap';
import ReactBootstrapSlider                     from 'react-bootstrap-slider';


import { RoverInstructions } from '../presenters/RoverInstructions.jsx'
import { TextInstructions }  from '../presenters/TextInstructions.jsx'
import { ResultsText }       from '../presenters/ResultsText.jsx'

class Manager extends React.Component {

  constructor(props){

     super(props)
    
     this.worldDisplayStyle   = { height: '100%', width: '100%', position: 'relative' };
     this.worldGridStyle      = { display: 'inline-block', clear: 'none', position: 'absolute',                          top: 32,  left: 32, height: 'calc(100% - 32px)', width: 'calc(100% - 32px)', border: '1px solid #ddd' };   
     this.verticalSizeStyle   = { display: 'inline-block', clear: 'none', position: 'absolute', verticalAlign: 'bottom', top: 32,            height: 'auto',              width: '32px' };
     this.horizontalSizeStyle = { display: 'inline-block', clear: 'none', position: 'absolute', verticalAlign: 'bottom',           left: 32, height: '32px',              width: 'calc(100% - 32px)' };

  }

  render () {
        
    return   <div style={this.worldDisplayStyle}>

                    <div style={this.verticalSizeStyle}>
                        <ReactBootstrapSlider value={10} max={50} min={0} orientation="vertical" reverse={true} ></ReactBootstrapSlider>
                    </div>
                    <div style={this.horizontalSizeStyle}>
                        <ReactBootstrapSlider value={10} max={50} min={0} orientation="horizontal"   ></ReactBootstrapSlider>
                    </div>
                    <div style={this.worldGridStyle}> </div>
                    
             </div>

  }

}

Manager.propTypes = {
}

Manager.defaultProps = {  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => {
  return {
    //todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRunSimulation: (id) => {
        window.alert(id)
      //dispatch(toggleTodo(id))
    }
  }
}

let VisualisationManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(Manager)

export { VisualisationManager }