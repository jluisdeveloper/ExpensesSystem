import React, { useEffect } from 'react';
import axios from 'axios';

const CategoriesList = (props) => {
  useEffect( ()=> {
    getListCategories();
  }, [])

  const getListCategories = () => {
    axios.get('/categories.json')
      .then((response)=> {
        props.getCategoriesList(response.data)
      }).catch((error)=>{
      console.log(error)
    })
  }

  const { categories } = props

  return (
    <>
    </>
  )
}

export default CategoriesList;