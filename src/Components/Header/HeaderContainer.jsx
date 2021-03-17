import React from "react";
import "./Header.module.css"
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, logout} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authMe()
    }
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps,{authMe,logout}) (HeaderContainer)