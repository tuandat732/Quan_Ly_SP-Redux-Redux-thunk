import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import routers from './routers'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
       <Menu/>


        <div className="container">

          <div className="row">
            

            {this.showContentMenus()}
          </div>

        </div>

        </Router>
    );
  }

  showContentMenus=()=>{
    let result = routers.map((route,index)=>(
      <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    ))
    return <Switch>{result}</Switch>
  }

}

export default App;
