import React, { useState } from 'react';
import NavBar from './Responsive NavBar/Navbar'
import ToDoList from './ToDoList';
import SideNavbar from './Responsive NavBar/SideNavbar';


const App = () => {


  return (
    <>
      <div>
        <NavBar />
        <SideNavbar />
        <ToDoList />
      </div>
    </>
  );
};

export default App;

