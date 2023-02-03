import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, Switch } from 'react-router-dom';
import Mymodal from './components/Mymodal';

function App() {
  return (
    <div className='App'>
      <Switch>
      <Route exact path='/'>
        <Navbar />
        <Mymodal/>
        <News category=""/>
      </Route>
      <Route exact path='/business'>
        <Navbar />
        <Mymodal/>
        <News category='business' />
      </Route>
      <Route exact path='/entertainment'>
        <Navbar  />
        <Mymodal/>
        <News category="entertainment" />
      </Route>
      <Route exact path='/general'>
        <Navbar />
        <Mymodal/>
        <News category="general" />
      </Route>
      <Route exact path='/health'>
        <Navbar />
        <Mymodal/>
        <News category="health" />
      </Route>
      <Route exact path='/science'>
        <Navbar />
        <Mymodal/>
        <News category="science" />
      </Route>
      <Route exact path='/sports'>
        <Navbar />
        <Mymodal/>
        <News category="sports" />
      </Route>
      <Route exact path='/technology'>
        <Navbar />
        <Mymodal/>
        <News category="technology" />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
