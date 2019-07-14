import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const lakeList = [
  {is:1, name: "echo lake", trailhead: "echo lake"},
  {is:2, name: "maud lake", trailhead: "wright's lake"},
  {is:3, name: "cascade lake", trailhead: "bayview"}
];

ReactDOM.render(
                <App lakes={lakeList} summer={false}/>,
                document.getElementById("root")
            );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
