import React, { useState, useEffect } from 'react'
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


const ModalUser = props => {
  const [ModalStatus, setModalStatus] = useState(false);
  const [user, setUser] = useState({});

  useEffect( ()=> {
    console.log(props)
  }, [])

  const modalToggle = () => {
    setModalStatus(!ModalStatus)
  }

  return(
    <CModal show={ModalStatus} onClose={() => modalToggle()}>
      <CModalHeader closeButton>
        <CModalTitle>
          Registrar nuevo proveedor
        </CModalTitle>
      </CModalHeader>
      <CForm className="form-horizontal">
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
                     // ref={this.nameRef}
                     className="form-control"
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="5">
              <CLabel>
                DNI
              </CLabel>
            </CCol>
            <CCol xs="12" md="7">
              <input type="text"
                     name="dni"
                     //ref={this.dniRef}
                     className="form-control"
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="5">
              <CLabel>
                Email
              </CLabel>
            </CCol>
            <CCol xs="12" md="7">
              <input type="text"
                     name="email"
                     //ref={this.emailRef}
                     className="form-control"
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="5">
              <CLabel>
                Password
              </CLabel>
            </CCol>
            <CCol xs="12" md="7">
              <input type="password"
                     name="password"
                     //ref={this.passwordRef}
                     className="form-control"
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="5">
              <CLabel>
                Confirmar Password
              </CLabel>
            </CCol>
            <CCol xs="12" md="7">
              <input type="password"
                     name="password_confirmation"
                     //ref={this.passwordConfirmationRef}
                     className="form-control"
              />
            </CCol>
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={() => this.modalToggle()}>
            Cancelar
          </CButton>
          {/*<CButton color="success" onClick= { ()=> handleSubmit() } >*/}
          {/*  Registrar*/}
          {/*</CButton>*/}
        </CModalFooter>
      </CForm>
    </CModal>

  )
}
export default ModalUser;