import React from 'react'

import {
    List,
    ListItem,
    Icon,
    Text,
  } from '@chakra-ui/react'
  import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

const Tasks = ({tasks, handleEdit, setIsOpen, deleteTodo}) => {
  return (

    <List spacing={3}>
      <Text m={'5px'} fontSize='18px' fontWeight={'500'}>{tasks.length ? '   ' : 'Please input a task ...' }</Text>
            {tasks.map((todo, index) => (
              <ListItem key={index} 
              backgroundColor='#75c9b7'
               m={'5'}
                rounded='5'
                 width={'200px'}
                 _hover={{ cursor: 'pointer',
                 opacity: 0.5, transition: '1s ease', backgroundColor:'#75c9b7'}}
                 >
                <Text m={'5px'} fontSize='18px' fontWeight={'500'}>{todo.task}</Text>
                {/* <Text> {todo.id} </Text> */}
                <Icon as={ FaTrashAlt } 
                onClick={() => deleteTodo(todo.id)}
                 m={'5px'}
                 fontSize='25px'
                 />

                <Icon as={ FaPencilAlt } onClick={() => {
                   handleEdit(todo.id);
                   setIsOpen(true);
                 }}
                 m={'5px'}
                 fontSize='25px'
                 />
              </ListItem>
            ))}
          </List>
 
  )
}

export default Tasks
