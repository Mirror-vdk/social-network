import React from "react";
import {connect} from "react-redux";
import {
    FilterType,
    follow, requestUsers,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../assets/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from "../../redux/users-selectors";
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    pageSize:number
    currentPage:number
    isFetching: boolean
    users: Array<UsersType>
    totalUsersCount: number
    followingInProgress: Array<number>
    filter: FilterType
}

type MapDispatchToPropsType = {
    getUsers: (currentPage:number, pageSize:number, filter: FilterType) => void
    unfollow: (userId:number) => void
    follow: (userId:number) => void

}

type OwnPropsType = {
    pageTitle: string
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType


class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage,pageSize,filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber:number) => {
        const {pageSize,filter}=  this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }
    onFilterChanged = (filter: FilterType) => {
        const {pageSize, currentPage}= this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   onFilterChanged={this.onFilterChanged}
            />
        </>
    }
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)
    }
}

export default compose(
    connect<MapStateToPropsType,MapDispatchToPropsType,OwnPropsType,AppStateType>(mapStateToProps, {follow, unfollow,getUsers: requestUsers})
)(UsersContainer)
