import React from 'react'
import axios from 'axios'

class MyCardMaker extends React.Component {

    state = {
        name: "",
        username: "",
        bio: "",
        location: "",
        photo: Image
    }


    componentDidMount() {
        axios.get("https://api.github.com/users/Dudeicle")
            .then(res => {
                console.log(res.data) // all user data from api
                console.log(res.data.name) // name
                console.log(res.data.login) // username
                console.log(res.data.bio) // bio
                console.log(res.data.location) // location
                console.log(res.data.avatar_url) // profile picture
                
                this.setState({
                    name: res.data.name,
                    username: res.data.login,
                    bio: res.data.bio,
                    location: res.data.location,
                    photo: res.data.avatar_url
                })
            })
            .catch(err => {
                console.log('error', err)
            })
    }

    



    render() {


        return(
        
          <div>
          
               
            
            <div>
                <img src={this.state.avatar_url} alt='profile-picture'></img>
        <div className="card-info">{this.state.name}</div>
            </div>  
          
          </div>
        )
    
    
      }
}

export default MyCardMaker