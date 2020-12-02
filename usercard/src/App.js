import React from 'react';
import axios from 'axios';
import './App.css';
import GitCards from './giftCards'

class App extends React.Component{
  state={
      user:{},
      followers:[]
    }
    

  componentDidMount(){
    axios
      .get('https://api.github.com/users/adamrappaport')
      .then(res=>this.setState({user:res.data},
        console.log(res.data)))
      .catch(err=>console.log(err));
    axios
      .get('https://api.github.com/users/adamrappaport/followers')
      .then(res=>this.setState({followers:res.data},console.log(res.data)))
      .catch(err=>console.log(err));
  }

  render(){
    return (
      <div className="App">
        <header className="App-header"/>
        <GitCards user={this.state.user}/>


        {/* <div className='card'>
          <img className='profilePic' src={this.state.user.avatar_url} alt={this.state.user.login}/>
          <h3>{this.state.user.name}</h3>
          <p>{this.state.user.login}</p> */}
          <span>Profile: <a href={this.state.user.html_url}>{this.state.user.html_url}</a></span> 
          <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p>
   
        <h2>Followers</h2>
        {this.state.followers.map(follower=>
        <div className='card' key={follower.id}>
          <img className='profilePic' src={follower.avatar_url} alt={follower.login}/>
          <h3>User:{follower.login}</h3>
          <p>Profile:<a href={follower.html_url}>{follower.html_url}</a></p>
        </div>
      )}
        
      </div>
    );}
  }


export default App;

