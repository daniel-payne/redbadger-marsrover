import React                                    from 'react';
import { render }                               from 'react-dom';
import { connect }                              from 'react-redux'

import { 
    Button, 
    Tabs, 
    Tab 
}                                               from 'react-bootstrap';

import { 
  runInstructions, 
  loadInstructions 
}   from '../../data/worldReducer.es6'

import { RoverInstructions } from '../presenters/RoverInstructions.jsx'
import { TextInstructions }  from '../presenters/TextInstructions.jsx'
import { ResultsText }       from '../presenters/ResultsText.jsx'

class Manager extends React.Component {

  constructor(props){

     super(props)

     this.tabStyle = {borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', borderBottom: '1px solid #ddd', height: 'calc(100% - 38px)', padding: '8px'}

  }

  render () {

     return  <Tabs defaultActiveKey={'INSTRUCTIONS'} id="instructions-tab" onSelect={ (eventKey) => this.props.onProcessRovers(eventKey) } >
                {/*
                <Tab eventKey={'ROVERS'} title="Rovers" style={this.tabStyle}  >
                    <RoverInstructions></RoverInstructions>              
                </Tab>
                */}
                <Tab eventKey={'INSTRUCTIONS'} title="Instructions" style={this.tabStyle} >
                    <TextInstructions {...this.props} ></TextInstructions>
                </Tab>
                <Tab eventKey={'RESULTS'} title="Results" style={this.tabStyle} >
                    <ResultsText {...this.props} ></ResultsText>
                </Tab>
            </Tabs>

  }

}

Manager.propTypes = {
}

Manager.defaultProps = {  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => {
   
  return {
    instructions:  state.instructions,
    results:       state.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProcessRovers: (eventKey) => { 
        if (eventKey === 'RESULTS'){ 
           dispatch(runInstructions())
        }
    },
    onUpdateInstructions: (data) => {
      dispatch(loadInstructions(data))  
    }
  }
}

let InstructionManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(Manager)

export { InstructionManager }