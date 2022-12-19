export const history = ({ history }) => history;
export const stepNumber = ({ stepNumber }) => stepNumber;
export const reverseList = ({ reverseList }) => reverseList;
export const xIsNext = ({ xIsNext }) => xIsNext;
export const squares = state => history(state)[stepNumber(state)].squares;
export const winner = ({ winner }) => winner;