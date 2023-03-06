// import { createSlice } from '@reduxjs/toolkit';
// import calculateWinner from "libraries/tic-tac-toe";

// const initialState = {
//     history: [
//       {
//         squares: Array(9).fill(null)
//       }
//     ],
//     stepNumber: 0,
//     xIsNext: true,
//     reverseList : false,
// };

// const squareSlice = createSlice({
//     name: 'game',
//     initialState,
//     reducers: {
//         play(state, {payload}) {
//             const i = payload.i
//             const history = state.history.slice(0, state.stepNumber + 1);
//             const current = history[history.length - 1];
//             const squares = current.squares.slice();
            
//             if (calculateWinner(squares) || squares[i]) {
//                 //return state;
//                 state = state;
//                 return;
//             }
//             squares[i] = state.xIsNext ? "X" : "O";
//             const xIsNext = !state.xIsNext;
//             state.history = history.concat(
//                      [
//                      {
//                          squares,   
//                      }         
//                      ]
//                  );
//             state.stepNumber = history.length;
//             state.xIsNext = xIsNext;
//             // return {
//             // history: history.concat(
//             //     [
//             //     {
//             //         squares,   
//             //     }         
//             //     ]
//             // ),
//             // stepNumber : history.length,
//             // xIsNext,
//             // reverseList: state.reverseList,
//             // };
//         },

//     }
//   });
  
//   export const { play } = squareSlice.actions;
  
//   export default squareSlice.reducer;