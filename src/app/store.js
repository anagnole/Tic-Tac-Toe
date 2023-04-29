import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';

import { reducer, initState } from "models/tic-tac-toe";
import epic from "models/tic-tac-toe/epics";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        reducer,
        initState,
        applyMiddleware(epicMiddleware),
      );

      epicMiddleware.run(epic);

      return store;
};
