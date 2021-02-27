import React from "react";
import Friends from "./Friends";
import {connect, Provider} from "react-redux";
import Navbar from "../Navbar";

let MapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

const FriendsContainer = connect (MapStateToProps) (Friends)


export default FriendsContainer