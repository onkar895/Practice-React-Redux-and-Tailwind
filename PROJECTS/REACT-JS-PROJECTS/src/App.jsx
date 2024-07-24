import React, { useState } from 'react';
import NavBar from './Navbar'
import ToDoList from './ToDoList';

const App = () => {


  return (
    <>
      <div>
        <NavBar />
        <ToDoList />
      </div>
    </>
  );
};

export default App;

