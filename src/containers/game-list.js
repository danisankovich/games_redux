import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectGame} from '../actions/index';

class GameList extends Component {
  renderList() {
    return this.props.games.map((game) => {
      return (
        <li
          key={game.title}
          onClick={() => this.props.selectGame(game)}
          className="list-group-item">
          {game.title}
        </li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of gamelist
  return {
    games: state.games
  };
}

// anything returned from this will end up as props on the GameList container
function mapDispatchToProps(dispatch) {
  // whenever selectGame is called, result is passed to all reducers
  // dispatch receives that object, and sends it to all reducers
  return bindActionCreators({selectGame: selectGame}, dispatch);
}

// promotes GameList from component to container: it needs to know about new dispatch method: selectGame. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(GameList);
