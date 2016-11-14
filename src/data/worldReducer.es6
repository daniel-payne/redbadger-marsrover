import { Reducer, Action,  ActionCreator } from 'redux';
import Immutable                           from 'immutable'

// Action Creators/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const X = 0;
const Y = 1;
const D = 2;

const LOAD_INSTRUCTIONS = 'LOAD_INSTRUCTIONS';
export const loadInstructions: ActionCreator<Action> = (payload) => ({
  type:     LOAD_INSTRUCTIONS,
  payload:  payload
});

const RUN_INSTRUCTIONS = 'RUN_INSTRUCTIONS';
export const runInstructions: ActionCreator<Action> = () => ({
  type:     RUN_INSTRUCTIONS 
});

// Helpers ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateNextLocation(currentPosition, instruction, world){

  var maxXLocation      = parseInt(world.maxX, 10);
  var maxYLocation      = parseInt(world.maxY, 10);
  var minXLocation      = parseInt(world.minX, 10);
  var minYLocation      = parseInt(world.minY, 10);
  var currentXLocation  = parseInt(currentPosition[X], 10);
  var currentYLocation  = parseInt(currentPosition[Y], 10);
  var currentDirection  = currentPosition[D];

  if (instruction.toUpperCase() === 'F'){

    switch(currentDirection) {

        case 'N': currentYLocation = currentYLocation + 1;  break;
        case 'S': currentYLocation = currentYLocation - 1;  break;

        case 'E': currentXLocation = currentXLocation + 1;  break;
        case 'W': currentXLocation = currentXLocation - 1;  break;

    }

  }

  if ( (currentXLocation > maxXLocation ) ||
        (currentYLocation > maxYLocation ) ||
        (currentXLocation < minXLocation ) ||
        (currentYLocation < minYLocation ) ){

    //console.log('OFF WORLD')

    throw 'Off World'

  }

  //console.log([currentPosition[X],currentPosition[Y],currentPosition[D], instruction,currentXLocation,currentYLocation,currentPosition[D]])

  return [currentXLocation,currentYLocation,currentPosition[D]];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateNextDirection(currentPosition, instruction){

  var currentDirection  = currentPosition[D];

  var newLeftDirections  = { N: 'W', E: 'N', S: 'E', W: 'S' };
  var newRightDirections = { N: 'E', E: 'S', S: 'W', W: 'N' };

  if (instruction.toUpperCase() === 'L'){

    currentDirection = newLeftDirections[currentDirection];

  } else if (instruction.toUpperCase() === 'R'){

    currentDirection = newRightDirections[currentDirection];

  }

  //console.log([currentPosition[X],currentPosition[Y],currentPosition[D], instruction, currentPosition[X],currentPosition[Y],currentDirection])

  return [currentPosition[X],currentPosition[Y],currentDirection];
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calculateMovements(robot, world){

  var newPosition;
  var currentPosition = robot.startPosition;
  var isLost          = false;
  var positions       = [];
  //console.log([+currentPosition[X],+currentPosition[Y],currentPosition[D]])

  robot.instructions.forEach( function(item){

    let nextPosition;

    if (! isLost){

      try{

        switch(item.toUpperCase()) {
          case 'R':
              nextPosition = calculateNextDirection(currentPosition, 'R');
              break;
          case 'L':
              nextPosition = calculateNextDirection(currentPosition, 'L');
              break;
          case 'F':
              nextPosition = calculateNextLocation(currentPosition, 'F', world);
              break;

        }

        positions.push( [...nextPosition] );

        currentPosition = [...nextPosition];

        //console.log([nextPosition[X],nextPosition[Y],nextPosition[D]])

      } catch (e) {

        isLost = true;

      }

    }

  });

  //console.log([+currentPosition[X],+currentPosition[Y],currentPosition[D], isLost])

  return Object.assign( {}, robot, { lastPosition: currentPosition, isLost, positions } );

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
function extractResults(movements){

  return movements.map( function(item){

      return [ item.lastPosition[X], item.lastPosition[Y], item.lastPosition[D], item.isLost === false ? '' : 'LOST' ].join(' ');

  }).toArray().join('\n');

}
      
function extractWorld(text){

  var data = text.split("\n");

  var sizes = data[0].split(' ');

  return { minX: 0, minY: 0, maxX: +sizes[X], maxY: +sizes[Y] };

}

function extractRovers(text, world){

  var nextPosition;
  var nextInstructions;

  var rovers = []; 
  var data   = text.split("\n");

  data.shift();

  data.forEach( function(item){

    if (item.length > 0){

        if (! nextPosition){
          nextPosition = item;
        } else if (! nextInstructions){
          nextInstructions = item;
        }

        if (nextPosition && nextInstructions  ) {

          rovers.push( {
            startPosition:     nextPosition.split(' '),
            instructions:      nextInstructions.split(''),
            positions:         []
          })

          nextPosition     = undefined;
          nextInstructions = undefined;
        }

    }

  });

  return rovers

}

// Processors /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function processLoadInstructions(state, payload) {

  var world     = extractWorld(payload);
  var rovers    = extractRovers(payload, world);

  return Object.assign( {}, state, { 
    instructions: payload,
    world:        Object.freeze(world), 
    rovers:       Immutable.List(rovers), 
    results:      undefined 
  } );

}

function processRunInstructions(state) { 
 
  var newRovers;
  var newState = state;

  if (! newState.results){
    newState = processLoadInstructions(newState, newState.instructions)
  }

  newRovers = newState.rovers.map( function(item){

    return calculateMovements(item, newState.world);

  });

  var results   = extractResults(newRovers)

  return Object.assign( {}, newState, { 
    rovers:  Immutable.List(newRovers), 
    results: results 
  } );
}

// Reducer ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
export const initialWorldState = {
  actionCounter: 0,

  world: {
    minX: 0, 
    minY: 0, 
    maxX: 0, 
    maxY: 0
  },

  instructions: 
`5 3
1 1 E
RFRFRFRF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`,

  rovers:      Immutable.List([])
}
 
export const worldReducer =
  (state = initialWorldState, action) => {

    let newState = Object.assign({}, state, {actionCounter: state.actionCounter + 1});

    switch (action.type) {

      case LOAD_INSTRUCTIONS:     return processLoadInstructions( newState, action.payload );
      case RUN_INSTRUCTIONS:      return processRunInstructions(  newState                 );

      default:                    return newState;

    }
  };