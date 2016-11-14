import React          from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import {ResultsText}  from './ResultsText.jsx'

const renderer = ReactTestUtils.createRenderer();

renderer.render( React.createElement( ResultsText, {results: 'XXX'} ) );

describe("Results Text", function() {

  it("Should be defined", function() {

    expect( ResultsText ).toBeDefined();
        
  });

  it("Should have a text area", function() {

    let output = renderer.getRenderOutput();  

    let text         = output.props.results;
    let formGroup    = output.props.children;
    let controlLabel = formGroup.props.children[0];
    let formControl  = formGroup.props.children[1];

    //console.log(Object.keys(output.props.children.props.children[0].props))

    expect(formGroup.type).toMatch(   'FormGroup'   );
    expect(controlLabel.type).toMatch('ControlLabel');
    expect(formControl.type).toMatch( 'FormControl' );

    //expect(text).toEqual('XXX');
        
  });

});