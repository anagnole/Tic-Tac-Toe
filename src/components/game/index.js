import Game from './Game';
import GameContainer from './GameContainer';
import {Context} from './GameContainer';
import {Squares} from './Game';

export {
    Context,
    Squares
};
export default () => <GameContainer Component={Game}/>;
