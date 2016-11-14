import React                                    from 'react';
import { render }                               from 'react-dom';
import { connect }                              from 'react-redux'

import { 
    Button, 
    Nav, 
    NavItem 
}                                               from 'react-bootstrap';


import { SimulationInstructions } from '../presenters/SimulationInstructions.jsx'

class Manager extends React.Component {

  constructor(props){

     super(props)

  }

  render () {

      return  <Nav pullRight >
                 <NavItem>
                    <SimulationInstructions {...this.props} ></SimulationInstructions>
                 </NavItem>
              </Nav> 

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

let SimulationManager = connect(
  mapStateToProps,
  mapDispatchToProps
)(Manager)

export { SimulationManager }