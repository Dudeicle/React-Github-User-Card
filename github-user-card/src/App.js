import React from 'react';
import axios from 'axios';
import './App.css';

import MyCard from './component/MyCard.js';
import CardList from './component/CardList.js';

class App extends React.Component {

  state = {
    user: [],
    mainUser: 'Dudeicle',
    followersUrl: '',
    followers: []
  };

  componentDidMount() {

    console.log(this.state.mainUser)

    axios.get(`https://api.github.com/users/${this.state.mainUser}`)

      .then(res => {
        this.setState({
          user: res.data,
          followersUrl: res.data.followers_url
        }); 
        console.log(this.state.user)
          axios.get(this.state.followersUrl)
            .then(res => {
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

  render() {
    return (

    <div className="App">
        <h1>Brian's Github Card and Follower's Cards</h1>
        <div>
            <MyCard user={this.state.user}/>
        </div>

        <div>
            {this.state.followers.map(follower => (
              <CardList key={follower.id} photo={follower.avatar_url} username={follower.login} link={follower.html_url} />
            ))}
        </div>
    </div>
  );
  }
}

export default App;