
import {worldReducer, initialWorldState, loadInstructions} from './reducer.es6'


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

    const instructions = `5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL` 

    newState = worldReducer(initialWorldState, loadInstructions(instructions) );

    expect( newState.world.maxX ).toBe(5);
    expect( newState.world.maxY ).toBe(3);

    expect( newState.rovers.count() ).toBe(3);

    expect( newState.rovers.get(1).lastPosition[0] ).toBe(3);
    expect( newState.rovers.get(1).lastPosition[1] ).toBe(3);
    expect( newState.rovers.get(1).lastPosition[2] ).toBe('N');
    expect( newState.rovers.get(1).isLost ).toBe(true);
        
  });

});