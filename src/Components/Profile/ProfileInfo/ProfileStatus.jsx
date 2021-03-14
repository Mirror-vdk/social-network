import React from "react";
import s from "./ProfileInfo.module.css"


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
    }

    render() {
        return (
            <div>

                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>}
                {this.state.editMode &&
                <textarea placeholder="Введите сообщение" autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                          value={this.props.status} className={s.status_area}/>}
            </div>)
    }
}
    export default ProfileStatus