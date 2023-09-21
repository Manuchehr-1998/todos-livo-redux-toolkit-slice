import React from 'react'
import TodoForm from './TodoForm'

export const CreateModal = ({handleClose}) => {

  return (
        <TodoForm handleClose={handleClose}/>
  )
}
