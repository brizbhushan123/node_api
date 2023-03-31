import React from 'react';

function Header (){

    return (
      <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
      <div className="container-fluid py-1 px-3">
        <nav aria-label="breadcrumb">
          
          <h6 className="font-weight-bolder mb-0">Dashboard</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group input-group-outline">
              <label className="form-label">Type here...</label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <span className="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank">Online Builder</span>
            </li>
            <li className="nav-item d-flex align-items-center">
              <span href="../pages/sign-in.html" className="nav-a text-body font-weight-bold px-0">
                <i className="fa fa-user me-sm-1" aria-hidden="true"></i>
                <span className="d-sm-inline d-none">Sign In</span>
              </span>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <span  className="nav-a text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </span>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <span  className="nav-a text-body p-0">
                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" ></i>
              </span>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <span  className="nav-a text-body p-0" id="dropdownMenuButton" >
                <i className="fa fa-bell cursor-pointer" ></i>
              </span>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4">
                <li className="mb-2">
                  <span className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1" aria-hidden="true"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </span>
                </li>
                <li className="mb-2">
                  <span className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New album</span> by Travis Scott
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1" aria-hidden="true"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                        
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary mb-0">
                          <i className="fa fa-clock me-1" aria-hidden="true"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  );
  }

  
  export default Header;
  