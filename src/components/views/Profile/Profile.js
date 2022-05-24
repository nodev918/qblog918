import photo from './images/pho.png'
import ig1 from './images/ig1.png'
import fb from './images/fb.png'
import ig from './images/ig.png'
import tw from './images/tw.png'
import './profile.css'


const Profile = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title mb-6">徐俊彥 Yale Hsu </h1>
        <img src={photo} className="block mb-6" alt="個人相片"></img>

        <div className="education mb-9">
          <h2 className="subTitle mb-2">學歷<span>EDUCATION</span></h2>
          <ul>
            <li className="mb-3">國立東華大學 資訊工程學系 | 2003-2006</li>
            <li className="mb-3">國立東華大學 資訊管理學系 | 2013-2015</li>
          </ul>
        </div>
      </div>

      <div className="darkBlue mb-9">
        <div className="skills pt-3">
          <h2 className="subTitle subTitle-white mb-5">
            技能 <span>SKILL</span>
          </h2>
          <ul className="skills-content">
            <li>Html | CSS | JavaScript</li>
            <li>Reactjs | Vuejs</li>
            <li>Webpack</li>
            <li>RWD</li>
            <li>Nodejs | expressjs</li>
            <li>RESTful API</li>
            <li>Database CRUD</li>
            <li>Continous Delivery</li>
            <li>C-C++ | Java | Python</li>
            <li>MSSQL | MYSQL</li>
            <li>Fast Learning</li>
            <li>語言：英文良好</li>
          </ul>
        </div>
      </div>

      <div className="container work">
        <h2 className="subTitle mb-2">工作經驗
          <span>WORK EXPERIENCE</span>
        </h2>
        <ul>
          <li className="mb-3">
            <h3>花蓮。美崙釧庭數學 | 2008/07 - 2018/06</h3>
            <img className="tup block mt-1 mb-1" src={ig1} alt="icon" />
            <p>十年國中數學教育經驗，具備良好經營管理、課程設計、資訊傳遞能力；同時亦開設兒童程式設計課程。</p>
          </li>
          <li className="mb-3">
            <h3>華霏國際貿易門市 活動企劃 | 2020</h3>
          </li>
          <li className="mb-3">
            <h3>綿羊雲 Q系列專案 web網站/軟體設計開發 | 2021</h3>
          </li>

        </ul>
      </div>

      <div className="darkBlue">
        <div className="container footer">
          <h2 className="subTitle subTitle-white mb-4">
            聯絡方式 <span>CONTACT METHOD</span>
          </h2>
          <ul className="method">
            <li className="mb-2">Mail：yale918@gmail.com</li>

            <li className="mb-2">Teipei, Taiwan</li>
            <div className="modify">
              <li className="mb-2"><a href="https://Qblog918.herokuapp.com" >個人網站</a> </li>
              <li className="mb-2"><a href="https://igclone918.herokuapp.com" target="_blank" rel="noreferrer">作品連結</a> </li>
            </div>

            <li className="mb-2">
              <img src={fb} alt="fb logo" height="2%" width="2%" />
              <img src={ig} alt="ig logo" />
              <img src={tw} alt="tw logo" height="5%" width="5%" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Profile