import React, { Component } from 'react'
import axios from 'axios'

class TypeEntries extends Component {
  constructor() {
    super();
    this.state = {
      typeEntriesList: []
    }
  }

  componentDidMount() {
    this.getTypeEntries();
  }


  getTypeEntries = async () => {
    let that = this
    await axios.get('/categories.json')
      .then(function (response){
        that.setState({
          typeEntriesList: response.data.categories
        })
      }).catch(function (error){
        console.log(error)
    })
  }

  render() {
    const { typeEntriesList } = this.state

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th> # </th>
              <th> Nombre </th>
            </tr>
          </thead>
          <tbody>
          {
            typeEntriesList.map(typeEntry => (
              <tr key={ typeEntry.id }>
                <td>
                  { typeEntry.id }
                </td>
                <td>
                  { typeEntry.name }
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default TypeEntries;