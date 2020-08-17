import React from 'react'
import axios from 'axios'

import { passCsrfToken } from "../../helpers/permissionCSRF";

const NewEntry = props => {

  const dayRef = React.createRef();
  const totalExpensesRef = React.createRef();
  const cashRef = React.createRef();
  const totalEntryRef = React.createRef();
  const category_idRef = React.createRef();
  const user_idRef = React.createRef();


  const handleSubmit = (event) => {
    passCsrfToken(document, axios)
    const ultra = props.entries
    event.preventDefault();
    const EntryParams =
      {
        day: dayRef.current.value,
        totalExpenses: totalExpensesRef.current.value,
        cash: cashRef.current.value,
        totalEntry: totalEntryRef.current.value,
        category_id: category_idRef.current.value,
        user_id: user_idRef.current.value
      }

    axios.post('/entries', EntryParams )
      .then((response)=> {
        console.log(response);
        ultra.push(EntryParams)
        props.mostrarEntrys(ultra)
        //console.log(ultra)
      }).catch((error)=>{
        console.log(error)
    })

    event.currentTarget.reset();
  }



  const { categories, users } = props

  return(
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="day"> Dia </label>
        <input type="text" name= "day" ref={ dayRef } /> <br/>
        <label htmlFor="totalExpenses"> Total de Gastos </label>
        <input type="text" name= "totalExpenses" ref={ totalExpensesRef } /> <br/>
        <label htmlFor="cash"> Efectivo </label>
        <input type="text" name= "cash" ref={ cashRef } /> <br/>
        <label htmlFor="totalEntry"> Total de Ingreso </label>
        <input type="text" name= "totalEntry" ref={ totalEntryRef } /> <br/>
        <select name="category_id" id="" ref={ category_idRef }>
          {
            categories && categories.map(category => (
              <option key={ category.id } value={ category.id } > { category.name} </option>
            ))
          }
        </select>
        <select name="user_id" id="" ref={ user_idRef }>
          {
            users && users.map(user => (
              <option key={ user.id } value={ user.id } > { user.name} </option>
            ))
          }
        </select>
        <br/><br/>
        <button>
          Registrar
        </button>
      </form>
    </div>
  )
}

export default NewEntry;