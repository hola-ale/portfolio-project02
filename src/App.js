import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import SinglePost from "./Components/SinglePost/SinglePost";
import Post from "./Components/Post/Post";
import Project from "./Components/Project/Project";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} exact path='/' />
        <Route element={<About />} path="/about" />
        <Route element={<SinglePost />} path="/post/:slug" />
        <Route element={<Post />} path="/post" />
        <Route element={<Project />} path="/project" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
