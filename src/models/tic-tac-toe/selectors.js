export const historySelector = ({ history }) => history;
export const stepNumberSelector = ({ stepNumber }) => stepNumber;
export const reverseListSelector = ({ reverseList }) => reverseList;
export const xIsNextSelector = ({ xIsNext }) => xIsNext;
export const squaresSelector = state => historySelector(state)[stepNumberSelector(state)].squares;
export const winnerSelector = ({ winner }) => winner;