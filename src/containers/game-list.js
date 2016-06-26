import React, {Component} from 'react';
import {connect} from 'react-redux';

class GameList extends Component {
  renderList() {
    return this.props.games.map((game) => {
      return (
        <li key={game.title} className="list-group-item">{game.title}</li>
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

export default connect(mapStateToProps)(GameList);
