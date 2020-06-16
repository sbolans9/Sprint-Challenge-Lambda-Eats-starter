import React from "react";
import {Route} from 'react-router-dom'
import Home from './components/home'
import PizzaForm from './components/form'

const App = () => {
  return (
    <div>
      <Route exact path='/' render={ () => <Home/>}/>
      <Route exact path='/pizza' render={ () => <PizzaForm/>}/>
    </div>
  );
};
export default App;
