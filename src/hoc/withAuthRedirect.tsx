import React, {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";


let mapStateToPropsForRedirect = (state:AppStateType) => ({
    isAuth: state.auth.isAuth
})

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {

}

export function withAuthRedirect<WCP> (WrappedComponent:ComponentType<WCP>) {
    const RedirectComponent: FC <MapPropsType & DispatchPropsType> =  (props) => {
        let {isAuth,  ...restProps} = props
        if (!props.isAuth) return <Redirect to='/login'/>
        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType,DispatchPropsType , WCP, AppStateType > (mapStateToPropsForRedirect) (RedirectComponent)
    return ConnectedAuthRedirectComponent
}