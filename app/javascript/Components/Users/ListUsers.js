import React, { useState } from 'react'
import { CButton } from '@coreui/react'

import ModalUser from "./ModalUser";

const ListUsers = props => {

  const [user, setUser] = useState({});

  const handleDeleteUser = (user) => {
    props.deleteUser(user)
  }

  const handleUpdateUser = (user) => {
    props.updateUser(user)
  }

  const handleSetUser = (user) => {
    setUser(user);
  }

  const { users } = props
  return(
      <>
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th> # </th>
            <th> Nombre </th>
            <th> Cargo </th>
            <th> DNI </th>
            <th> Email </th>
            <th> Registrado </th>
            <th> Acciones </th>
          </tr>
          </thead>
          <tbody>
          {
            users.length > 0 ?
              users.map((user, index) => (
                <tr key={ user.id }>
                  {/*<td> { (index + 1) + (pagination.currentPage - 1) * pagination.perPages } </td>*/}
                  <td> {index + 1 } </td>
                  <td> { user.name } </td>
                  <td> { user.rol } </td>
                  <td> { user.dni } </td>
                  <td> { user.email } </td>
                  <td> { user.created_at } </td>
                  <td>
                    <CButton
                      color="warning"
                      size="sm"
                      className="mr-2"
                      onClick ={ ()=> {
                        handleSetUser();
                      }
                      }
                    >
                      Editar
                    </CButton>
                    <CButton
                      color="danger"
                      size="sm"
                      onClick ={ ()=> handleDeleteUser(user) }
                    >
                      Eliminar
                    </CButton>
                  </td>
                </tr>
              )) :
              <tr>
                <td>
                  No hay registros para mostrar
                </td>
              </tr>
          }
          </tbody>
        </table>

        <ModalUser
          user={ user ? user : null }
          modalType= "update"
        />
      </>


  )
}

export default ListUsers;