import React from "react";
import "./Header.css"


const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">logo</div>
            <div className="header_auth">
                    <div className="item">Login</div>
                    <div className="item_button"><button>Авторизоваться</button></div>
            </div>
        </div>
        )
}

export default Header;