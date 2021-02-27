import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter,Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";


function App() {
debugger
  return (
      <BrowserRouter>
          <div className="wrapper">
              <Header/>
              <NavbarContainer/>
              <Footer/>
              <div className="wrapper_content">
                  <Route path='/profile' render={() => <Profile/>}/>
                  <Route path='/dialogs' render={() => <DialogsContainer/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
