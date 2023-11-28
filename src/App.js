import Home from './todo/Home'
import SignUpComponent from './Form/SignUp';
import SignInComponent from './Form/SignIn';
import SignOutComponent from './Form/SignOut';
import AddTodo from './button/AddTodo';
import UpdateTodo from './button/UpdateTodo';
import DeleteTodo from './button/DeleteTodo';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const handleSignUpClick = () => {
    console.log('Clicked on Sign Up');
  };

  const handleSignInClick = () => {
    console.log('Clicked on Sign In');
  };

  const handleSignOutClick = () => {
    console.log('Clicked on Sign Out');
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signup" onClick={handleSignUpClick}>Sign Up</Link>
          </li>
          <li>
            <Link to="/signin" onClick={handleSignInClick}>Sign In</Link>
          </li>
          <li>
            <Link to="/signout" onClick={handleSignOutClick}>Sign Out</Link>
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
        </ul>
      </nav>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/signin" element={<SignInComponent />} />
        <Route path="/signout" element={<SignOutComponent />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/updatetodo" element={<UpdateTodo />} />
        <Route path="/deletetodo" element={<DeleteTodo />} />
      </Routes>
    </Router>
  );
}

export default App;