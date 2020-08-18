import React, { Component } from 'react'
import axios from 'axios'
import { CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

import { passCsrfToken } from "../../helpers/permissionCSRF";
import ListUsers from "./ListUsers";
import NewUser from "./NewUser";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: {}
    }
  }

  async componentDidMount() {
    await this.getUsers()
    passCsrfToken(document, axios)
  }

  getUsers = async () => {
    await axios.get('/users.json')
      .then((response)=>{
        this.setState({
          users: response.data
        })
      }).catch((error)=>{
        console.log(error)
      })
  }

  registerUser = async (newUser) => {
    await axios.post('/usuarios',newUser )
      .then((response)=>{
        console.log(response);
        this.getUsers();
      }).catch((error)=>{
        console.log(error);
      })
  }
  //
  // registerUser = async (newUser) => {
  //   console.log(newUser)
  // }

  render() {

    const { users } = this.state

    return (
      <>
        <CRow>
          <CCol lg={12}>
            <CCard>
              <CCardHeader>
                Panel de Usuarios
              </CCardHeader>
              <CCardBody>
                <NewUser
                  getUsers={ this.getUsers }
                  registerUser={ this.registerUser }
                />
                <ListUsers users={ users }/>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Users