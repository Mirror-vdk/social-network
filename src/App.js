import React, {Component} from "react";
import './App.css'
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Switch, Route, withRouter} from "react-router-dom";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {withSuspense} from "./hoc/withSuspense";
import store from "./redux/redux-store";
import UsersContainer from "./Components/Users/UsersContainer";


const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));



class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <div>Загрузка</div>
        }
        return (
                <div className="wrapper">
                    <HeaderContainer/>
                    <NavbarContainer/>
                    <Footer/>

                    <div className="wrapper_content">
                        <Switch>
                            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                            <Route path='/users' render={() => <UsersContainer pageTitle={"Самураи"}/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </Switch>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetworkApp
