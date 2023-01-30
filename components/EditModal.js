import React from 'react'
import {
    Input,
    Button,
    Container,
    Modal, ModalOverlay, ModalContent, ModalHeader,
     ModalBody, ModalFooter, FormControl
  } from '@chakra-ui/react'

const EditModal = ({isOpen, editing, setEditing, updateTask}) => {
  return (
    <Modal isOpen={editing !== null}   
    justifyContent = 'center'
    alignItems={'center'}>
    <ModalOverlay />
    <ModalContent maxW={'300px'}
    width={'650px'}
    justifyContent = 'center'
    alignItems={'center'}
    bg='rgba(112, 111, 109, 0.85)' 
    rounded={'5px'}
    maxH={'300px'}
    height={'300px'}
    alignSelf='center'
    justifySelf='center'
    mx={'auto'}
    >
    <Container width={'300'}>
      <ModalHeader>Edit Task</ModalHeader>
      
      <ModalBody>
        <FormControl>
          <Input value={editing ? editing.task : ""} 
          onChange={(e) => setEditing({...editing, task: e.target.value})}
           placeholder="Enter Task" />
        </FormControl>
      </ModalBody>
  
      <ModalFooter>
        <Button onClick={() => setEditing(null)} backgroundColor ={"gray"} m='20px' rounded={'5%'} p={'5px'}>Cancel</Button>
        <Button onClick={() => updateTask(editing.id)} backgroundColor ={"gray"} m='20px' rounded={'5%'} p={'5px'}>Save</Button>
      </ModalFooter>
      </Container>
    </ModalContent>
  </Modal>
  
  )
}

export default EditModal
