import React from 'react'
import { CButton } from '@coreui/react'

const ListCategories = props => {

  const { categories } = props
  return(
    <table className="table table-striped table-hover">
      <thead>
      <tr>
        <th> # </th>
        <th> Nombre </th>
      </tr>
      </thead>
      <tbody>
      {
        categories.length > 0 ?
          categories.map((category, index) => (
            <tr key={ category.id }>
              {/*<td> { (index + 1) + (pagination.currentPage - 1) * pagination.perPages } </td>*/}
              <td> {index + 1 } </td>
              <td> { category.name } </td>
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

export default ListCategories;