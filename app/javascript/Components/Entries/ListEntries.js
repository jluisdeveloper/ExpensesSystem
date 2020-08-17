import React, { useEffect } from 'react'
import axios from 'axios'

const ListEntries = (props) => {
  useEffect( ()=> {
    getEntries()
  }, [])

  const getEntries = () => {
    axios.get('/entries.json')
      .then((response)=> {
        props.getListEntries(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  const { entries } = props



  return(
    <div>
      <table>
        <thead>
          <tr>
            <th> Dia </th>
            <th> Gastos </th>
            <th> Efectivo </th>
            <th> Total del dia </th>
            <th> Usuario </th>
            <th> Tipo de Entrada </th>
          </tr>
        </thead>
        <tbody>
          {
            entries && entries.map(entry => (
              <tr key={ entry.id }>
                <td> { entry.day } </td>
                <td> { entry.totalExpenses } </td>
                <td> { entry.cash } </td>
                <td> { entry.totalEntry } </td>
                <td> { entry.user.name } </td>
                <td> { entry.category.name } </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListEntries;