import React from 'react';
import NavBar from './Responsive NavBar/Navbar'
import ToDoList from './ToDoList';
import SideNavbar from './Responsive NavBar/SideNavbar';
import Nav from './Responsive NavBar/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContactNav from './Responsive NavBar/ContactNav';

const App = () => {

  return (
    <>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/navbar1' element={<NavBar />} />
            <Route exact path='/sidenavbar' element={<SideNavbar />} />
            <Route exact path='/todolist' element={<ToDoList />} />
            <Route exact path='/contact' element={<ContactNav />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;

