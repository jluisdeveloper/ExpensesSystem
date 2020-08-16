import React, { Component } from 'react'
import axios from 'axios'


class Users extends Component {
  constructor(props) {
    super(props);
  }

  getUsers = () => {

    const users = []

    axios.get('/categories')
      .then((response)=>{
        users.push(response.data)
      }).catch((error)=>{
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        User Component
      </div>
    );
  }
}

export default Users