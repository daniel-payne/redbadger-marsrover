
import {
  worldReducer, 
  initialWorldState, 
  loadInstructions, 
  runInstructions
}                                from './worldReducer.es6'

const instructions = `5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL` 

describe("World Reducer", function() {

  var newState = 0;

  beforeEach(function() {
    newState = worldReducer(initialWorldState, {type: null} );
  });

  it("Should increment the action counter", function() {

    expect( newState.actionCounter ).not.toBe(0);
        
  });

  it("Should have default world values", function() {

    expect( newState.world.minX ).toBe(0);
    expect( newState.world.minY ).toBe(0);
    expect( newState.world.maxX ).toBe(0);
    expect( newState.world.maxY ).toBe(0);
        
  });

  it("Should load a setup file", function() {

    newState = worldReducer(initialWorldState, loadInstructions(instructions) );

    expect( newState.world.maxX ).toBe(5);
    expect( newState.world.maxY ).toBe(3);

    expect( newState.rovers.count() ).toBe(3);

    expect( newState.rovers.get(1).lastPosition ).not.toBeDefined;

        
  });

    it("Should process the rovers", function() {

    newState = worldReducer(initialWorldState, loadInstructions(instructions) );
    newState = worldReducer(newState,          runInstructions() );

    expect( newState.rovers.get(1).lastPosition[0] ).toBe(3);
    expect( newState.rovers.get(1).lastPosition[1] ).toBe(3);
    expect( newState.rovers.get(1).lastPosition[2] ).toBe('N');
    expect( newState.rovers.get(1).isLost          ).toBe(true);
        
  });

  it("Should create results", function() {

    newState = worldReducer(initialWorldState, loadInstructions(instructions) );
    newState = worldReducer(newState,          runInstructions() );

    expect( newState.results ).toBeDefined();

        
  });

});