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

class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.match.params.userId
        if(!userId){
            userId=this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId ) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     aboutMe={this.props.getAboutMe}
                     status={this.props.status}
                     savePhoto={this.props.savePhoto}
                     updateStatus={this.props.updateStatus}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    aboutMe: state.profilePage.aboutMe,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect (mapStateToProps, {getUserProfile,getStatus,updateStatus,savePhoto,getAboutMe,saveProfile}),
    withRouter
)(ProfileContainer)
