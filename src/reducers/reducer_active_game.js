// state: current state, not application state. Only the state this reducer is responsible for.
export default function(state = null, action) { //state is what is passed in, or null
  switch(action.type) {
    case 'GAME_SELECTED':
      return action.payload;
  }
  return state;
}
