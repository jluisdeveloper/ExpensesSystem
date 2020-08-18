import React, { Component } from 'react'
import axios from 'axios'
import { CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

import { passCsrfToken } from "../../helpers/permissionCSRF";

import ListCategories from "./CategoriesList";
import NewCategory from "./NewCategory";


class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  async componentDidMount() {
    await this.getCategories()
    passCsrfToken(document, axios)
  }

  getCategories = async () => {
    await axios.get('/categories.json')
      .then((response)=>{
        this.setState({
          categories: response.data
        })
      }).catch((error)=>{
        console.log(error)
      })
  }

  registerCategory = async (newCategory) => {
    await axios.post('/categories',newCategory )
      .then((response)=>{
        console.log(response);
        this.getCategories();
      }).catch((error)=>{
        console.log(error);
      })
  }

  render() {
    const { categories } = this.state
    return (
      <>
        <CRow>
          <CCol lg={12}>
            <CCard>
              <CCardHeader>
                Panel de Categorias
              </CCardHeader>
              <CCardBody>
                <NewCategory registerCategory={ this.registerCategory }/>
                <ListCategories categories={ categories }/>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    );
  }
}

export default Categories;