import React from 'react';
import NavBar from './Responsive NavBar/Navbar'
import ToDoList from './ToDoList';
import SideNavbar from './Responsive NavBar/SideNavbar';
import Nav from './Responsive NavBar/Nav';

const App = () => {

  return (
    <>
      <div>
        <Nav />
        <SideNavbar />
        <NavBar />
        <ToDoList />
      </div>
    </>
  );
};

export default App;

