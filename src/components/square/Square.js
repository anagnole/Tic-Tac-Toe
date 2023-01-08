import connect from 'libraries/models/connect';

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

export default connect(Square)({
    squares,
  },
  {
    play,
});