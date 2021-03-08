import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import Footer from "./Components/Footer/Footer";
import {BrowserRouter,Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


function App() {
  return (
      <BrowserRouter>
          <div className="wrapper">
              <HeaderContainer/>
              <NavbarContainer/>
              <Footer/>
              <div className="wrapper_content">
                  <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                  <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                  <Route path='/users' render={() => <UsersContainer/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
