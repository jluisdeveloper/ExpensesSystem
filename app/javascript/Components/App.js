import React, { Component } from 'react';
import axios from 'axios'

import Users from "./Users/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      categories: [],
      users: []
    }
  }

  componentDidMount() {
    this.getCurrentUser();
    this.getUserList();
    this.getCategoriesList();
  }

  getCurrentUser = async() => {
    let that = this;
    await axios.get('/current_user')
      .then((response)=>{
        that.setState({
          currentUser: response.data.current_user,
        })
      }).catch((error)=> {
        console.log(error)
      })
  }

  getUserList = async (users) => {
    let that = this;

    that.setState({
      users
    })

    // await axios.get('/users')
    //   .then((response)=>{
    //     that.setState({
    //       users: response.data
    //     })
    //   }).catch((error)=>{
    //     console.log(error)
    //   })
  }

  getCategoriesList = async () => {
    let that = this;

    await axios.get('/categories')
      .then((response)=>{
        that.setState({
          categories: response.data
        })
      }).catch((error)=>{
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <Users
          getUserList = { this.getUserList }
        />
        App Component
      </div>
    );
  }
}

export default App;