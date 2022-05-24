import { Link, Route } from "react-router-dom"
//import popup from './handycom/popup.js'
import './Navbar.css'

const NavBar = () => {

  const navCol1 = (flag) => {
    const subL = document.querySelector('.subLinks1')
    if (flag === 'show') {
      console.log("show block 1")
      subL.children[0].classList.remove('hidden')
      subL.children[1].classList.remove('hidden')
      subL.classList.toggle('show')
    }
    else {
      console.log("hide block 1")
    }

  }
  //navCol2
  /*
  const navCol2 = (flag) => {
    if (flag === "show") {
      console.log("enter block: 2")
      const subL2 = document.querySelector('.subLinks2')
      //console.log("subL: ", subL)
      subL2.children[0].classList.remove('hidden')
      subL2.children[1].classList.remove('hidden')
      //console.log("subL child:", subL.children[0].children[0])
      subL2.classList.add('show')
    }
    else {
      console.log("hide navCol2")
    }
  }
*/
  const navCol3 = (flag) => {
    if (flag === "show") {
      console.log("enter block: 3")
      const subL2 = document.querySelector('.subLinks3')
      //console.log("subL: ", subL)
      subL2.children[0].classList.remove('hidden')
      subL2.children[1].classList.remove('hidden')

      //console.log("subL child:", subL.children[0].children[0])
      subL2.classList.add('show')
    }
    else if (flag === "hidden") {
      console.log("hide navCol3")

    }
  }

  return (
    <>
      {//<div id="cv" onClick={() => { popup()}}>click</div>//
      }
      <Route>
        <section className="header">
          <div className="mynav">
            <div className="logo-container"><Link to="/" className="link-css logo">綿羊部落</Link> </div>
            <ul className="nav">
              <li onMouseEnter={() => { navCol1('show') }} onMouseOut={() => { navCol1('hidden') }}>
                <div className="link-title-css" to='/profile'>CV履歷▼</div>
                <div className="subLinks1">
                  <div className="hidden"><Link className="link-css" to='/main_profile'>中文履歷</Link></div>
                  <div className="hidden"><Link className="link-css" to='/eng_profile'>Eng. CV</Link></div>
                </div>
              </li>
              {/* 
            <li onMouseEnter={() => { navCol2('show') }}>
              <div className="link-title-css" to='/layout'>切版練習▼</div>
              <div className="subLinks2">
                <div className="hidden"><a className="link-css" href="#" >PS5練習</a></div>
                <div className="hidden"><a className="link-css" href="#" >Netflix練習</a></div>
              </div>
            </li>
            */}

              <li onMouseEnter={() => { navCol3('show') }}>
                <div className="link-title-css" >網站作品▼</div>
                <div className="subLinks3">
                  <div className="hidden"><a className="link-css" href="https://igclone918.herokuapp.com" target="_blank" rel="noreferrer">QP社群網站</a></div>
                  <div className="hidden"><a className="link-css" href="https://qdoc918.herokuapp.com" target="_blank" rel="noreferrer">QD雲端共筆</a></div>
                  {/*
                <div className="hidden"><Link className="link-css" to='/qblog'>qb部落格(x)</Link></div>
                <div className="hidden"><Link className="link-css" to='/qadmin'>qa後台系統(x)</Link></div>
                 */}

                </div>
              </li>
            </ul>

          </div>
          <div className="mynav2">
            <ul className="nav2">
              <li><Link to="/blog" className="link-css2">部落格</Link></li>
              <li><Link to="/software" className="link-css2">開發中</Link></li>
              <li><Link to="/socialmedia" className="link-css2">社群</Link></li>
              <li><Link to="/relatedlink" className="link-css2">連結</Link></li>

            </ul>
          </div>
        </section>
      </Route>
    </>
  )
}
export default NavBar
