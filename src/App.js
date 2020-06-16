import React from "react";
import {Route} from 'react-router-dom';
import Home from './components/home'
import Form from './components/pizzaForm'

const App = () => {
  return (
    <div>
      <Route exact path='/' render={() => <Home/>}/>
      <Route  path='/pizza' render={() => <Form/>}/>
    </div>
  );
};
export default App;
