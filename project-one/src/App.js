import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Users from './Users';
import UpdateUser from './UpdateUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<UpdateUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
