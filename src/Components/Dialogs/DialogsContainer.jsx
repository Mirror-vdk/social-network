import React from "react";
import {actions} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(actions.sendMessageCreator(newMessageText))
        }
    }
}

export default compose(
    withAuthRedirect,
    connect (mapStateToProps,mapDispatchToProps)
)(Dialogs)
