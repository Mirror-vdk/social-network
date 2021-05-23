import React, {FC} from "react";
import {useSelector} from "react-redux";
import Preloader from "../../assets/Preloader/Preloader";
import {getIsFetching} from "../../redux/users-selectors";
import {Users} from "./Users";


type UsersPagePropsType = {

}


export const UsersPage : FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)
    return <>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}

