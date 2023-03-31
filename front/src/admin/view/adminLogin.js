import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/material-dashboard.css';
import '../assets/css/nucleo-icons.css';
//import Redirect from 'react-router-dom';

const message = '';

class adminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: ''
                };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  
  render(){ 

    const HandleSubmit = async (e)=>{
      e.preventDefault();  
      var email = this.state.email;
      var password = this.state.password;
     
        try {
          let res = await fetch("http://localhost:3000/admin/", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
            headers: {
              "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json',
            } 
          });
          
          let resJson = await res.json();debugger;  
          if (resJson.status) {
            toast.success(resJson.msg, {position: toast.POSITION.TOP_RIGHT});
            window.location.replace('/admin/dashboard');
          } 
          else {
            toast.error(resJson.msg, {position: toast.POSITION.TOP_RIGHT});
          }
        } catch (err) {
          console.log(err);
        }
      }
    return (
      
  <main className="main-content  mt-0">
    <div>
        <ToastContainer />
    </div>
    <div className="page-header align-items-start min-vh-100" >
      <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                  <div className="row mt-3">
                    <div className="col-2 text-center ms-auto">
                      <span className="btn btn-link px-3">
                        <i className="fa fa-facebook text-white text-lg"></i>
                      </span>
                    </div>
                    <div className="col-2 text-center px-1">
                      <span className="btn btn-link px-3" >
                        <i className="fa fa-github text-white text-lg"></i>
                      </span>
                    </div>
                    <div className="col-2 text-center me-auto">
                      <span className="btn btn-link px-3" >
                        <i className="fa fa-google text-white text-lg"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form className="text-start" onSubmit={HandleSubmit}>
                  <div className="input-group input-group-outline my-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  <div className="input-group input-group-outline mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange}/>
                  </div>
                  <div className="form-check form-switch d-flex align-items-center mb-3">
                    <input className="form-check-input" type="checkbox" id="rememberMe" checked/>
                    <label className="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                  </div>
                  <div className="text-center">
                    <input type="submit" className="btn bg-gradient-primary w-100 my-4 mb-2" value="Submit"/>
                    <div className="message">{message ? <p>{message}</p> : null}</div>
                  </div>
                  <p className="mt-4 text-sm text-center">
                    Don't have an account?
                    
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer position-absolute bottom-2 py-2 w-100">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-12 col-md-6 my-auto">
              <div className="copyright text-center text-sm text-white text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>,
                made with <i className="fa fa-heart" aria-hidden="true"></i> by
                <span href="https://www.creative-tim.com" className="font-weight-bold text-white" target="_blank">Creative Tim</span>
                for a better web.
              </div>
            </div>
           
          </div>
        </div>
      </footer>
    </div>
  </main>
    );
  }
}


  
  export default adminLogin;
  