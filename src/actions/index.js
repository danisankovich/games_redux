export function selectGame(game) {
  //selectGame is action creator. returns an action with property of type.
  return {
    type: 'GAME_SELECTED',
    payload: game,
  }
}
