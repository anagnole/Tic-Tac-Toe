import { createStore } from "redux";

import { reducer, initState } from "models/tic-tac-toe";

const store = createStore(reducer, initState);

export default store;