import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import MyPosts from "./Components/Profile/MyPosts/MyPosts";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";



function App() {

  return (
    <div className="wrapper">
        <Header/>
        <Navbar/>
        <Profile/>
        <Footer/>
    </div>
  );
}

export default App;
