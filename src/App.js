import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <Switch>
     <Route path='/login' component={Login} />
     <Route path='/' component={SignUp} />
   </Switch>
    </div>
  );
}

export default App;
