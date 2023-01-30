import React from 'react'
import {v4 as uuidv4} from "uuid"
import { useEffect } from 'react'
import { Stack, Input, Button } from '@chakra-ui/react'

const TaskForm = ({task, addTask, setTask}) => {


  return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTask(task);
              setTask("");
            }}
          >
            <Stack spacing={3} rounded='3'
             backgroundColor='#75c9b7'
              height='80px'
               width={'200px'} rounded={'5'}>
              <Input
              rounded={'3'}
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder=" Enter Task..."
                m={'5px'}
                backgroundColor="mintcream"
                color={'black'}
              />
              <Button backgroundColor='mintcream'
               width={'50%'}
               rounded='5'
               color={'black'}
               fontWeight={'bold'}
               marginBottom={'5px'}
                alignSelf='center'
                type="submit"
                p={'5'}
                 >Add Todo</Button>
            </Stack>
          </form>
  )
}

export default TaskForm
