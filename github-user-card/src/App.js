import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Followers from './data.js';

import MyCard from './component/myCardMaker.js';
import FollowerCard from './component/followerCardMaker.js';


class App extends React.Component {

  render() {
    return(
      <div>
        This is App.js
        <MyCard />
        <FollowerCard />
      </div>
    )

  }
}

export default App;
