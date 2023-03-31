
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminLogin from './admin/view/adminLogin';
import Dashboard from './admin/view/dashboard';
import Category from './admin/view/category';
import AddCategory from './admin/view/category/add';


function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />}/>
        <Route path="/admin/dashboard" element={<Dashboard />}/>
        <Route path="/admin/category" element={<Category />}/>
        <Route path="/admin/category/add" element={<AddCategory />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
