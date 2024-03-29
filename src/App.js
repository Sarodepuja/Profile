import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/Login/login';
import Register from './components/register/register';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const[user, setLoginUser]=useState({})
  return (
    <div className="App">
      
      <Router>
        <Switch>
        <Route exact path='/'>
            {user && user._id ? <Homepage setLoginUser={setLoginUser}/> : <Login setLoginUser={setLoginUser}/>}<Homepage/></Route>
          <Route path='/login'>
            <Login setLoginUser={setLoginUser}/>
            </Route>
          <Route path='/register'>
            <Register/>
            </Route>

        </Switch>
      </Router>
      <Homepage/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
