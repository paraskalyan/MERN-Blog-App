import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Write from './Pages/Write';
import Blog from './Pages/BlogPage';
import BlogPage from './Pages/BlogPage';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/write' element={<Write/>}/>
        <Route path='/blog/:id' element={<BlogPage/>}/>
      </Routes>
    </BrowserRouter>
     
      {/* <Login />
      <Home />
      <Write />
      <Blog /> */}
    </>
  );
}

export default App;
