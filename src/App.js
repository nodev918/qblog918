import './App.css';

import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Profile from './components/views/Profile/Profile'
import Eng_profile from './components/views/Eng_profile/Eng_profile'
import Navbar from './components/Navbar'
//import Home from './components/views/Home/Home'
import Blog from './components/views/Blog/Blog'
import Software from './components/views/Software/Software';
import Socialmedia from './components/views/Socialmedia/Socialmedia';
import Relatedlink from './components/views/Relatedlink/Relatedlink';
import { data } from './data/data.js'
import { blog } from './data/blog/blog.js'

export const DataContext = React.createContext()



function App() {
  //collapse: fetch function
  /*
  const btn = () => {
    console.log("hi")
    fetch('/test', {
      method: "get"
    })
      .then(res => res.json())
      .then(data => console.log("data:", data))
      .catch(err => {
        console.log(err)
      })
  }
  */

  const Main = () => {
    return (
      <div className="App">
        {console.log(blog)}
        { /*<input type="button" value="api測試" onClick={() => { btn() }} />*/}
        <section className="main">
          {/*
          <Route exact path="/">
            <Home />
          </Route>
          */}
          <Route exact path="/">
            <Software />
          </Route>
          <Route path="/main_profile">
            <Profile />
          </Route>
          <Route path="/eng_profile">
            <Eng_profile />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/software">
            <Software />
          </Route>
          <Route path="/socialmedia">
            <Socialmedia />
          </Route>
          <Route path="/relatedlink">
            <Relatedlink />
          </Route>

          <Route path="/layout">
            <div className="sub-nav-con">
              <div>上傳中　 </div>
              <div className="sub-nav">
                <a href="#1" className="link-css" >PS4 clone </a>  |
                <a href="#2" className="link-css" > NETFLIX clone </a>  |
                <a href="#3" className="link-css" > Discuz! clone</a>
              </div>
            </div>
          </Route>
          <Route path="/blog">...部落格 施工中...</Route>

        </section>
      </div>
    )
  }

  return (

    <DataContext.Provider value={ {data:data,blog:blog} }>
        <BrowserRouter>
          {/*console.log(data)*/}
          <Navbar />
          <Main />
        </BrowserRouter>
      </DataContext.Provider>
  );
}
export default App;