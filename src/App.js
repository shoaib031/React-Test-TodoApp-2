import React from 'react';

import Home from './todo/Home';
import SignUp from './Form/SignUp'
import SignIn from './Form/SignIn'
import SignOut from './Form/SignOut'
import AddTodo from './button/AddTodo'
import UpdateTodo from './button/UpdateTodo'
import DeleteTodo from './button/DeleteTodo'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/addtodo">Add Todo</Link>
          </li>
          <li>
            <Link to="/updatetodo">Update Todo</Link>
          </li>
          <li>
            <Link to="/deletetodo">Delete Todo</Link>
          </li>
          <li>
            <Link to="/signout">Sign Out</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/updatetodo" element={<UpdateTodo />} />
        <Route path="/deletetodo" element={<DeleteTodo />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;