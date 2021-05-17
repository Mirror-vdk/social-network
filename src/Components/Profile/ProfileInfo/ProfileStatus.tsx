import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

type  StateType = {
    editMode: boolean
    status:string
}
class ProfileStatus extends React.Component <PropsType, StateType>  {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode =() => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({status:  e.currentTarget.value })

    }
    componentDidUpdate(prevProps:PropsType,prevState:StateType) {
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "Статус отсутсвует"}</span>
                </div>}
                {this.state.editMode &&
                <textarea onChange={this.onStatusChange}  placeholder="Введите сообщение" autoFocus={true} onBlur={this.deactivateEditMode}
                          value={this.state.status} className={s.status_area}/>}
            </div>)
    }
}
    export default ProfileStatus