import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter,Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";




function App() {

  return (
      <BrowserRouter>
          <div className="wrapper">
              <Header/>
              <Navbar/>
              <Footer/>
              <div className="wrapper_content">
                  <Route path='/profile' component={Profile}/>
                  <Route path='/dialogs' component={Dialogs}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
