import Home from './todo/Home'
import SignUpComponent from './Form/SignUp';
import SignInComponent from './Form/SignIn';
import SignOutComponent from './Form/SignOut';
import AddTodo from './button/AddTodo';
import UpdateTodo from './button/UpdateTodo';
import DeleteTodo from './button/DeleteTodo';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSignUpSuccess = (data) => {
    setFormData(data);
    setIsSignedUp(true);
  };

  const handleSignInSuccess = (data) => {
    if (
      data.name === formData.name &&
      data.email === formData.email &&
      data.password === formData.password
    ) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  };

  const handleSignOutClick = () => {
    console.log('Clicked on Sign Out');
    localStorage.removeItem('signInText');
    setIsSignedIn(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          {!isSignedUp && !isSignedIn && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signout" onClick={handleSignOutClick}>
                  Sign Out
                </Link>
              </li>
            </>
          )}
          {isSignedUp && !isSignedIn && <Navigate to="/signin" replace state={formData} />}
          {isSignedIn && (
            <>
              {isSignedIn &&
                <div>
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
                    <Link to="/signout" onClick={handleSignOutClick}>
                      Sign Out
                    </Link>
                  </li>
                </div>
              }
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/signup" element={<SignUpComponent onSignUpSuccess={handleSignUpSuccess} />} />
        <Route path="/signin" element={<SignInComponent isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} onSignInSuccess={handleSignInSuccess} />} />
        <Route path="/signout" element={<SignOutComponent />} />
        <Route path="/addtodo" element={<AddTodo />} />
        <Route path="/updatetodo" element={<UpdateTodo />} />
        <Route path="/deletetodo" element={<DeleteTodo />} />
      </Routes>
    </Router>
  );
}

export default App;
