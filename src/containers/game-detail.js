import React, {Component} from 'react';
import {connect} from 'react-redux';

class GameDetail extends Component {
  render() {
    //initially, this.props.game is null, which would throw an error when you
    // call for its title. do this to render this first, if nothing is yet selected
    if(!this.props.game) {
      return <div>Select a Game to see its details</div>
    }
    return (
      <div>
        <h2>Details for: </h2>
        <h4>Title: {this.props.game.title}</h4>
        <h4>Synopsis: {this.props.game.synopsis}</h4>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    game: state.activeGame
  };
}

export default connect(mapStateToProps)(GameDetail);
