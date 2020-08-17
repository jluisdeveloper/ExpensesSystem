import React from 'react'
import { CButton } from '@coreui/react'

const ListUsers = props => {

  const { users } = props
  return(

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
                    // onClick ={ ()=> {
                    //   this.setMaterial(material);
                    //   this.openModal();
                    // }
                    // }
                  >
                    Editar
                  </CButton>
                  <CButton
                    color="danger"
                    size="sm"
                    // onClick ={ ()=> handleDeleteMaterial(material) }
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

  )
}

export default ListUsers;