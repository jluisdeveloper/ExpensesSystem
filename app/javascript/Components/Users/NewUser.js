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

const NewUser = props => {
  const [ModalStatus, setModalStatus] = useState(false);
  const nameRef = React.createRef();
  const dniRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const passwordConfirmationRef = React.createRef();


  const modalToggle = () => {
    setModalStatus(!ModalStatus);
  }

  const handleSubmit = () => {
    const newUserParam = {
      name: nameRef.current.value,
      dni: dniRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    }
    props.registerUser(newUserParam);
    modalToggle()
  }

  const prepareNewUser = () => {
    modalToggle();
  }

  return(
    <>
      <CButton
        color="success"
        size="sm"
        className="mb-3 float-right"
        onClick ={ ()=> {
          prepareNewUser()
          }
        }
      >
        Registrar nuevo usuario
      </CButton>


      <CModal show={ ModalStatus } onClose={ ()=> modalToggle() } >
        <CModalHeader closeButton>
          <CModalTitle>
            Registrar nuevo proveedor
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
              <CFormGroup row>
                <CCol md="5">
                  <CLabel>
                    DNI
                  </CLabel>
                </CCol>
                <CCol xs="12" md="7">
                  <input type="text"
                         name="dni"
                         ref={dniRef}
                         className= "form-control"
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row >
                <CCol md="5">
                  <CLabel>
                    Email
                  </CLabel>
                </CCol>
                <CCol xs="12" md="7">
                  <input type="text"
                         name="email"
                         ref={emailRef}
                         className= "form-control"
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
                         ref={passwordRef}
                         className= "form-control"
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
                         ref={passwordConfirmationRef}
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

export default NewUser;