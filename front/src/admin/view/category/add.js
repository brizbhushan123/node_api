import React  from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../../assets/css/material-dashboard.css';
// import '../../assets/css/nucleo-icons.css';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';  
import Header from '../../layout/Header';
import LeftSideBar from '../../layout/leftSideBar';
import Footer from '../../layout/footer';
//import ReactFormInputValidation from "react-form-input-validation";

class CategoryForm extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
          type: '',
          name: '',
          image: '',  
          description: '',
          selectedFile :'',
          errors: {
            type: '',
            name: '',
            image: '',
            description: '',
          }
      };
      this.handleChange = this.handleChange.bind(this);
     
    }
    validateForm(errors){
      let valid = true;
      Object.values(errors).forEach(val => val.length > 0 && (valid = false));
      return valid;
    };
    
    handleChange(event) {   
      var object = event.target;   
      var { name, value } = object;
      if(name === 'image'){
          var url = URL.createObjectURL(object.files[0])
          this.preview = url;
          this.setState({
            'selectedFile': object.files[0]
          });
      }        
      this.setState({
          [name]: value
      });
    }

    checkFormValidation(event) {    
      var { name, value } = event;
      let errors = this.state.errors;
      switch (name) {
        case 'name': 
          errors.name = value==='' ? 'Category name is Required *': '';
          break;
        case 'type': 
          errors.type = value===''? 'Type is Required *' : '';
          break;
        case 'image': 
          errors.image = value===''? 'Image is Required *' : '';
          break;
        case 'description': 
          errors.description = value===''? 'Description is Required *' : '';
          break;
        default:
          break;
      }
    }

  render() {
    const HandleSubmit = async (e)=>{
        e.preventDefault();  
        var form = e.target;
        for (const obj of form) {
          this.checkFormValidation(obj, 1);
        }
        
        if(!this.validateForm(this.state.errors)) {
          return false;
        }
          try {
           const data = new FormData();
           data.append("type", this.state.type);
           data.append("name", this.state.name);
           data.append("description", this.state.description);
           data.append("file", this.state.selectedFile);
           debugger;  
           //var url ='http://localhost/gov/react.php';
           var url ='http://localhost:3000/admin/category/add'
           axios.post(url, data, {
            })
            .then((res) => {debugger;
              toast.success(res.data.name, {position: toast.POSITION.TOP_RIGHT});
            },error=>{debugger;
              toast.error(error, {position: toast.POSITION.TOP_RIGHT});
            });
           
          }catch(e){

          }
          
    }
    const {errors} = this.state;
  return (
  <main className="main-content  mt-0">
    <Header id="{}"/>
    <LeftSideBar activeTab = {'category'}/>
    <div>
        <ToastContainer />  
    </div>
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                {/* <h6 className="text-white text-capitalize ps-3">Category Form</h6> */}
                <Link to="../admin/category" >
                  <Button variant="contained" style={{marginLeft: "12px"}}>Category List </Button>  
                </Link>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">

              <form onSubmit={HandleSubmit} encType="multipart/form-data">
                  <div className='input-group'>
                    <div className='col-6'>
                      <label >Age</label>
                      <select className="form-control border" name="type" value={this.state.type} onChange={this.handleChange}>
                        <option value="">Select Type</option>
                        <option value="Banner">Banner</option>
                        <option value="Blog">Blog</option>
                        <option value="Testimonial">Testimonial</option>
                        <option value="Other">Other</option>
                      </select>
                      <span className='text-danger text-sm fst-italic'>{errors.type}</span>
                    </div>

                    <div className='col-6'>
                      <label >Name</label><br/>
                      <input className='form-control border'
                        type="text" 
                        name="name" 
                        value={this.state.name || ""} 
                        onChange={this.handleChange}
                      />
                      <span className='text-danger text-sm fst-italic'>{this.state.errors.name}</span>
                    </div>

                    <div className='col-3'>
                      <label >Image</label>
                      <input className='form-control border'
                        type="file" 
                        name="image" 
                        value={this.state.image || ""} 
                        onChange={this.handleChange}
                      />
                      <span className='text-danger text-sm fst-italic'>{this.state.errors.image}</span>
                      <span className={this.preview===undefined?'d-none':'block'}>
                        <img className='col-6' src={this.preview} alt="category file"/>
                      </span>
                    </div>

                    <div className='col-6'>
                      <label >Description</label>
                        <textarea className='form-control border'
                          name="description"
                          value={this.state.description || ''} 
                          onChange={this.handleChange} />
                          <span className='text-danger text-sm fst-italic'>{this.state.errors.description}</span>
                    </div>
                    
                  </div>
                  <div className='col-9'>
                    <Button variant="contained" type="submit">Save </Button>
                  </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <Footer></Footer>
  </main>
    );
  }

}


export default CategoryForm;
  