import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter,Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";




function App(props) {
debugger
  return (
      <BrowserRouter>
          <div className="wrapper">
              <Header/>
              <Navbar state={props.state.sidebar}/>
              <Footer/>
              <div className="wrapper_content">
                  <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                  <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
