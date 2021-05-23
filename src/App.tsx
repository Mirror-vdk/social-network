import React, {Component, ComponentType, FC} from "react";
import './App.css'
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {withSuspense} from "./hoc/withSuspense";
import store, {AppStateType} from "./redux/redux-store";
import {UsersPage} from "./Components/Users/UsersContainer";
import {Login} from "./Components/Login/Login";



const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const SyspendedDialogs = withSuspense(DialogsContainer)
const SyspendedProfile = withSuspense(ProfileContainer)


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends Component <MapPropsType & DispatchPropsType> {
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
                            <Route path='/profile/:userId?' render={() => <SyspendedProfile/>}/>
                            <Route path='/dialogs' render={ ()=> <SyspendedDialogs/>}/>
                            <Route path='/users' render={() => <UsersPage/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </Switch>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state:AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SocialNetworkApp: FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetworkApp
