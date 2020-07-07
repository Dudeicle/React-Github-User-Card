import React from 'react';
import axios from 'axios';
import './App.css';

import CardMaker from './component/CardMaker.js';


class App extends React.Component {

  state = {
    mainUser: 'MaryamMosstoufi',
    followersUrl: '',
    followers: []
  };

  componentDidMount() {
    console.log(this.mainUser)
    axios
      .get(`https://api.github.com/users/${this.mainUser}`)
      .then(res => {
        console.log('Main User API Call', res)
        //console.log(res.data.followers_url)
        this.setState({
          followersUrl: res.data.followers_url
        }); 
        axios
          .get(this.state.followersUrl)
          .then(res => {
            console.log('Followers URL API Call', res)
            this.setState({
              followers: res.data
            });
          })
          .catch(error => {
            console.log("Get Followers Error:", error);
          })
      })
      .catch(error => {
        console.log("Get Followers URL Error:", error);
      })
    console.log('component did mount')
  }

  // getFollowers() {
  //   axios
  //     .get(`https://api.github.com/users/MaryamMosstoufi/followers`)
  //     .then(res => {
  //       console.log('Followers URL API Call', res.data)
  //       this.setState({
  //         followers: res.data
  //       });
  //     })
  //     .catch(error => {
  //       console.log('Followers List Error', error)
  //     })
  // };



  render() {
    return (
    <div className="App">
      <h1>React Github User Card</h1>
        <div>
            {/* {this.state.followersUrl.map(follower => (
              <CardMaker key={follower.id} follower={follower} />
            ))} */}
        </div>
    </div>
  );
  }
}

export default App;