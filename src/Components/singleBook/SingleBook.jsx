import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBook = () => {
    const {id}=useParams();
  return (
    <div>Our Single Book {id}</div>
  )
}

export default SingleBook