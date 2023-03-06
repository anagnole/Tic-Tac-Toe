//import connect from 'libraries/models/connect';
import { connect } from 'react-redux';

import {
  squares
} from 'models/tic-tac-toe/selectors';

import {
  play
} from 'models/tic-tac-toe/actions';

import './square.css';

const Square = ({ squares, play, index }) => {
  return (
  <button className="square" onClick={() => {play({i: index})}}>
    {squares[index]}
  </button>
  );
};
const mapStateToProp = state => {
  return {
    squares: squares(state),
  };
};

export default connect(
  mapStateToProp,
  {
    play,
})(Square);