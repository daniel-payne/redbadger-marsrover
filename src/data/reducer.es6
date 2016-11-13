import { Reducer, Action,  ActionCreator } from 'redux';
import Immutable                           from 'immutable'

// Action Creators/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const X = 0;
const Y = 1;

const LOAD_INSTRUCTIONS = 'LOAD_INSTRUCTIONS';
export const loadInstructions: ActionCreator<Action> = (payload) => ({
  type:     LOAD_INSTRUCTIONS,
  payload:  payload
});

// Helpers ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
function extractWorld(text){

  var data = text.split("\n");

  var sizes = data[0].split(' ');

  return { minX: 0, minY: 0, maxX: +sizes[X], maxY: +sizes[Y] };

}

function extractRobots(text){

  var nextPosition;
  var nextSequence;

  var robots = [];
  var data   = text.split("\n");

  data.shift();

  data.forEach( function(item){

    if (item.length > 0){

        if (! nextPosition){
          nextPosition = item;
        } else if (! nextSequence){
          nextSequence = item;
        }

        if (nextPosition && nextSequence  ) {

          robots.push( {
            startPosition: nextPosition,
            sequence:      nextSequence
          })

          nextPosition = undefined;
          nextSequence = undefined;
        }

    }

  });

  return Immutable.List(robots);

}

// Processors /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function processLoadInstructions(state, payload) {

  var world     = extractWorld(payload);
  var robots    = extractRobots(payload);

  return Object.assign( {}, state, { world, robots } );
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

  robots:      Immutable.List([])
}
 
export const worldReducer =
  (state = initialWorldState, action) => {

    let newState = Object.assign({}, state, {actionCounter: state.actionCounter + 1});

    switch (action.type) {

      case LOAD_INSTRUCTIONS:     return processLoadInstructions(   newState, action.payload                );

      default:                    return newState;

    }
  };