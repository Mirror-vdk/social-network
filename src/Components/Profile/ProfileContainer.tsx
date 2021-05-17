import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    savePhoto,
    updateStatus,
    getAboutMe,
    saveProfile
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import { RouteComponentProps } from "react-router-dom";
import {ProfileType} from "../../types/types";

type MapPropsType =  ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    getUserProfile: (userId: number ) => void,
    getStatus: (userId:number ) => void,
    updateStatus: (text : string) => void,
    savePhoto: (file : File) => void,
    getAboutMe: () => void,
    saveProfile: (profile : ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}


type PropsType = MapPropsType & MapDispatchType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component <PropsType> {

    refreshProfile () {
        let userId: number | null = +this.props.match.params.userId
        if(!userId){
            userId=this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId as number)
        this.props.getStatus(userId as number)
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps:PropsType, prevState:PropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     //aboutMe={this.props.getAboutMe}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
                     updateStatus={this.props.updateStatus}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    aboutMe: state.profilePage.aboutMe,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect (mapStateToProps, {getUserProfile,getStatus,updateStatus,savePhoto,getAboutMe,saveProfile}),
    withRouter
)(ProfileContainer)
