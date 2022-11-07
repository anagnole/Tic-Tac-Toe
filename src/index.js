import React from 'react';
import ReactDOM from 'react-dom/client'; //client

import {
  Square,
  Board,
  Game,
} from "components";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
