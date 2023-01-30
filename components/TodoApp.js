import React, { useState, useEffect } from "react";
import {
  Stack,
  ThemeProvider,
  Flex,
  CSSReset,
  Container,
  useColorMode, 
  Button,
  Text,
  ColorModeProvider,
} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
import Header from "./Header";
import TaskForm from "./TaskForm";
import Tasks from "./Tasks";
import EditModal from "./EditModal";
import { FaMoon, FaSun } from "react-icons/fa"

import customTheme from "../utils/theme";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()

  const [isDark, setIsDark] = useState(colorMode === 'dark')


  const addTodo = (task) => {
    setTodos([...todos, { task, id: uuidv4() }]);
    localStorage.setItem('todos', JSON.stringify([...todos, { task, id: uuidv4() }]));
};

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo.id !== id)));
};

const handleEdit = (id) => {
  const task = todos.find((todo) => todo.id === id);
  setEditing(task);
};

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    console.log(storedTodos)
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const updateTask = (id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        return {...todo, task: editing.task};
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setEditing(null);
    setTask("");
  }

  return (
    <ThemeProvider theme={customTheme}  >
      <CSSReset />
      <Container 
       width="100%" 
       bg={colorMode === "light" ? "gray.50" : "gray.900"}
       m={0}>

    <ColorModeProvider>
      <Text>Toggle Color Mode</Text>
      <Button onClick={() => toggleColorMode()}>
      {colorMode === "dark" ? <FaSun fontSize={'25px'}/> : <FaMoon fontSize={'25px'}/>}
    </Button>
    </ColorModeProvider>

      <Flex align="center" justify="center" direction="column" minH="100vh" >
        <Header />
        <TaskForm setTask={setTask} addTask={addTodo}  task={task}/>
        <Stack spacing={3} >

          <Tasks tasks={todos} 
          handleEdit={handleEdit} 
          setIsOpen={setIsOpen} 
          deleteTodo={deleteTodo}/>

          <EditModal editing={editing}
          setEditing={setEditing}
          updateTask={updateTask}/>

        </Stack> 
      </Flex>

      </Container>
    </ThemeProvider>
  );
};

export default TodoApp;