import React, { Component } from 'react'
import ListEntries from "./ListEntries";
import NewEntry from "./NewEntry";

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  getListEntries = (entries) => {
    this.setState({
      entries
    })
  }

  mostrarEntrys = (entries) => {
    this.setState({
      entries
    })
  }


  render() {
    const { currentUser, categories, users } = this.props
    return (
      <>
        Entry Component
        {/*<h1> Usuario Logeado : { currentUser.name } </h1>*/}
        {/*<h2> Rol : { currentUser.rol } </h2>*/}
        {/*<ListEntries*/}
        {/*  getListEntries = { this.getListEntries }*/}
        {/*  entries = { this.state.entries }*/}
        {/*/>*/}
        {/*<NewEntry*/}
        {/*  categories = { categories }*/}
        {/*  users = { users }*/}
        {/*  entries = { this.state.entries }*/}
        {/*  mostrarEntrys = { this.mostrarEntrys }*/}
        {/*/>*/}
      </>
    );
  }
}

export default Entries;