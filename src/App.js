import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import NewsContent from './components/NewsContent'
import { Route,Routes, Switch, NavLink, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'


export default class App extends Component {
  render() {
    {document.title="NewsBoy"}
    return (
      <div>
        <Router>
        <NavBar></NavBar>
          <Routes>
        <Route exact path="/"   element={<NewsContent key="general" category="general" />}></Route>
        <Route excat  path="/bussines" element={<NewsContent key="bussines" category="business"  />}></Route>
        <Route exact path="/sports"  element={<NewsContent key="sports"  category="sports" />}></Route>
        <Route exact path="/entertainment"  element={<NewsContent key="entertainment"  category="entertainment" />}></Route>
        <Route exact path="/health"  element={<NewsContent key="health"  category="health" />}></Route>
        <Route exact path="/science"  element={<NewsContent key="science"  category="science" />}></Route>
        <Route exact path="/technology"  element={<NewsContent key="technology"  category="technology" />}></Route>
        </Routes>
        </Router>
        </div>
    )
  }
}

