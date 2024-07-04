import './App.css';
import React from 'react'
import NavBar from './components/NavBar'
import NewsContent from './components/NewsContent'
import { Route,Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'


export default function App  (props){
    {document.title="NewsBoy"}
    // const API_KEY= process.env.REACT_APP_NEWS_API;
    // const API_KEY=process.env.REACT_APP_NEWS_API
    const API_KEY=props.API_KEY
    console.log(API_KEY,"dff",process.env)
    return (
      <div>
        <Router>
        <NavBar></NavBar>
          <Routes>
        <Route exact path="/home"   element={<NewsContent key="general" API_KEY={API_KEY} category="general" />}></Route>
        <Route excat  path="/bussines" element={<NewsContent key="bussines" API_KEY={API_KEY} category="business"  />}></Route>
        <Route exact path="/sports"  element={<NewsContent key="sports" API_KEY={API_KEY}  category="sports" />}></Route>
        <Route exact path="/entertainment"  element={<NewsContent key="entertainment" API_KEY={API_KEY}  category="entertainment" />}></Route>
        <Route exact path="/health"  element={<NewsContent key="health" API_KEY={API_KEY} category="health" />}></Route>
        <Route exact path="/science"  element={<NewsContent key="science" API_KEY={API_KEY}  category="science" />}></Route>
        <Route exact path="/technology"  element={<NewsContent key="technology" API_KEY={API_KEY}  category="technology" />}></Route>
        </Routes>
        </Router>
        </div>
    )
  
}

