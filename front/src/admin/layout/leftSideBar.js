import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../admin/assets/img/dash.png';

var activeTab = '';
function leftSideBar(e) { 
     activeTab = e.activeTab;

  function buttonBackgroundColor(e){
      activeTab = e;
  }

  
    return (
      <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark bg-white" id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <Link className="navbar-brand m-0" to="">
        <img src={Logo} className="navbar-brand-img h-100" alt="main_logo"/>
        <span className="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
      </Link>
    </div>
    <hr className="horizontal light mt-0 mb-2"/>
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={activeTab===''?'nav-link text-white active bg-gradient-primary':'nav-link text-white'}
           to="../admin/dashboard" 
           onClick={event => buttonBackgroundColor('')}>
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">dashboard</i>
            </div>
            <span className="nav-link-text ms-1">Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={activeTab==='category'?'nav-link text-white active bg-gradient-primary':'nav-link text-white'}
           to="../admin/category" 
           onClick={event => buttonBackgroundColor('category')}>
            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i className="material-icons opacity-10">table_view</i>
            </div>
            <span className="nav-link-text ms-1">Category</span>
          </Link>
        </li>
            </ul>
    </div>
    <div className="sidenav-footer position-absolute w-100 bottom-0 ">
      <div className="mx-3">
      </div>
    </div>
  </aside>
    );
  }
  
  export default leftSideBar;
  