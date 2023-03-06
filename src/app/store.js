import { configureStore } from '@reduxjs/toolkit';

import gameReducer from 'components/game/gameSlice';
//import squareReducer from 'components/square/squareSlice';

export default configureStore({
  reducer: {
    game: gameReducer
    //square: squareReducer,
  },
});