import React, { useState } from 'react'
import { CButton,
  CForm,
  CFormGroup,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CCol
} from '@coreui/react'

const NewCategory = props => {
  const [ModalStatus, setModalStatus] = useState(false);
  const nameRef = React.createRef();


  const modalToggle = () => {
    setModalStatus(!ModalStatus);
  }

  const handleSubmit = () => {
    const newCategoryParam = {
      name: nameRef.current.value,
    }
    props.registerCategory(newCategoryParam);
    modalToggle()
  }
  

  return(
    <>
      <CButton
        color="success"
        size="sm"
        className="mb-3 float-right"
        onClick ={ ()=> {
          modalToggle()
          }
        }
      >
        Registrar nueva Categoria
      </CButton>


      <CModal show={ ModalStatus } onClose={ ()=> modalToggle() } >
        <CModalHeader closeButton>
          <CModalTitle>
            Registrar nueva Categoria
          </CModalTitle>
        </CModalHeader>
        <CForm className="form-horizontal" >
          <CModalBody>
            <CFormGroup row>
              <CCol md="5">
                <CLabel>
                  Nombre
                </CLabel>
              </CCol>
              <CCol xs="12" md="7">
                <input type="text"
                       name="name"
                       ref={nameRef}
                       className= "form-control"
                />
              </CCol>
            </CFormGroup>
          </CModalBody>
          <CModalFooter>
            <CButton color="danger" onClick= { ()=> modalToggle() } >
              Cancelar
            </CButton>
            <CButton color="success" onClick= { ()=> handleSubmit() } >
              Registrar
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  )
}

export default NewCategory;