import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter,Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";




function App(props) {

  return (
      <BrowserRouter>
          <div className="wrapper">
              <Header/>
              <Navbar state={props.state.navbarPage}/>
              <Footer/>
              <div className="wrapper_content">
                  <Route path='/profile' render={() => <Profile state={props.state.profilePage} />}/>
                  <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
